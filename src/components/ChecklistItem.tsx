import React from 'react';
import { Check, Tv, Film, PlaySquare, Calendar, Shield } from 'lucide-react';
import { MCUItem } from '../data/mcuData';
import { SortOrder } from './FilterControls';

interface ChecklistItemProps {
  item: MCUItem;
  isWatched: boolean;
  onToggleWatched: (id: string) => void;
  currentSort: SortOrder;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  item,
  isWatched,
  onToggleWatched,
  currentSort,
}) => {
  const getTypeBadge = (type: MCUItem['type']) => {
    switch (type) {
      case 'film':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/25">
            <Film className="w-2.5 h-2.5" />
            Film
          </span>
        );
      case 'series':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/25">
            <Tv className="w-2.5 h-2.5" />
            Series
          </span>
        );
      case 'one-shot':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-500/15 text-purple-400 border border-purple-500/25">
            <PlaySquare className="w-2.5 h-2.5" />
            One-Shot
          </span>
        );
    }
  };

  const formattedDate = new Date(item.releaseDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const orderNumber = currentSort === 'chronological' ? item.chronologicalOrder : item.releaseOrder;
  const orderLabel = currentSort === 'chronological' ? 'Timeline #' : 'Release #';

  return (
    <div
      onClick={() => onToggleWatched(item.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onToggleWatched(item.id);
        }
      }}
      className={`group relative flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer select-none min-h-[64px] active:scale-[0.985] ${
        isWatched
          ? 'bg-slate-900/60 border-marvel-border/40 opacity-75 hover:opacity-100'
          : 'bg-marvel-surface/90 border-marvel-border hover:border-marvel-borderLight hover:bg-marvel-surfaceAlt shadow-sm'
      }`}
    >
      {/* Left: Sequence index + Checkbox */}
      <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
        {/* Custom Touch-Friendly Checkbox (Minimum 44px tap target area) */}
        <div
          className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 ${
            isWatched
              ? 'bg-gradient-to-br from-marvel-crimson to-red-700 text-white shadow-glow-crimson ring-2 ring-red-500/30'
              : 'border-2 border-marvel-borderLight group-hover:border-marvel-crimson/80 bg-slate-950/50'
          }`}
        >
          {isWatched && <Check className="w-4 h-4 stroke-[3]" />}
        </div>

        {/* Title and metadata */}
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-start gap-2">
            <span
              className={`text-sm sm:text-base font-semibold leading-snug transition-colors break-words ${
                isWatched ? 'line-through text-slate-400 font-normal' : 'text-slate-100 group-hover:text-white'
              }`}
            >
              {item.title}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] text-marvel-textMuted">
            {/* Type badge */}
            {getTypeBadge(item.type)}

            {/* Phase badge */}
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
              <Shield className="w-2.5 h-2.5 text-marvel-gold" />
              Phase {item.phase}
            </span>

            {/* Disney+ indicator */}
            {item.onDisneyPlus && (
              <span className="hidden xs:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-semibold bg-sky-950/70 text-sky-300 border border-sky-800/60">
                Disney+
              </span>
            )}

            {/* Release Date */}
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Calendar className="w-3 h-3 text-marvel-textMuted" />
              {formattedDate}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Sequence order tag */}
      <div className="text-right shrink-0">
        <div className="inline-flex flex-col items-end">
          <span className="text-[10px] uppercase font-bold text-marvel-textMuted tracking-wider">
            {orderLabel}
          </span>
          <span className="text-sm sm:text-base font-mono font-extrabold text-slate-300 group-hover:text-marvel-gold transition-colors">
            {orderNumber.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};
