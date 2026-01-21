'use client';

import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface KPICardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: number;
    trendLabel?: string;
    className?: string;
    iconColor?: string;
}

export function KPICard({
    title,
    value,
    icon: Icon,
    trend,
    trendLabel,
    className,
    iconColor = "text-blue-400"
}: KPICardProps) {
    const isPositive = trend && trend > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={cn("glass-card p-6 rounded-2xl flex flex-col gap-4 group", className)}
        >
            <div className="flex items-center justify-between">
                <div className={cn("p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/50 group-hover:scale-110 transition-transform duration-300", iconColor)}>
                    <Icon className="w-5 h-5" />
                </div>
                {trend !== undefined && (
                    <div className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                        isPositive ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
                    )}>
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(trend)}%
                    </div>
                )}
            </div>

            <div>
                <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
                {trendLabel && (
                    <p className="text-xs text-slate-500 mt-1">{trendLabel}</p>
                )}
            </div>
        </motion.div>
    );
}
