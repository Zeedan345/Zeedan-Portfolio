import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { IProject } from '@/types';

export default function Project({ index, project }: { index: number; project: IProject }) {
    return (
        <li>
            <Link href={`/projects/${project.slug}`} className="project-row">
                <span className={`project-number ${['project-number-0', 'project-number-1', 'project-number-2'][index % 3]}`} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <span className="project-stack">{project.techStack.slice(0, 3).join(' / ')}</span>
                </div>
                <ArrowUpRight className="project-arrow" size={24} aria-hidden="true" />
            </Link>
        </li>
    );
}
