'use client';

import React from 'react';
import { KPICard } from "@/components/dashboard/kpi-card";
import { ServiceHealthTable } from "@/components/dashboard/service-health-table";
import { mockServiceHealth, mockIncidents } from "@/lib/mock-data";
import { ShieldCheck, Activity, AlertTriangle, Clock, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HealthPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Service Health</h2>
                    <p className="text-slate-400 mt-1">Global status monitoring and incident response history.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    All Systems Operational
                </div>
            </div>

            {/* Health Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Overall Uptime"
                    value="99.998%"
                    icon={Activity}
                    iconColor="text-emerald-400"
                />
                <KPICard
                    title="Active Incidents"
                    value={mockIncidents.filter(i => i.status !== 'resolved').length.toString()}
                    icon={AlertTriangle}
                    iconColor="text-amber-400"
                />
                <KPICard
                    title="Avg. Resolve Time"
                    value="2.4h"
                    icon={Clock}
                    iconColor="text-blue-400"
                />
                <KPICard
                    title="Regions Monitored"
                    value="12"
                    icon={MapPin}
                    iconColor="text-rose-400"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Services List */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Regional Service Status</h3>
                            <button className="text-xs font-bold text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors">
                                View Full Status Page
                            </button>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mockServiceHealth.map((service) => (
                                <div
                                    key={service.serviceId}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-white/10 transition-all"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-slate-200">{service.serviceName}</span>
                                        <span className="text-xs text-slate-500 uppercase tracking-wider">{service.region}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <div className={cn(
                                                "text-xs font-bold uppercase tracking-widest",
                                                service.status === 'healthy' ? "text-emerald-400" : "text-amber-400"
                                            )}>
                                                {service.status}
                                            </div>
                                            <div className="text-[10px] text-slate-500">{service.latencyMs}ms latency</div>
                                        </div>
                                        <div className={cn(
                                            "w-2 h-2 rounded-full",
                                            service.status === 'healthy' ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]"
                                        )} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Component (Reuse Table) */}
                    <ServiceHealthTable />
                </div>

                {/* Incident History Timeline */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-card p-6 rounded-3xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-6">Recent Incidents</h3>
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-z-10 before:w-0.5 before:bg-white/5">
                            {mockIncidents.map((incident) => (
                                <div key={incident.id} className="relative pl-12">
                                    <div className={cn(
                                        "absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-xl",
                                        incident.severity === 'high' ? "bg-rose-500/10 border-rose-500/20 text-rose-400" :
                                            incident.severity === 'medium' ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
                                                "bg-blue-500/10 border-blue-500/20 text-blue-400"
                                    )}>
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-slate-200">{incident.serviceName}</h4>
                                            <span className="text-[10px] text-slate-500">{new Date(incident.startTime).toLocaleDateString()}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed italic">
                                            "{incident.description}"
                                        </p>
                                        <div className="flex items-center gap-2 pt-1">
                                            <span className={cn(
                                                "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md",
                                                incident.status === 'resolved' ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
                                            )}>
                                                {incident.status}
                                            </span>
                                            <span className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">{incident.region}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-slate-400 uppercase tracking-widest hover:bg-white/10 hover:text-slate-200 transition-all flex items-center justify-center gap-2">
                            Load Full History
                            <ExternalLink className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
