import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import PixelArt from './PixelArt';

export default function Footer() {
    return (
        <footer className="page-width site-footer" id="contact">
            <div className="contact-block">
                <PixelArt kind="sparkle" className="contact-sparkle" />
                <h2>Let’s build something<span>.</span></h2>
                <p>Have an interesting problem, a research idea, or just want to say hi?</p>
                <a className="contact-email" href={`mailto:${GENERAL_INFO.email}`}>
                    {GENERAL_INFO.email}<ArrowUpRight size={24} aria-hidden="true" />
                </a>
            </div>
            <div className="footer-bottom">
                <div className="social-links">
                    {SOCIAL_LINKS.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
                </div>
                <p className="footer-note">Made with care &amp; a few pixels.<PixelArt kind="heart" /></p>
                <a href="#top" className="back-to-top" aria-label="Back to top"><ArrowUp size={18} aria-hidden="true" /></a>
            </div>
        </footer>
    );
}
