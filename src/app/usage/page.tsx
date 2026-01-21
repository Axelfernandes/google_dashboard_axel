'use client';

import React from 'react';
import { KPICard } from "@/components/dashboard/kpi-card";
import { mockProjectSummaries, mockUsageReports } from "@/lib/mock-data";
import { DollarSign, BarChart3, TrendingUp, Zap, Clock } from "lucide-react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, Cell
} from 'recharts';

export default function UsagePage() {
    const primaryProject = mockProjectSummaries[0];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
            {/* Header */}
            <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                <h2 className="text-3xl font-bold text-white tracking-tight">Usage Analysis</h2>
                <p className="text-slate-400 mt-1">Deep dive into resource consumption and cost efficiency across services.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Compute Efficiency"
                    value="94.2%"
                    icon={Zap}
                    trend={4.2}
                    iconColor="text-blue-400"
                />
                <KPICard
                    title="Storage Growth"
                    value="+12.4 TB"
                    icon={TrendingUp}
                    trend={1.8}
                    iconColor="text-emerald-400"
                />
                <KPICard
                    title="API Requests"
                    value="1.2B"
                    icon={BarChart3}
                    trend={-0.5}
                    iconColor="text-amber-400"
                />
                <KPICard
                    title="Avg. Query Time"
                    value="120ms"
                    icon={Clock}
                    trend={-12}
                    iconColor="text-rose-400"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Granular Usage Chart */}
                <div className="glass-card p-6 rounded-3xl border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-6">Service Usage (Last 24h)</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={mockUsageReports[2].data}>
                                <defs>
                                    <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis
                                    dataKey="timestamp"
                                    stroke="#94a3b8"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}U`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#0f172a',
                                        border: '1px solid #ffffff10',
                                        borderRadius: '12px',
                                        color: '#fff'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3b82f6"
                                    fillOpacity={1}
                                    fill="url(#usageGradient)"
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Cost Distribution */}
                <div className="glass-card p-6 rounded-3xl border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-6">Cost by Service Category</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={primaryProject.topServices}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis
                                    dataKey="serviceName"
                                    stroke="#94a3b8"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value / 1000}k`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#0f172a',
                                        border: '1px solid #ffffff10',
                                        borderRadius: '12px'
                                    }}
                                    cursor={{ fill: '#ffffff05' }}
                                />
                                <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                                    {primaryProject.topServices.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index % 4]} opacity={0.8} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Detailed Consumers Table */}
            <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white">Top Resource Consumers</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Service</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Usage Amount</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Monthly Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {primaryProject.topServices.map((service, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-semibold text-slate-200">{service.serviceName}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-400">{service.usageAmount}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-1.5 w-24 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500 rounded-full"
                                                    style={{ width: `${85 - idx * 10}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-slate-500">{85 - idx * 10}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-mono text-blue-400 font-semibold">${service.cost.toLocaleString()}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
