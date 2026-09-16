import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import Project from './Project';

export default function ProjectList() {
    return (
        <section className="page-section page-width projects-section" id="selected-projects" aria-labelledby="projects-title">
            <SectionTitle title="Selected projects" id="projects-title" />
            <ul className="project-list">
                {PROJECTS.map((project, index) => <Project key={project.slug} index={index} project={project} />)}
            </ul>
        </section>
    );
}
