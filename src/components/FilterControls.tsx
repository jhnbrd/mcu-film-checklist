import React from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown, Film, Tv, PlaySquare, ListFilter } from 'lucide-react';

export type PresetView = 'all' | 'films-only' | 'disney-plus' | 'custom';
export type SortOrder = 'release' | 'chronological';

interface FilterControlsProps {
  currentPreset: PresetView;
  onSelectPreset: (preset: PresetView) => void;
  currentSort: SortOrder;
  onSelectSort: (sort: SortOrder) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenCustomModal: () => void;
  customListCount: number;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  currentPreset,
  onSelectPreset,
  currentSort,
  onSelectSort,
  searchQuery,
  onSearchChange,
  onOpenCustomModal,
  customListCount,
}) => {
  const presets: { id: PresetView; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Connected', icon: <ListFilter className="w-3.5 h-3.5" /> },
    { id: 'films-only', label: 'Films Only', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'disney-plus', label: 'Disney+ Collection', icon: <Tv className="w-3.5 h-3.5" /> },
    { id: 'custom', label: `Custom List (${customListCount})`, icon: <PlaySquare className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="space-y-3 mb-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-textMuted pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Marvel movies, series, or one-shots..."
          className="w-full pl-10 pr-9 py-2.5 bg-marvel-surface border border-marvel-border rounded-xl text-sm text-slate-100 placeholder:text-marvel-textMuted/70 focus:outline-none focus:border-marvel-crimson focus:ring-1 focus:ring-marvel-crimson transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-marvel-textMuted hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Preset View Pills (Horizontal scrolling on small devices) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-medium">
        {presets.map((preset) => {
          const isActive = currentPreset === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl whitespace-nowrap transition-all select-none ${
                isActive
                  ? 'bg-marvel-crimson text-white font-semibold shadow-glow-crimson ring-1 ring-marvel-crimson'
                  : 'bg-marvel-surface text-slate-300 border border-marvel-border hover:border-marvel-borderLight hover:bg-marvel-surfaceAlt'
              }`}
            >
              {preset.icon}
              <span>{preset.label}</span>
            </button>
          );
        })}

        {/* Quick Edit button if on custom preset */}
        {currentPreset === 'custom' && (
          <button
            onClick={onOpenCustomModal}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-marvel-gold/20 text-marvel-gold border border-marvel-gold/40 hover:bg-marvel-gold/30 text-xs font-bold transition-all whitespace-nowrap ml-1"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Edit Custom</span>
          </button>
        )}
      </div>

      {/* Sort Switcher Bar */}
      <div className="flex items-center justify-between bg-marvel-surface/60 border border-marvel-border/80 rounded-xl p-1.5 text-xs">
        <div className="flex items-center gap-1.5 text-marvel-textMuted px-2 font-medium">
          <ArrowUpDown className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Timeline Order:</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onSelectSort('release')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSort === 'release'
                ? 'bg-marvel-surfaceAlt text-white font-bold shadow-sm border border-marvel-border'
                : 'text-marvel-textMuted hover:text-slate-200'
            }`}
          >
            Release Order
          </button>
          <button
            onClick={() => onSelectSort('chronological')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSort === 'chronological'
                ? 'bg-marvel-surfaceAlt text-marvel-gold font-bold shadow-sm border border-marvel-border'
                : 'text-marvel-textMuted hover:text-slate-200'
            }`}
          >
            Chronological Order
          </button>
        </div>
      </div>
    </div>
  );
};
