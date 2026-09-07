import React from 'react';
import { Sparkles, Trophy, RotateCcw } from 'lucide-react';

interface ProgressBarProps {
  completedCount: number;
  totalCount: number;
  onReset: () => void;
  onMarkAll: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completedCount,
  totalCount,
  onReset,
  onMarkAll,
}) => {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isComplete = percentage === 100 && totalCount > 0;

  return (
    <div className="bg-marvel-surface/90 backdrop-blur-md border border-marvel-border rounded-2xl p-4 shadow-lg mb-5 transition-all">
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg ${isComplete ? 'bg-amber-500/20 text-marvel-gold' : 'bg-marvel-crimson/20 text-marvel-crimson'}`}>
            {isComplete ? <Trophy className="w-5 h-5 animate-bounce" /> : <Sparkles className="w-5 h-5" />}
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-marvel-textMuted">
              Tracking Progress
            </div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{completedCount} of {totalCount} Watched</span>
              <span className="text-marvel-textMuted">•</span>
              <span className={`font-mono ${isComplete ? 'text-marvel-gold font-black' : 'text-marvel-crimson font-bold'}`}>
                {percentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onMarkAll}
            title={completedCount === totalCount ? "Unmark All" : "Mark Current View as Watched"}
            className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-marvel-surfaceAlt border border-marvel-border hover:border-marvel-borderLight hover:text-white text-slate-300 transition-colors"
          >
            {completedCount === totalCount ? "Unmark All" : "Mark All"}
          </button>
          {completedCount > 0 && (
            <button
              onClick={onReset}
              title="Reset progress"
              className="p-1.5 rounded-lg bg-marvel-surfaceAlt border border-marvel-border hover:border-red-500/40 text-slate-400 hover:text-red-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Track */}
      <div className="relative w-full h-3 bg-slate-900/80 rounded-full overflow-hidden p-[2px] border border-marvel-border/60">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out relative ${
            isComplete
              ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
              : 'bg-gradient-to-r from-[#991216] via-[#e62429] to-[#f59e0b] shadow-[0_0_12px_rgba(230,36,41,0.5)]'
          }`}
          style={{ width: `${percentage}%` }}
        >
          {/* Subtle animated shimmer line */}
          <div className="absolute inset-0 bg-white/20 -skew-x-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
