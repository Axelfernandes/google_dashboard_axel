'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Map, BarChart3, AlertCircle, Settings, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Locations', href: '/map', icon: Map },
    { name: 'Usage Analysis', href: '/usage', icon: BarChart3 },
    { name: 'Service Health', href: '/health', icon: AlertCircle },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-screen w-64 glass-card border-r-0 rounded-none z-50">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <LayoutDashboard className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        GCP<span className="text-blue-400">Lens</span>
                    </h1>
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                                    isActive
                                        ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                                )}
                            >
                                <item.icon className={cn(
                                    "mr-3 h-5 w-5 transition-colors",
                                    isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
                                )} />
                                {item.name}
                                {isActive && (
                                    <ChevronRight className="ml-auto h-4 w-4" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50">
                    <p className="text-xs text-slate-500 mb-1">PRO PLAN</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200">Active Subscription</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                </div>

                <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                </Link>
            </div>
        </div>
    );
}
