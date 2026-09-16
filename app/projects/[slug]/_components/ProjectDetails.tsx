import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { IProject } from '@/types';
import { PROJECTS } from '@/lib/data';

export default function ProjectDetails({ project }: { project: IProject }) {
    const index = PROJECTS.findIndex((item) => item.slug === project.slug);
    const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

    return (
        <article className="page-width project-detail">
            <Link href="/#selected-projects" className="text-link project-back"><ArrowLeft size={17} aria-hidden="true" /> All projects</Link>
            <header className="detail-header">
                <p className="small-label">Project {String(index + 1).padStart(2, '0')} / {project.year}</p>
                <h1>{project.title}</h1>
                <p className="detail-summary">{project.summary}</p>
                <ul className="detail-tags" aria-label="Technologies">{project.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                {(project.sourceCode || project.liveUrl) && <div className="detail-links">
                    {project.sourceCode && <a className="pixel-button" href={project.sourceCode} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" /> View source</a>}
                    {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={18} aria-hidden="true" /></a>}
                </div>}
            </header>
            <div className="detail-content">
                <section aria-labelledby="overview-title">
                    <h2 id="overview-title">The project</h2>
                    <div className="markdown-text">{parse(project.description)}</div>
                </section>
                <section className="detail-role" aria-labelledby="role-title">
                    <h2 id="role-title">What I built</h2>
                    <p>{project.role}</p>
                </section>
            </div>
            {project.images.length > 0 && <section className="project-gallery" aria-labelledby="gallery-title">
                <h2 id="gallery-title">A closer look</h2>
                <div className="gallery-grid">
                    {project.images.map((src, imageIndex) => (
                        <a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} screenshot ${imageIndex + 1} in full size`}>
                            <Image src={src} alt={`${project.name} app screenshot ${imageIndex + 1}`} width={1170} height={2532} sizes="(max-width: 600px) 90vw, 33vw" />
                        </a>
                    ))}
                </div>
            </section>}
            <Link href={`/projects/${nextProject.slug}`} className="project-next">
                <div><span className="small-label">Next project</span><strong>{nextProject.name}</strong></div>
                <ArrowRight size={25} aria-hidden="true" />
            </Link>
        </article>
    );
}
