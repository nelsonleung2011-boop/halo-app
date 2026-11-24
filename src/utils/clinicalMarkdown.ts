import { CATEGORIES, APP_GUIDELINE_VERSION, APP_LAST_UPDATED } from '../data/contactsAndCategories';
import { CLINICAL_TOPICS } from '../data/clinicalRegistry';
import { DosingItem } from '../types/clinical';

function formatDosingRule(d: DosingItem): string {
  if (d.formulaType === 'fixed') return d.fixedDoseText ?? '';
  if (d.formulaType === 'per_kg') {
    const cap = d.maxSingleDose ? ` (max ${d.maxSingleDose} ${d.unit})` : '';
    return `${d.dosePerKg} ${d.unit}/kg${cap}`;
  }
  if (d.formulaType === 'range_per_kg') {
    const cap = d.maxSingleDose ? ` (max ${d.maxSingleDose} ${d.unit})` : '';
    const dual = d.dualRateAdrenaline ? ' [dual mL/hr + mcg/min]' : '';
    return `${d.minDosePerKg}–${d.maxDosePerKg} ${d.unit}/kg${cap}${dual}`;
  }
  return '';
}

export function generateClinicalReviewMarkdown(): string {
  const lines: string[] = [];

  lines.push('# HALO Emergency — Complete Clinical Content Review');
  lines.push('');
  lines.push(`- **Version**: ${APP_GUIDELINE_VERSION}`);
  lines.push(`- **Last Reviewed**: ${APP_LAST_UPDATED}`);
  lines.push(`- **Total Clinical Modules**: ${CLINICAL_TOPICS.length}`);
  lines.push(
    `- **Total Interactive Algorithms**: ${CLINICAL_TOPICS.reduce(
      (sum, t) => sum + t.algorithms.length,
      0
    )}`
  );
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Table of Contents');
  lines.push('');

  for (const cat of CATEGORIES) {
    const topics = CLINICAL_TOPICS.filter((t) => t.category === cat.id);
    lines.push(`### ${cat.title}`);
    for (const t of topics) {
      lines.push(`- **${t.title}** (${t.algorithms.map((a) => a.title).join('; ')})`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  let topicNum = 1;
  for (const cat of CATEGORIES) {
    const topics = CLINICAL_TOPICS.filter((t) => t.category === cat.id);
    lines.push(`# Category: ${cat.title}`);
    lines.push('');

    for (const topic of topics) {
      lines.push(`## ${topicNum}. ${topic.title}`);
      topicNum++;
      lines.push('');
      lines.push(`- **Category**: ${cat.title}`);
      lines.push(`- **Escalation Roles**: ${topic.defaultContactRoles.join(', ')}`);
      lines.push(
        `- **Evidence Source**: ${topic.evidence.society} — *${topic.evidence.guidelineName}* (${topic.evidence.year}) [${topic.evidence.evidenceLevel}]`
      );
      lines.push(`- **Citation**: ${topic.evidence.citation}`);
      lines.push(`- **Evidence Summary**: ${topic.evidence.summary}`);
      lines.push(`- **Reference URL**: ${topic.evidence.url}`);
      lines.push('');

      lines.push('### Common Clinical Pitfalls (DO NOT)');
      for (const pitfall of topic.commonPitfalls) {
        lines.push(`- ${pitfall}`);
      }
      lines.push('');

      lines.push('### Editable Local Department Workflow (Default Template)');
      lines.push('**Escalation Steps:**');
      topic.defaultLocalWorkflow.escalationSteps.forEach((step, idx) => {
        lines.push(`${idx + 1}. ${step}`);
      });
      lines.push('');
      lines.push(`- **Stock & Equipment**: ${topic.defaultLocalWorkflow.stockAndEquipment}`);
      lines.push(`- **Admission / Transfer Criteria**: ${topic.defaultLocalWorkflow.admissionCriteria}`);
      lines.push('');

      for (const algo of topic.algorithms) {
        lines.push(`### Algorithm: ${algo.title}`);
        lines.push('');
        lines.push(`- **Presentation Trigger**: ${algo.presentationTrigger}`);
        if (algo.colorTag) {
          lines.push(`- **Pathway Color Tag**: ${algo.colorTag.toUpperCase()}`);
        }
        lines.push(`- **Start Node**: \`${algo.startNodeId}\``);
        lines.push(`- **Keywords**: ${algo.keywords.join(', ')}`);
        lines.push('');

        for (const node of Object.values(algo.nodes)) {
          lines.push(`#### Node \`${node.id}\` — ${node.title} [${node.phase.toUpperCase()}]`);
          lines.push(`> **Prompt**: ${node.prompt}`);
          lines.push('');

          if (node.timerConfig) {
            lines.push(
              `**Bedside Timer / Guard**: \`${node.timerConfig.label}\` (${node.timerConfig.kind}, ${node.timerConfig.durationSec}s${
                node.timerConfig.autoStart ? ', auto-start' : ''
              })`
            );
            lines.push('');
          }

          if (node.svgDiagramId) {
            lines.push(`**Inline Anatomical / Vector SVG**: \`${node.svgDiagramId}\``);
            lines.push('');
          }

          if (node.calculatorId) {
            lines.push(`**Inline Bedside Calculator**: \`${node.calculatorId}\``);
            lines.push('');
          }

          if (node.deviceSettings && node.deviceSettings.length > 0) {
            lines.push('**Device Settings:**');
            for (const s of node.deviceSettings) {
              lines.push(`- \`${s}\``);
            }
            lines.push('');
          }

          if (node.actions && node.actions.length > 0) {
            lines.push('**Clinical Actions:**');
            for (const a of node.actions) {
              lines.push(`- [ ] ${a}`);
            }
            lines.push('');
          }

          if (node.expandableProcedure) {
            lines.push(`**Expandable Procedure Micro-Card**: ${node.expandableProcedure.title}`);
            for (const s of node.expandableProcedure.steps) {
              lines.push(`- ${s}`);
            }
            lines.push('');
          }

          if (node.dosingItems && node.dosingItems.length > 0) {
            lines.push('**Weight-Based Dosing Guidance:**');
            for (const d of node.dosingItems) {
              const conc = d.concentrationLabel ? ` [${d.concentrationLabel}]` : '';
              const stock = d.requiresStockToggle
                ? ` (Requires ${d.requiresStockToggle})`
                : d.hideWhenStockToggle
                ? ` (Shown if !${d.hideWhenStockToggle})`
                : '';
              const note = d.clinicalNote ? ` — *Note: ${d.clinicalNote}*` : '';
              lines.push(
                `- **${d.drugName}**: \`${formatDosingRule(d)}\` (${d.route}, ${d.rateOrFrequency})${conc}${stock}${note}`
              );
            }
            lines.push('');
          }

          if (node.contextualPitfall) {
            lines.push(`**Contextual Pitfall Warning**: ${node.contextualPitfall}`);
            lines.push('');
          }

          if (node.inlineCallRoles && node.inlineCallRoles.length > 0) {
            lines.push(`**Recommended Immediate Calls**: ${node.inlineCallRoles.join(', ')}`);
            lines.push('');
          }

          if (node.branches.length > 0) {
            lines.push('**Decision Branches:**');
            for (const b of node.branches) {
              const note = b.conditionNote ? ` (${b.conditionNote})` : '';
              const cross = b.crossAlgorithmTarget
                ? ` [Cross-Route: \`${b.crossAlgorithmTarget.topicId}/${b.crossAlgorithmTarget.algoId}\`]`
                : '';
              lines.push(`- **${b.label}**${note} → \`${b.nextNodeId}\`${cross}`);
            }
            lines.push('');
          }

          if (node.disposition) {
            lines.push(`**Disposition**: ${node.disposition.destination} (${node.disposition.urgency})`);
            for (const item of node.disposition.checklist) {
              lines.push(`- [x] ${item}`);
            }
            lines.push('');
          }
        }
      }

      lines.push('---');
      lines.push('');
    }
  }

  return lines.join('\n');
}
