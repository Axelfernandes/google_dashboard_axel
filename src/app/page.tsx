'use client';

import { KPICard } from "@/components/dashboard/kpi-card";
import { UsageChartsHub } from "@/components/dashboard/usage-charts";
import { ServiceHealthTable } from "@/components/dashboard/service-health-table";
import { OptimizationPanel } from "@/components/dashboard/optimization-panel";
import { mockProjectSummaries } from "@/lib/mock-data";
import { DollarSign, Cpu, Activity, ShieldCheck, Download, Calendar } from "lucide-react";

export default function Home() {
  const primaryProject = mockProjectSummaries[0];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Cloud Overview</h2>
          <p className="text-slate-400 mt-1">Real-time resource usage and health monitoring across project clusters.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-700/50 text-sm font-medium text-slate-300 hover:bg-slate-800/50 transition-all">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Monthly Cost"
          value={`$${primaryProject.monthlyCost.toLocaleString()}`}
          icon={DollarSign}
          trend={12.5}
          trendLabel="vs previous month"
        />
        <KPICard
          title="Compute Usage"
          value="450 Units"
          icon={Cpu}
          trend={-2.4}
          iconColor="text-emerald-400"
        />
        <KPICard
          title="System Health"
          value="98.2%"
          icon={Activity}
          iconColor="text-amber-400"
        />
        <KPICard
          title="Active Policies"
          value="12"
          icon={ShieldCheck}
          iconColor="text-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Charts */}
          <UsageChartsHub />

          {/* Health Table */}
          <ServiceHealthTable />
        </div>

        <div className="lg:col-span-1">
          {/* Optimization Sidebar */}
          <OptimizationPanel />
        </div>
      </div>
    </div>
  );
}
