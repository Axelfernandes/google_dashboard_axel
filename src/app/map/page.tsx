'use client';

import React, { useState } from 'react';
import { MockMap } from '@/components/map/mock-map';
import { SiteDetailPanel } from '@/components/map/site-detail-panel';
import { SiteLocation } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Plus, Search } from 'lucide-react';

export default function MapPage() {
    const [selectedSite, setSelectedSite] = useState<SiteLocation | null>(null);

    return (
        <div className="h-[calc(100vh-100px)] relative overflow-hidden flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-700">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                        <Globe className="w-8 h-8 text-blue-400" />
                        Global Footprint
                    </h2>
                    <p className="text-slate-400 mt-1">Geographic distribution of project workloads and customer site health.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search locations..."
                            className="pl-10 pr-4 py-2 bg-slate-900/40 border border-slate-700/50 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 w-64 transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-700/50 text-sm font-medium text-slate-300 hover:bg-slate-800/50 transition-all">
                        <Plus className="w-4 h-4" />
                        Add Site
                    </button>
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 min-h-0 relative">
                <MockMap
                    onSelectSite={setSelectedSite}
                    selectedSiteId={selectedSite?.id}
                />

                <AnimatePresence>
                    {selectedSite && (
                        <SiteDetailPanel
                            site={selectedSite}
                            onClose={() => setSelectedSite(null)}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Floating Info (Optional) */}
            {!selectedSite && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-12 right-12 glass p-6 rounded-2xl border border-white/10 max-w-sm"
                >
                    <h4 className="font-bold text-white mb-2">Did you know?</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Locations are color-coded by monthly spend. Tap a marker to see per-project cost breakdowns and regional health indicators.
                    </p>
                </motion.div>
            )}
        </div>
    );
}
