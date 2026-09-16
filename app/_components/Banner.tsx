import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GENERAL_INFO } from '@/lib/data';
import PixelArt from '@/components/PixelArt';

export default function Banner() {
    return (
        <section className="hero page-width" aria-labelledby="intro-title" id="banner">
            <PixelArt kind="sparkle" className="hero-sparkle" />
            <div className="hero-copy">
                <h1 id="intro-title">Hi, I’m Zeedan<span>.</span></h1>
                <p className="hero-role">Software engineer &amp; researcher</p>
                <p className="hero-description">
                    I build intelligent systems and useful software. Computer Science
                    at Mississippi State. Recently a DAAD RISE research fellow in Germany.
                </p>
                <div className="hero-actions">
                    <Link className="pixel-button" href="#selected-projects">View projects</Link>
                    <a className="text-link" href={`mailto:${GENERAL_INFO.email}`}>
                        Say hello <ArrowRight size={19} aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="hero-weather">
                <PixelArt kind="sun" className="hero-sun" />
                <PixelArt kind="cloud" className="hero-cloud cloud-one" />
                <PixelArt kind="cloud" className="hero-cloud cloud-two" />
            </div>
            <PixelArt kind="cat" className="hero-cat" />
            <PixelArt kind="flowers" className="hero-flowers" />
        </section>
    );
}
