import React, { useMemo, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { mcuData } from './data/mcuData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { FilterControls, PresetView, SortOrder } from './components/FilterControls';
import { ChecklistItem } from './components/ChecklistItem';
import { CustomListModal } from './components/CustomListModal';
import { Film, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  // Persisted state
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>('completed_ids', []);
  const [customIds, setCustomIds] = useLocalStorage<string[]>(
    'custom_order',
    mcuData.map((item) => item.id) // default all selected for custom list
  );
  const [selectedPreset, setSelectedPreset] = useLocalStorage<PresetView>('selected_preset', 'all');
  const [selectedSort, setSelectedSort] = useLocalStorage<SortOrder>('selected_sort', 'release');

  // Search state & modal
  const [searchQuery, setSearchQuery] = useState('');
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  // Filter items based on preset and search query
  const filteredItems = useMemo(() => {
    return mcuData.filter((item) => {
      // 1. Search title match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchPhase = `phase ${item.phase}`.includes(query);
        if (!matchTitle && !matchPhase) return false;
      }

      // 2. Preset views
      switch (selectedPreset) {
        case 'films-only':
          return item.type === 'film';
        case 'disney-plus':
          return item.onDisneyPlus === true && (item.type === 'film' || item.type === 'series');
        case 'custom':
          return customIds.includes(item.id);
        case 'all':
        default:
          return true;
      }
    });
  }, [selectedPreset, searchQuery, customIds]);

  // Sort items
  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (selectedSort === 'chronological') {
        return a.chronologicalOrder - b.chronologicalOrder;
      }
      return a.releaseOrder - b.releaseOrder;
    });
  }, [filteredItems, selectedSort]);

  // Watched in current visible list
  const visibleCompletedCount = useMemo(() => {
    return sortedItems.filter((i) => completedIds.includes(i.id)).length;
  }, [sortedItems, completedIds]);

  // Check if 100% completed
  useEffect(() => {
    if (
      sortedItems.length > 0 &&
      visibleCompletedCount === sortedItems.length &&
      completedIds.length > 0
    ) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e62429', '#f59e0b', '#ffffff']
      });
    }
  }, [visibleCompletedCount, sortedItems.length]);

  // Toggle single item watched
  const handleToggleWatched = (id: string) => {
    setCompletedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Mark all visible as watched or unwatched
  const handleMarkAllVisible = () => {
    const visibleIds = sortedItems.map((i) => i.id);
    const allVisibleCompleted = visibleIds.every((id) => completedIds.includes(id));

    if (allVisibleCompleted) {
      // Unmark visible
      setCompletedIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      // Mark all visible
      setCompletedIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  // Reset all completed
  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset your watched progress?')) {
      setCompletedIds([]);
    }
  };

  // Share progress
  const handleShare = () => {
    const text = `I've watched ${completedIds.length} of ${mcuData.length} entries in the MCU! Track yours on MCU Watchlist.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col antialiased selection:bg-marvel-crimson selection:text-white pb-[env(safe-area-inset-bottom)]">
      {/* Top Bar / Header */}
      <Header onShareOrExport={handleShare} />

      {/* Main Container */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-4 sm:py-6">
        {/* Progress Tracker Ring / Bar */}
        <ProgressBar
          completedCount={visibleCompletedCount}
          totalCount={sortedItems.length}
          onReset={handleResetProgress}
          onMarkAll={handleMarkAllVisible}
        />

        {/* Filters, Presets, Search & Sort */}
        <FilterControls
          currentPreset={selectedPreset}
          onSelectPreset={setSelectedPreset}
          currentSort={selectedSort}
          onSelectSort={setSelectedSort}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenCustomModal={() => setIsCustomModalOpen(true)}
          customListCount={customIds.length}
        />

        {/* Checklist List */}
        {sortedItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-marvel-surface/50 border border-marvel-border rounded-3xl">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-marvel-surfaceAlt flex items-center justify-center text-marvel-textMuted border border-marvel-border">
              <Film className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold text-slate-200">No MCU entries found</h3>
            <p className="text-xs text-marvel-textMuted mt-1 max-w-xs mx-auto">
              {searchQuery
                ? `No entries match "${searchQuery}". Try a different keyword.`
                : 'Your current filter or custom list has no selected items.'}
            </p>
            {selectedPreset === 'custom' && (
              <button
                onClick={() => setIsCustomModalOpen(true)}
                className="mt-4 px-4 py-2 bg-marvel-crimson text-white text-xs font-semibold rounded-xl hover:bg-marvel-crimsonHover shadow-glow-crimson transition-all"
              >
                Configure Custom Watchlist
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-2.5">
            {sortedItems.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                isWatched={completedIds.includes(item.id)}
                onToggleWatched={handleToggleWatched}
                currentSort={selectedSort}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="py-6 border-t border-marvel-border/40 text-center text-xs text-marvel-textMuted/70 space-y-1">
        <p>Marvel Cinematic Universe Watchlist • Offline Ready PWA</p>
        <p className="text-[10px]">Data updated through Phase 6 & The Multiverse Saga • Stored locally in your browser</p>
      </footer>

      {/* Custom List Modal */}
      <CustomListModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        allItems={mcuData}
        customIds={customIds}
        onUpdateCustomIds={setCustomIds}
      />

      {/* Share Toast */}
      {copiedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-marvel-surface border border-marvel-gold text-white text-xs shadow-glow-gold animate-pop-in">
          <CheckCircle2 className="w-4 h-4 text-marvel-gold" />
          <span>Progress copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};
