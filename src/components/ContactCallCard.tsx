import React, { useState } from 'react';
import { Check, Copy, Phone, Settings2 } from 'lucide-react';
import { DepartmentContact } from '../types/clinical';

interface ContactCallCardProps {
  contact: DepartmentContact;
  compact?: boolean;
}

export const ContactCallCard: React.FC<ContactCallCardProps> = ({ contact, compact = false }) => {
  const [copied, setCopied] = useState(false);
  const hasNumber = contact.extension.trim().length > 0;

  const handleCopy = async () => {
    if (!hasNumber) return;
    try {
      await navigator.clipboard.writeText(contact.extension);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable in restricted contexts
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3">
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-bold text-slate-900 truncate">
          {contact.roleName}
        </p>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-slate-500">
          {hasNumber ? (
            <span className="font-mono font-semibold text-blue-600 tabular-nums">
              {contact.extension}
            </span>
          ) : (
            <span className="font-medium text-slate-600">
              {contact.pagerOrMobile || 'Hospital Switchboard'}
            </span>
          )}
          {hasNumber && contact.pagerOrMobile && (
            <>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{contact.pagerOrMobile}</span>
            </>
          )}
        </div>
        {!compact && contact.escalationRule && (
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            {contact.escalationRule}
          </p>
        )}
      </div>

      {hasNumber ? (
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy number ${contact.extension}`}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
          </button>
          <a
            href={`tel:${contact.extension.replace(/[^0-9+*#]/g, '')}`}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:scale-[0.98] whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call</span>
          </a>
        </div>
      ) : (
        <a
          href="#admin"
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0"
        >
          <Settings2 className="h-3.5 w-3.5 text-slate-500" />
          <span>Add Local #</span>
        </a>
      )}
    </div>
  );
};
