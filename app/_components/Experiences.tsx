import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';

export default function Experiences() {
    return (
        <section className="page-section page-width" id="my-experience" aria-labelledby="experience-title">
            <SectionTitle title="Where I’ve been" id="experience-title" />
            <p className="section-description">Research labs, real-world software, and a lot of learning along the way.</p>
            <ol className="experience-list">
                {MY_EXPERIENCE.map((item) => (
                    <li className="experience-item" key={`${item.company}-${item.title}`}>
                        <div className="experience-date">{item.duration}<span>{item.location}</span></div>
                        <div className="experience-content">
                            <h3>{item.title}</h3>
                            <p className="experience-company">{item.company}</p>
                            <p className="experience-highlight"><span aria-hidden="true">✦</span> {item.highlight}</p>
                            <ul>{item.description.map((line) => <li key={line}>{line}</li>)}</ul>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
