'use client';

import React from 'react';
import { mockServiceHealth } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Activity, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServiceHealthTable() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden"
        >
            <div className="p-6 border-b border-white/5">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-400" />
                    Service Health Snapshot
                </h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs font-medium text-slate-500 uppercase tracking-wider bg-slate-900/30">
                            <th className="px-6 py-4">Service</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Region</th>
                            <th className="px-6 py-4">Error Rate</th>
                            <th className="px-6 py-4">Latency</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mockServiceHealth.map((service) => (
                            <tr key={service.serviceId} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-slate-200">{service.serviceName}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-tight">{service.serviceId}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className={cn(
                                        "flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full w-fit",
                                        service.status === 'healthy' ? "text-emerald-400 bg-emerald-400/10" :
                                            service.status === 'degraded' ? "text-amber-400 bg-amber-400/10" :
                                                "text-rose-400 bg-rose-400/10"
                                    )}>
                                        {service.status === 'healthy' ? <CheckCircle2 className="w-3 h-3" /> :
                                            service.status === 'degraded' ? <AlertTriangle className="w-3 h-3" /> :
                                                <XCircle className="w-3 h-3" />}
                                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-400">{service.region}</td>
                                <td className="px-6 py-4 text-sm text-slate-400">{service.errorRate}%</td>
                                <td className="px-6 py-4 text-sm text-slate-400 font-mono">{service.latencyMs}ms</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
