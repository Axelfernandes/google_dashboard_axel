'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Map, BarChart3, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Locations', href: '/map', icon: Map },
    { name: 'Analysis', href: '/usage', icon: BarChart3 },
    { name: 'Health', href: '/health', icon: AlertCircle },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
            <div className="glass-panel border-t border-white/10 bg-[#0f172a]/90 backdrop-blur-xl pb-2">
                <nav className="flex items-center justify-around w-full">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative flex flex-col items-center justify-center py-3 px-2 min-w-[4.5rem] transition-colors duration-200",
                                    isActive ? "text-blue-400" : "text-slate-500 active:text-slate-300"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -top-[1px] left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <item.icon className={cn(
                                    "h-6 w-6 mb-1 transition-transform duration-200",
                                    isActive && "scale-110"
                                )} />
                                <span className={cn(
                                    "text-[10px] font-medium tracking-wide",
                                    isActive ? "text-blue-400" : "text-slate-500"
                                )}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
