import { ProjectSummary, ServiceHealth, SiteLocation, OptimizationOpportunity, HealthIncident, UsageReport } from './types';

export const mockProjectSummaries: ProjectSummary[] = [
    {
        projectId: 'usa-enterprise-core',
        projectName: 'USA-Enterprise-Core',
        monthlyCost: 85400.00,
        previousMonthCost: 78200.00,
        costTrend: Array.from({ length: 30 }, (_, i) => 1500 + Math.sin(i) * 300),
        topServices: [
            { serviceName: 'BigQuery', cost: 35000.00, usageAmount: '45.2 TB' },
            { serviceName: 'Compute Engine', cost: 28000.00, usageAmount: '3,200 vCPUs' },
            { serviceName: 'Cloud Storage', cost: 12400.00, usageAmount: '1.2 PB' },
            { serviceName: 'GKE', cost: 10000.00, usageAmount: '15 Clusters' },
        ],
    },
    {
        projectId: 'regional-site-monitor',
        projectName: 'Regional-Site-Monitor',
        monthlyCost: 22000.75,
        previousMonthCost: 21800.00,
        costTrend: Array.from({ length: 30 }, (_, i) => 600 + Math.cos(i) * 100),
        topServices: [
            { serviceName: 'Cloud Functions', cost: 4200.00, usageAmount: '120M invocations' },
            { serviceName: 'Pub/Sub', cost: 3850.00, usageAmount: '8.5B messages' },
            { serviceName: 'Cloud Logging', cost: 7000.00, usageAmount: '25 TB' },
            { serviceName: 'Cloud SQL', cost: 6950.00, usageAmount: '12 Instances' },
        ],
    },
];

export const mockServiceHealth: ServiceHealth[] = [
    { serviceId: 'bq-us-multi', serviceName: 'BigQuery (Multiregion)', status: 'healthy', errorRate: 0.01, latencyMs: 110, region: 'US' },
    { serviceId: 'gke-us-west', serviceName: 'GKE West', status: 'degraded', errorRate: 1.8, latencyMs: 280, region: 'us-west1' },
    { serviceId: 'gke-us-central', serviceName: 'GKE Central', status: 'healthy', errorRate: 0.05, latencyMs: 95, region: 'us-central1' },
    { serviceId: 'gke-us-east', serviceName: 'GKE East', status: 'healthy', errorRate: 0.08, latencyMs: 105, region: 'us-east1' },
    { serviceId: 'gcs-us-multi', serviceName: 'Cloud Storage', status: 'healthy', errorRate: 0.005, latencyMs: 45, region: 'US' },
];

