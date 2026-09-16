import SectionTitle from '@/components/SectionTitle';
import PixelArt from '@/components/PixelArt';
import { EDUCATION } from '@/lib/data';

export default function AboutMe() {
    return (
        <section className="page-section page-width about-section" id="about-me" aria-labelledby="about-title">
            <div className="about-copy">
                <SectionTitle title="A little about me" id="about-title" />
                <p>I’m a Computer Science student at Mississippi State University, interested in the space where machine learning, systems, and useful software meet.</p>
                <p>My work has taken me from healthcare apps and research infrastructure in Mississippi to neural-network verification in Germany. I like understanding how things work and making them work better.</p>
                <div className="about-signoff"><PixelArt kind="sparkle" /> Always something new to learn.</div>
            </div>
            <aside className="education-card" aria-labelledby="education-title">
                <p className="small-label" id="education-title">Currently studying</p>
                <h3>{EDUCATION.school}</h3>
                <p className="education-degree">{EDUCATION.degree}</p>
                <p className="education-dates">{EDUCATION.dates}</p>
                <p className="education-gpa"><strong>{EDUCATION.gpa}</strong> GPA</p>
                <p className="small-label">Coursework</p>
                <p className="coursework">{EDUCATION.coursework.join(' · ')}</p>
            </aside>
        </section>
    );
}
