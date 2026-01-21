'use client';

import React, { useState } from 'react';
import { mockSites } from '@/lib/mock-data';
import { SiteLocation } from '@/lib/types';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MockMapProps {
    onSelectSite: (site: SiteLocation) => void;
    selectedSiteId?: string;
}

export function MockMap({ onSelectSite, selectedSiteId }: MockMapProps) {
    // Rough conversion of lat/lng to percentage for a mock map
    // Chicago: 41.8781, -87.6298 -> ~x: 25%, y: 40%
    // Berlin: 52.5200, 13.4050 -> ~x: 52%, y: 32%
    // Tokyo: 35.6762, 139.6503 -> ~x: 88%, y: 45%
    // Singapore: 1.3521, 103.8198 -> ~x: 80%, y: 75%

    const getPosition = (site: SiteLocation) => {
        if (site.id === '1') return { left: '25%', top: '40%' };
        if (site.id === '2') return { left: '52%', top: '32%' };
        if (site.id === '3') return { left: '88%', top: '45%' };
        if (site.id === '4') return { left: '80%', top: '75%' };
        return { left: '50%', top: '50%' };
    };

    return (
        <div className="relative w-full h-full bg-[#0b0e14] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150 200Q200 150 250 200T350 200" stroke="white" strokeWidth="0.5" />
                    <circle cx="250" cy="200" r="1" fill="white" />
                    <path d="M500 150Q550 100 600 150T700 150" stroke="white" strokeWidth="0.5" />
                    <circle cx="550" cy="150" r="1" fill="white" />
                    {/* Add more abstract shapes to make it look like a map grid */}
                    <rect x="0" y="0" width="1000" height="600" fill="url(#grid)" />
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.2" opacity="0.3" />
                        </pattern>
                    </defs>
                </svg>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />

            {/* Markers */}
            {mockSites.map((site) => {
                const pos = getPosition(site);
                const isActive = selectedSiteId === site.id;
                const colorClass = site.monthlyCost > 8000 ? "bg-rose-500" : site.monthlyCost > 4000 ? "bg-amber-500" : "bg-emerald-500";
                const shadowClass = site.monthlyCost > 8000 ? "shadow-rose-500/50" : site.monthlyCost > 4000 ? "shadow-amber-500/50" : "shadow-emerald-500/50";

                return (
                    <motion.button
                        key={site.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => onSelectSite(site)}
                        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
                        style={pos}
                    >
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
                        <div className={cn(
                            "mt-3 px-3 py-1.5 rounded-xl glass text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md border border-white/10 transition-all duration-300",
                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                        )}>
                            {site.name}
                        </div>
                    </motion.button>
                );
            })}

            {/* Legend */}
            <div className="absolute bottom-8 left-8 glass p-4 rounded-2xl border border-white/10 space-y-3">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Cost Intensity</h4>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20" />
                    <span className="text-xs text-slate-300 font-medium">Low (&lt;$4k)</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/20" />
                    <span className="text-xs text-slate-300 font-medium">Medium ($4k-$8k)</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-lg shadow-rose-500/20" />
                    <span className="text-xs text-slate-300 font-medium">High (&gt;$8k)</span>
                </div>
            </div>
        </div>
    );
}
