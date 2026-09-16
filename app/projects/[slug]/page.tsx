import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => PROJECTS.map((project) => ({ slug: project.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((item) => item.slug === slug);
    if (!project) notFound();
    return {
        title: project.title,
        description: project.summary,
        alternates: { canonical: `/projects/${slug}` },
        openGraph: { title: project.title, description: project.summary, url: `/projects/${slug}`, type: 'website' },
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS.find((item) => item.slug === slug);
    if (!project) notFound();
    return <ProjectDetails project={project} />;
}
