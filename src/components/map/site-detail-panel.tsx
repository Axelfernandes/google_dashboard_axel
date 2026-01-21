'use client';

import React from 'react';
import { SiteLocation } from '@/lib/types';
import { mockProjectSummaries } from '@/lib/mock-data';
import { X, MapPin, DollarSign, Activity, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SidePanelProps {
    site: SiteLocation | null;
    onClose: () => void;
}

export function SiteDetailPanel({ site, onClose }: SidePanelProps) {
    if (!site) return null;

    const primaryProject = mockProjectSummaries.find(p => p.projectId === site.projectIds[0]);

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 w-96 h-full glass-card border-l border-white/10 z-50 p-8 overflow-y-auto"
        >
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Location Details</h3>
                <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-8">
                {/* Site Header */}
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">{site.name}</h4>
                        <p className="text-sm text-slate-400">{site.region}</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <DollarSign className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold tracking-wider">Monthly Cost</span>
                        </div>
                        <span className="text-lg font-bold text-white">${site.monthlyCost.toLocaleString()}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <Activity className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold tracking-wider">Health</span>
                        </div>
                        <span className={cn(
                            "text-lg font-bold",
                            site.healthScore > 90 ? "text-emerald-400" : "text-amber-400"
                        )}>{site.healthScore}%</span>
                    </div>
                </div>

                {/* Linked Projects */}
                <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Linked GCP Projects</h5>
                    <div className="space-y-3">
                        {site.projectIds.map(pid => (
                            <div key={pid} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                <span className="text-sm font-medium text-slate-200">{pid}</span>
                                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 font-bold">ACTIVE</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services */}
                {primaryProject && (
                    <div>
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Top Services at this Site</h5>
                        <div className="space-y-4">
                            {primaryProject.topServices.map(service => (
                                <div key={service.serviceName} className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-slate-900/60 text-emerald-400 scale-90">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-medium text-slate-200">{service.serviceName}</span>
                                            <span className="text-sm font-semibold text-slate-400">${service.cost.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
                                            <div
                                                className="bg-emerald-500 h-full rounded-full"
                                                style={{ width: `${(service.cost / primaryProject.monthlyCost) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Health Status */}
                <div className={cn(
                    "p-4 rounded-2xl flex items-center gap-4 border",
                    site.healthScore > 90
                        ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/5 border-amber-500/10 text-amber-400"
                )}>
                    {site.healthScore > 90 ? <CheckCircle2 className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                    <div>
                        <span className="text-sm font-bold block">Status: {site.healthScore > 90 ? 'Operational' : 'Issues Detected'}</span>
                        <span className="text-xs opacity-70">Region {site.region} monitoring active</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
