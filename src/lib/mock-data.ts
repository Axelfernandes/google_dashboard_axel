import { ProjectSummary, ServiceHealth, SiteLocation, OptimizationOpportunity } from './types';

export const mockProjectSummaries: ProjectSummary[] = [
    {
        projectId: 'aec-prod-1234',
        projectName: 'AEC-Production-US',
        monthlyCost: 12540.50,
        previousMonthCost: 11200.00,
        costTrend: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500) + 300),
        topServices: [
            { serviceName: 'BigQuery', cost: 4500.00, usageAmount: '12.5 TB' },
            { serviceName: 'Compute Engine', cost: 3800.00, usageAmount: '450 Instances' },
            { serviceName: 'Cloud Storage', cost: 2100.00, usageAmount: '85 TB' },
        ],
    },
    {
        projectId: 'site-monitor-global',
        projectName: 'Site-Monitor-Global',
        monthlyCost: 5200.75,
        previousMonthCost: 5800.00,
        costTrend: Array.from({ length: 30 }, () => Math.floor(Math.random() * 200) + 150),
        topServices: [
            { serviceName: 'Cloud Functions', cost: 1200.00, usageAmount: '45M invocations' },
            { serviceName: 'Pub/Sub', cost: 850.00, usageAmount: '1.2B messages' },
            { serviceName: 'Filestore', cost: 2200.00, usageAmount: '10 TB' },
        ],
    },
];

export const mockServiceHealth: ServiceHealth[] = [
    { serviceId: 'bq-us', serviceName: 'BigQuery', status: 'healthy', errorRate: 0.01, latencyMs: 120, region: 'us-central1' },
    { serviceId: 'gke-eu', serviceName: 'GKE Cluster', status: 'degraded', errorRate: 2.5, latencyMs: 350, region: 'europe-west1' },
    { serviceId: 'gcs-asia', serviceName: 'Cloud Storage', status: 'healthy', errorRate: 0.05, latencyMs: 85, region: 'asia-east1' },
    { serviceId: 'pubsub-global', serviceName: 'Pub/Sub', status: 'healthy', errorRate: 0.001, latencyMs: 15, region: 'global' },
];

export const mockSites: SiteLocation[] = [
    { id: '1', name: 'Chicago Manufacturing Hub', lat: 41.8781, lng: -87.6298, projectIds: ['aec-prod-1234'], region: 'us-central1', monthlyCost: 8500, healthScore: 94 },
    { id: '2', name: 'Berlin R&D Center', lat: 52.5200, lng: 13.4050, projectIds: ['aec-prod-1234', 'site-monitor-global'], region: 'europe-west1', monthlyCost: 4200, healthScore: 78 },
    { id: '3', name: 'Tokyo Distribution', lat: 35.6762, lng: 139.6503, projectIds: ['site-monitor-global'], region: 'asia-east1', monthlyCost: 5100, healthScore: 98 },
    { id: '4', name: 'Singapore Logistics', lat: 1.3521, lng: 103.8198, projectIds: ['aec-prod-1234'], region: 'asia-southeast1', monthlyCost: 1200, healthScore: 92 },
];

export const mockOpportunities: OptimizationOpportunity[] = [
    {
        id: 'opt-1',
        targetId: 'aec-prod-1234',
        type: 'cost',
        title: 'Rightsizing Compute Engine',
        description: '3 instances in aec-prod-1234 are underutilized (<5% average CPU). Moving to smaller machine types could save $450/month.',
        potentialSavings: 450,
        impact: 'medium',
    },
    {
        id: 'opt-2',
        targetId: 'gke-eu',
        type: 'reliability',
        title: 'GKE Persistent High Latency',
        description: 'Regional cluster in europe-west1 is showing 350ms average latency. Consider multi-zonal deployment to improve availability.',
        impact: 'high',
    },
];
