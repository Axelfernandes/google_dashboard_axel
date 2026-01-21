'use client';

import React from 'react';
import { mockOpportunities } from '@/lib/mock-data';
import { Lightbulb, ArrowUpRight, ShieldAlert, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function OptimizationPanel() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    Optimization Opportunities
                </h3>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{mockOpportunities.length} Total Tips</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {mockOpportunities.map((opt, idx) => (
                    <motion.div
                        key={opt.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        className="glass-card p-5 rounded-2xl group relative overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className={cn(
                            "absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity",
                            opt.type === 'cost' ? "bg-emerald-500" : "bg-blue-500"
                        )} />

                        <div className="flex items-start gap-4">
                            <div className={cn(
                                "p-3 rounded-xl",
                                opt.type === 'cost' ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
                            )}>
                                {opt.type === 'cost' ? <Zap className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-semibold text-slate-100">{opt.title}</h4>
                                    <span className={cn(
                                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                                        opt.impact === 'high' ? "bg-rose-500/20 text-rose-400 border border-rose-500/20" :
                                            opt.impact === 'medium' ? "bg-amber-500/20 text-amber-400 border border-amber-500/20" :
                                                "bg-blue-500/20 text-blue-400 border border-blue-500/20"
                                    )}>
                                        {opt.impact} Impact
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">{opt.description}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-4">
                                        {opt.potentialSavings && (
                                            <div>
                                                <span className="text-[10px] text-slate-500 uppercase tracking-tight block">Potential Savings</span>
                                                <span className="text-sm font-bold text-emerald-400">${opt.potentialSavings}/mo</span>
                                            </div>
                                        )}
                                        <div>
                                            <span className="text-[10px] text-slate-500 uppercase tracking-tight block">Scope</span>
                                            <span className="text-sm font-medium text-slate-300">{opt.targetId}</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
                                        Analyze
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
