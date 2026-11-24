import {
  AlgorithmNode,
  CategoryId,
  ClinicalAlgorithm,
  ClinicalTopic,
  SearchResultItem,
} from '../types/clinical';
import { AIRWAY_TOPICS } from './airwayAlgorithms';
import { CARDIO_ENT_TOPICS } from './cardiovascularAndEntAlgorithms';
import { ENDOCRINE_TOX_TOPICS } from './endocrineAndToxAlgorithms';
import { MODULES_AIRWAY_CARDIO } from './modulesAirwayCardio';
import { MODULES_GI_ENV_IMM_TOX } from './modulesGiEnvImmTox';

export const CLINICAL_TOPICS: ClinicalTopic[] = [
  ...AIRWAY_TOPICS,
  ...MODULES_AIRWAY_CARDIO,
  ...CARDIO_ENT_TOPICS,
  ...ENDOCRINE_TOX_TOPICS,
  ...MODULES_GI_ENV_IMM_TOX,
];

export const ALL_ALGORITHMS: { topic: ClinicalTopic; algorithm: ClinicalAlgorithm }[] =
  CLINICAL_TOPICS.flatMap((topic) =>
    topic.algorithms.map((algorithm) => ({ topic, algorithm }))
  );

export const DIRECT_HOME_ALGORITHMS: { topic: ClinicalTopic; algorithm: ClinicalAlgorithm }[] =
  ALL_ALGORITHMS.filter(({ algorithm }) => algorithm.isDirectHomeShortcut);

export function getTopicById(topicId: string): ClinicalTopic | undefined {
  return CLINICAL_TOPICS.find((t) => t.id === topicId);
}

export function getTopicsByCategory(category: CategoryId): ClinicalTopic[] {
  return CLINICAL_TOPICS.filter((t) => t.category === category);
}

export function getAlgorithmEntry(
  topicId: string,
  algoId?: string
): { topic: ClinicalTopic; algorithm: ClinicalAlgorithm } | undefined {
  const topic = getTopicById(topicId);
  if (!topic) return undefined;
  const algorithm = algoId
    ? topic.algorithms.find((a) => a.id === algoId) ?? topic.algorithms[0]
    : topic.algorithms[0];
  if (!algorithm) return undefined;
  return { topic, algorithm };
}

export function searchAlgorithms(query: string): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);
  const results: SearchResultItem[] = [];

  for (const { topic, algorithm } of ALL_ALGORITHMS) {
    let score = 0;
    let matchReason = '';

    const titleLower = algorithm.title.toLowerCase();
    const topicLower = topic.title.toLowerCase();
    const triggerLower = algorithm.presentationTrigger.toLowerCase();
    const kwLower = algorithm.keywords.join(' ').toLowerCase();

    if (titleLower === q || algorithm.shortTitle.toLowerCase() === q) {
      score += 120;
      matchReason = 'Exact algorithm match';
    } else if (titleLower.includes(q) || topicLower.includes(q)) {
      score += 90;
      matchReason = `Matches ${topic.shortTitle}`;
    }

    let tokenHits = 0;
    for (const tok of tokens) {
      if (titleLower.includes(tok)) {
        score += 45;
        tokenHits++;
      } else if (kwLower.includes(tok)) {
        score += 35;
        tokenHits++;
        if (!matchReason) matchReason = 'Keyword / Drug / Device';
      } else if (triggerLower.includes(tok)) {
        score += 25;
        tokenHits++;
        if (!matchReason) matchReason = 'Presentation trigger';
      } else {
        const nodeText = Object.values(algorithm.nodes)
          .map(
            (n) =>
              `${n.title} ${n.prompt} ${(n.actions ?? []).join(' ')} ${n.contextualPitfall ?? ''}`
          )
          .join(' ')
          .toLowerCase();
        if (nodeText.includes(tok)) {
          score += 15;
          tokenHits++;
          if (!matchReason) matchReason = 'Step action / Dosing';
        }
      }
    }

    if (tokenHits === tokens.length && score > 0) {
      results.push({
        topic,
        algorithm,
        score,
        matchReason: matchReason || topic.shortTitle,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

/**
 * Computes shortest remaining hops to a disposition/terminal node for accurate progress indication.
 */
export function getAlgorithmProgress(
  algorithm: ClinicalAlgorithm,
  historyLength: number,
  currentNodeId: string
): { currentStep: number; estimatedTotal: number; percent: number } {
  const currentNode = algorithm.nodes[currentNodeId];
  if (!currentNode || currentNode.branches.length === 0 || currentNode.phase === 'disposition') {
    const total = Math.max(1, historyLength + 1);
    return { currentStep: total, estimatedTotal: total, percent: 100 };
  }

  // BFS shortest distance to terminal node from currentNodeId
  const visited = new Set<string>([currentNodeId]);
  const queue: { id: string; dist: number }[] = [{ id: currentNodeId, dist: 0 }];
  let minRemaining = 1;

  while (queue.length > 0) {
    const { id, dist } = queue.shift()!;
    const node = algorithm.nodes[id];
    if (!node) continue;
    if (node.branches.length === 0 || node.phase === 'disposition') {
      minRemaining = Math.max(1, dist);
      break;
    }
    for (const b of node.branches) {
      if (!visited.has(b.nextNodeId)) {
        visited.add(b.nextNodeId);
        queue.push({ id: b.nextNodeId, dist: dist + 1 });
      }
    }
  }

  const currentStep = historyLength + 1;
  const estimatedTotal = Math.max(currentStep + minRemaining, algorithm.estimatedSteps);
  const percent = Math.min(95, Math.max(10, Math.round((currentStep / estimatedTotal) * 100)));

  return { currentStep, estimatedTotal, percent };
}

/**
 * Organizes algorithm nodes into topological levels for the interactive Flow Map view.
 */
export function getTopologicalNodeLevels(algorithm: ClinicalAlgorithm): AlgorithmNode[][] {
  const levels: AlgorithmNode[][] = [];
  const assigned = new Set<string>();
  const start = algorithm.nodes[algorithm.startNodeId];
  if (!start) return levels;

  let currentFrontier: AlgorithmNode[] = [start];
  assigned.add(start.id);

  while (currentFrontier.length > 0) {
    levels.push(currentFrontier);
    const nextFrontier: AlgorithmNode[] = [];
    for (const node of currentFrontier) {
      for (const branch of node.branches) {
        if (!assigned.has(branch.nextNodeId) && algorithm.nodes[branch.nextNodeId]) {
          assigned.add(branch.nextNodeId);
          nextFrontier.push(algorithm.nodes[branch.nextNodeId]);
        }
      }
    }
    currentFrontier = nextFrontier;
  }

  // Catch any orphaned nodes just in case
  const remaining = Object.values(algorithm.nodes).filter((n) => !assigned.has(n.id));
  if (remaining.length > 0) levels.push(remaining);

  return levels;
}