export const mockSites: SiteLocation[] = [
    // WEST
    { id: '1', name: 'Los Angeles Logistics', lat: 34.0522, lng: -118.2437, projectIds: ['usa-enterprise-core'], region: 'us-west2', monthlyCost: 12400, healthScore: 98 },
    { id: '2', name: 'San Francisco R&D', lat: 37.7749, lng: -122.4194, projectIds: ['usa-enterprise-core'], region: 'us-west1', monthlyCost: 18500, healthScore: 92 },
    { id: '3', name: 'Seattle Cloud Hub', lat: 47.6062, lng: -122.3321, projectIds: ['usa-enterprise-core'], region: 'us-west2', monthlyCost: 9200, healthScore: 96 },
    { id: '4', name: 'Portland Distribution', lat: 45.5152, lng: -122.6784, projectIds: ['regional-site-monitor'], region: 'us-west1', monthlyCost: 4500, healthScore: 94 },
    { id: '5', name: 'Phoenix Datacenter', lat: 33.4484, lng: -112.0740, projectIds: ['usa-enterprise-core'], region: 'us-west2', monthlyCost: 15600, healthScore: 88 },
    { id: '6', name: 'San Diego Support', lat: 32.7157, lng: -117.1611, projectIds: ['regional-site-monitor'], region: 'us-west2', monthlyCost: 3100, healthScore: 99 },
    { id: '7', name: 'Las Vegas Operations', lat: 36.1699, lng: -115.1398, projectIds: ['usa-enterprise-core'], region: 'us-west4', monthlyCost: 6700, healthScore: 95 },
    { id: '8', name: 'Salt Lake City Node', lat: 40.7608, lng: -111.8910, projectIds: ['regional-site-monitor'], region: 'us-west3', monthlyCost: 2800, healthScore: 91 },
    { id: '9', name: 'Denver Tech Center', lat: 39.7392, lng: -104.9903, projectIds: ['usa-enterprise-core'], region: 'us-west3', monthlyCost: 8900, healthScore: 93 },
    { id: '10', name: 'Boise Satellite', lat: 43.6150, lng: -116.2023, projectIds: ['regional-site-monitor'], region: 'us-west2', monthlyCost: 1200, healthScore: 97 },

    // CENTRAL
    { id: '11', name: 'Austin Innovation', lat: 30.2672, lng: -97.7431, projectIds: ['usa-enterprise-core'], region: 'us-central1', monthlyCost: 14200, healthScore: 94 },
    { id: '12', name: 'Dallas Logistics', lat: 32.7767, lng: -96.7970, projectIds: ['usa-enterprise-core'], region: 'us-central1', monthlyCost: 11800, healthScore: 89 },
    { id: '13', name: 'Houston Energy Analytics', lat: 29.7604, lng: -95.3698, projectIds: ['usa-enterprise-core'], region: 'us-central1', monthlyCost: 16500, healthScore: 95 },
    { id: '14', name: 'San Antonio Branch', lat: 29.4241, lng: -98.4936, projectIds: ['regional-site-monitor'], region: 'us-central1', monthlyCost: 3400, healthScore: 96 },
    { id: '15', name: 'Chicago Headquarters', lat: 41.8781, lng: -87.6298, projectIds: ['usa-enterprise-core'], region: 'us-central1', monthlyCost: 21000, healthScore: 91 },
    { id: '16', name: 'Minneapolis Retail Analytics', lat: 44.9778, lng: -93.2650, projectIds: ['usa-enterprise-core'], region: 'us-central1', monthlyCost: 7200, healthScore: 94 },
    { id: '17', name: 'Kansas City Node', lat: 39.0997, lng: -94.5786, projectIds: ['regional-site-monitor'], region: 'us-central1', monthlyCost: 2100, healthScore: 98 },
    { id: '18', name: 'St. Louis Manufacturing', lat: 38.6270, lng: -90.1994, projectIds: ['usa-enterprise-core'], region: 'us-central1', monthlyCost: 9500, healthScore: 85 },
    { id: '19', name: 'Nashville Content Hub', lat: 36.1627, lng: -86.7816, projectIds: ['regional-site-monitor'], region: 'us-east4', monthlyCost: 4800, healthScore: 97 },
    { id: '20', name: 'Oklahoma City Ops', lat: 35.4676, lng: -97.5164, projectIds: ['regional-site-monitor'], region: 'us-central1', monthlyCost: 1800, healthScore: 99 },

    // EAST
    { id: '21', name: 'New York Financial', lat: 40.7128, lng: -74.0060, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 28500, healthScore: 92 },
    { id: '22', name: 'Boston Biotech Hub', lat: 42.3601, lng: -71.0589, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 15400, healthScore: 96 },
    { id: '23', name: 'Philadelphia Branch', lat: 39.9526, lng: -75.1652, projectIds: ['regional-site-monitor'], region: 'us-east4', monthlyCost: 3200, healthScore: 93 },
    { id: '24', name: 'Washington DC Gov', lat: 38.9072, lng: -77.0369, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 19800, healthScore: 99 },
    { id: '25', name: 'Miami Gateway', lat: 25.7617, lng: -80.1918, projectIds: ['usa-enterprise-core'], region: 'us-east1', monthlyCost: 8200, healthScore: 90 },
    { id: '26', name: 'Atlanta Logistics', lat: 33.7490, lng: -84.3880, projectIds: ['usa-enterprise-core'], region: 'us-east1', monthlyCost: 12600, healthScore: 95 },
    { id: '27', name: 'Charlotte Fintech', lat: 35.2271, lng: -80.8431, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 10400, healthScore: 94 },
    { id: '28', name: 'Orlando Entertainment', lat: 28.5383, lng: -81.3792, projectIds: ['regional-site-monitor'], region: 'us-east1', monthlyCost: 6100, healthScore: 87 },
    { id: '29', name: 'Richmond Backup', lat: 37.5407, lng: -77.4360, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 4200, healthScore: 98 },
    { id: '30', name: 'Baltimore Security', lat: 39.2904, lng: -76.6122, projectIds: ['regional-site-monitor'], region: 'us-east4', monthlyCost: 2400, healthScore: 91 },

    // OTHERS / MIDWEST
    { id: '31', name: 'Detroit Auto Analytics', lat: 42.3314, lng: -83.0458, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 7800, healthScore: 88 },
    { id: '32', name: 'Indianapolis Node', lat: 39.7684, lng: -86.1581, projectIds: ['regional-site-monitor'], region: 'us-east4', monthlyCost: 1900, healthScore: 97 },
    { id: '33', name: 'Columbus Datacenter', lat: 39.9612, lng: -82.9988, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 11200, healthScore: 94 },
    { id: '34', name: 'Cleveland Branch', lat: 41.4993, lng: -81.6944, projectIds: ['regional-site-monitor'], region: 'us-east4', monthlyCost: 1500, healthScore: 95 },
    { id: '35', name: 'Milwaukee Support', lat: 43.0389, lng: -87.9065, projectIds: ['regional-site-monitor'], region: 'us-central1', monthlyCost: 1200, healthScore: 99 },
    { id: '36', name: 'Memphis Logistics', lat: 35.1495, lng: -90.0490, projectIds: ['usa-enterprise-core'], region: 'us-east4', monthlyCost: 5600, healthScore: 92 },
    { id: '37', name: 'New Orleans Site', lat: 29.9511, lng: -90.0715, projectIds: ['regional-site-monitor'], region: 'us-east1', monthlyCost: 2300, healthScore: 84 },
    { id: '38', name: 'San Jose Silicon Valley', lat: 37.3382, lng: -121.8863, projectIds: ['usa-enterprise-core'], region: 'us-west1', monthlyCost: 16800, healthScore: 96 },
    { id: '39', name: 'Albuquerque Node', lat: 35.0844, lng: -106.6504, projectIds: ['regional-site-monitor'], region: 'us-west3', monthlyCost: 1100, healthScore: 98 },
    { id: '40', name: 'Tucson Branch', lat: 32.2226, lng: -110.9747, projectIds: ['regional-site-monitor'], region: 'us-west2', monthlyCost: 900, healthScore: 99 },
    { id: '41', name: 'Sacramento Capital', lat: 38.5816, lng: -121.4944, projectIds: ['usa-enterprise-core'], region: 'us-west1', monthlyCost: 4100, healthScore: 97 },
    { id: '42', name: 'Anchorage Frontier', lat: 61.2181, lng: -149.9003, projectIds: ['regional-site-monitor'], region: 'us-west1', monthlyCost: 800, healthScore: 100 },
];

