export interface ProjectSummary {
    projectId: string;
    projectName: string;
    monthlyCost: number;
    previousMonthCost: number;
    topServices: ServiceUsage[];
    costTrend: number[]; // Last 30 days
}

export interface ServiceUsage {
    serviceName: string;
    cost: number;
    usageAmount: string;
}

export interface ServiceHealth {
    serviceId: string;
    serviceName: string;
    status: 'healthy' | 'degraded' | 'down';
    errorRate: number;
    latencyMs: number;
    region: string;
}

export interface SiteLocation {
    id: string;
    name: string;
    lat: number;
    lng: number;
    projectIds: string[];
    region: string;
    monthlyCost: number;
    healthScore: number; // 0-100
}

export interface OptimizationOpportunity {
    id: string;
    targetId: string; // project or service id
    type: 'cost' | 'performance' | 'reliability';
    title: string;
    description: string;
    potentialSavings?: number;
    impact: 'low' | 'medium' | 'high';
}
