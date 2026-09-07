import React from 'react';
import { ArcReactorLogo } from './ArcReactorLogo';
import { ShieldCheck, Share2 } from 'lucide-react';

interface HeaderProps {
  onShareOrExport?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShareOrExport }) => {
  return (
    <header className="sticky top-0 z-40 bg-marvel-bgDark/90 backdrop-blur-xl border-b border-marvel-border/70 pt-[env(safe-area-inset-top)] transition-all">
      <div className="max-w-3xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand logo and title */}
        <div className="flex items-center gap-3">
          <ArcReactorLogo size={38} />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                MCU Watchlist
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase bg-marvel-crimson text-white tracking-wider">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-marvel-textMuted flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-marvel-gold" />
              <span>Phases 1 – 6+ • Complete Checklist</span>
            </p>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {onShareOrExport && (
            <button
              onClick={onShareOrExport}
              title="Share progress"
              className="p-2 rounded-xl bg-marvel-surface border border-marvel-border hover:border-marvel-borderLight text-slate-300 hover:text-white transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
