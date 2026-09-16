import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';

export default function Skills() {
    return (
        <section className="page-section page-width" id="my-stack" aria-labelledby="skills-title">
            <SectionTitle title="My toolkit" id="skills-title" />
            <dl className="skills-list">
                {Object.entries(MY_STACK).map(([category, skills]) => (
                    <div className="skill-group" key={category}>
                        <dt>{category}</dt>
                        <dd><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
