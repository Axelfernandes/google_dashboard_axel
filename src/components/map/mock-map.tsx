'use client';

import React, { useState, useMemo } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { mockSites } from '@/lib/mock-data';
import { SiteLocation } from '@/lib/types';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MockMapProps {
    onSelectSite: (site: SiteLocation) => void;
    selectedSiteId?: string;
}

const MAP_ID = 'bf51a910020fa25a'; // A generic dark mode map ID

export function MockMap({ onSelectSite, selectedSiteId }: MockMapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    // Center of USA
    const defaultCenter = { lat: 39.8283, lng: -98.5795 };
    const defaultZoom = 4;

    return (
        <div className="relative w-full h-full bg-[#03060a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <APIProvider apiKey={apiKey}>
                <Map
                    defaultCenter={defaultCenter}
                    defaultZoom={defaultZoom}
                    mapId={MAP_ID}
                    disableDefaultUI={true}
                    // Custom styles for a premium dark look (simplified version for the component)
                    gestureHandling={'greedy'}
                    className="w-full h-full"
                >
                    {mockSites.map((site) => (
                        <CustomMarker
                            key={site.id}
                            site={site}
                            isActive={selectedSiteId === site.id}
                            onClick={() => onSelectSite(site)}
                        />
                    ))}
                </Map>
            </APIProvider>

            {/* Overlay Info Layer */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <div className="glass p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active View</p>
                    <h3 className="text-sm font-semibold text-white">North America Operations</h3>
                </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-6 left-6 z-10 glass p-4 rounded-2xl border border-white/10 space-y-3 backdrop-blur-xl">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Cost Intensity</h4>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20" />
                    <span className="text-xs text-slate-300 font-medium whitespace-nowrap">Low (&lt;$4k)</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/20" />
                    <span className="text-xs text-slate-300 font-medium whitespace-nowrap">Medium ($4k-$8k)</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-lg shadow-rose-500/20" />
                    <span className="text-xs text-slate-300 font-medium whitespace-nowrap">High (&gt;$8k)</span>
                </div>
            </div>
        </div>
    );
}

function CustomMarker({ site, isActive, onClick }: { site: SiteLocation, isActive: boolean, onClick: () => void }) {
    const colorClass = site.monthlyCost > 8000 ? "bg-rose-500" : site.monthlyCost > 4000 ? "bg-amber-500" : "bg-emerald-500";
    const shadowClass = site.monthlyCost > 8000 ? "shadow-rose-500/50" : site.monthlyCost > 4000 ? "shadow-amber-500/50" : "shadow-emerald-500/50";

    return (
        <AdvancedMarker
            position={{ lat: site.lat, lng: site.lng }}
            onClick={onClick}
        >
            <div className="relative flex flex-col items-center group cursor-pointer -translate-y-4">
                {/* Pulsing ring */}
                <div className={cn(
                    "absolute w-12 h-12 rounded-full animate-ping opacity-20",
                    colorClass
                )} />

                {/* Marker Core */}
                <div className={cn(
                    "relative w-8 h-8 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300",
                    isActive ? "scale-125 border-2 border-white" : "border border-white/20",
                    colorClass,
                    shadowClass
                )}>
                    <MapPin className="w-4 h-4 text-white" />
                </div>

                {/* Label */}
                <AnimatePresence>
                    {(isActive) && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-3 px-3 py-1.5 rounded-xl glass text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-2xl"
                        >
                            {site.name}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AdvancedMarker>
    );
}