export const mockOpportunities: OptimizationOpportunity[] = [
    {
        id: 'opt-1',
        targetId: 'usa-enterprise-core',
        type: 'cost',
        title: 'Idle Resources in NYC',
        description: 'High storage costs detected for unattached disks in us-east4. Cleanup could save $1,200/month.',
        potentialSavings: 1200,
        impact: 'high',
    },
    {
        id: 'opt-2',
        targetId: 'gke-us-west',
        type: 'reliability',
        title: 'Regional Latency Spike',
        description: 'GKE Clusters in us-west1 are experiencing 280ms latency. Review inter-zone traffic routing.',
        impact: 'medium',
    },
];
export const mockIncidents: HealthIncident[] = [
    {
        id: 'inc-1',
        serviceName: 'GKE West',
        region: 'us-west1',
        status: 'investigating',
        severity: 'medium',
        startTime: '2024-03-21T08:30:00Z',
        description: 'Increased latency and intermittent timeouts observed in us-west1 clusters.'
    },
    {
        id: 'inc-2',
        serviceName: 'Compute Engine',
        region: 'us-central1',
        status: 'resolved',
        severity: 'high',
        startTime: '2024-03-20T14:15:00Z',
        endTime: '2024-03-20T16:45:00Z',
        description: 'Partial service outage affecting instance provisioning in us-central1-a.'
    },
    {
        id: 'inc-3',
        serviceName: 'Cloud Storage',
        region: 'global',
        status: 'resolved',
        severity: 'low',
        startTime: '2024-03-19T10:00:00Z',
        endTime: '2024-03-19T11:20:00Z',
        description: 'Slight delay in object metadata propagation.'
    }
];

export const mockUsageReports: UsageReport[] = [
    {
        serviceName: 'Compute Engine',
        data: Array.from({ length: 24 }, (_, i) => ({
            timestamp: `${i}:00`,
            value: 400 + Math.sin(i / 3) * 50 + Math.random() * 20
        }))
    },
    {
        serviceName: 'BigQuery',
        data: Array.from({ length: 24 }, (_, i) => ({
            timestamp: `${i}:00`,
            value: 200 + Math.cos(i / 4) * 100 + Math.random() * 30
        }))
    },
    {
        serviceName: 'Cloud Storage',
        data: Array.from({ length: 24 }, (_, i) => ({
            timestamp: `${i}:00`,
            value: 800 + Math.sin(i / 2) * 150 + Math.random() * 40
        }))
    }
];
