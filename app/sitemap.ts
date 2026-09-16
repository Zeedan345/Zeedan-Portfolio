import type { MetadataRoute } from 'next';
import { GENERAL_INFO, PROJECTS } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: GENERAL_INFO.siteUrl, changeFrequency: 'monthly', priority: 1 },
        ...PROJECTS.map((project) => ({
            url: `${GENERAL_INFO.siteUrl}/projects/${project.slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ];
}
