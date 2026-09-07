import React, { useState } from 'react';
import { X, Check, Search, CheckSquare, Square } from 'lucide-react';
import { MCUItem } from '../data/mcuData';

interface CustomListModalProps {
  isOpen: boolean;
  onClose: () => void;
  allItems: MCUItem[];
  customIds: string[];
  onUpdateCustomIds: (ids: string[]) => void;
}

export const CustomListModal: React.FC<CustomListModalProps> = ({
  isOpen,
  onClose,
  allItems,
  customIds,
  onUpdateCustomIds,
}) => {
  const [modalSearch, setModalSearch] = useState('');

  if (!isOpen) return null;

  const filteredItems = allItems.filter(item =>
    item.title.toLowerCase().includes(modalSearch.toLowerCase())
  );

  const toggleItem = (id: string) => {
    if (customIds.includes(id)) {
      onUpdateCustomIds(customIds.filter(itemId => itemId !== id));
    } else {
      onUpdateCustomIds([...customIds, id]);
    }
  };

  const selectAll = () => {
    onUpdateCustomIds(allItems.map(i => i.id));
  };

  const deselectAll = () => {
    onUpdateCustomIds([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop-in">
      <div className="relative w-full max-w-lg max-h-[90vh] flex flex-col bg-marvel-surface border border-marvel-border rounded-3xl shadow-glass overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-marvel-border">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Customize Watchlist</span>
            </h3>
            <p className="text-xs text-marvel-textMuted mt-0.5">
              Select which films and series appear in your custom view ({customIds.length} of {allItems.length} selected)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-marvel-textMuted hover:text-white hover:bg-marvel-surfaceAlt transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls & Search */}
        <div className="p-4 border-b border-marvel-border space-y-3 bg-slate-900/40">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-textMuted" />
            <input
              type="text"
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
              placeholder="Search items to include..."
              className="w-full pl-9 pr-3 py-2 bg-marvel-surfaceAlt border border-marvel-border rounded-xl text-xs text-slate-100 placeholder:text-marvel-textMuted/70 focus:outline-none focus:border-marvel-crimson"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={selectAll}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-marvel-surfaceAlt border border-marvel-border hover:border-marvel-borderLight text-slate-300 transition-colors"
              >
                <CheckSquare className="w-3.5 h-3.5 text-marvel-gold" />
                <span>Select All</span>
              </button>
              <button
                onClick={deselectAll}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-marvel-surfaceAlt border border-marvel-border hover:border-marvel-borderLight text-slate-300 transition-colors"
              >
                <Square className="w-3.5 h-3.5 text-slate-400" />
                <span>Deselect All</span>
              </button>
            </div>
            <span className="font-mono text-marvel-gold font-bold">
              {customIds.length} Included
            </span>
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 divide-y divide-marvel-border/20">
          {filteredItems.map((item) => {
            const isSelected = customIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer select-none transition-all ${
                  isSelected ? 'bg-marvel-crimson/10 border border-marvel-crimson/30' : 'hover:bg-marvel-surfaceAlt/60 border border-transparent'
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0 mr-2">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isSelected
                        ? 'bg-marvel-crimson text-white'
                        : 'border border-marvel-borderLight bg-slate-900'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-slate-200 leading-snug break-words">{item.title}</div>
                    <div className="text-[11px] text-marvel-textMuted capitalize mt-0.5">
                      Phase {item.phase} • {item.type}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 font-mono">
                  {new Date(item.releaseDate).getFullYear()}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-marvel-border flex items-center justify-end bg-marvel-surface">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-marvel-crimson hover:bg-marvel-crimsonHover text-white text-sm font-semibold shadow-glow-crimson transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
