import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="site-header page-width">
            <Link href="/" className="wordmark" aria-label="Zeedan Khan — home">
                zeedan<span>.</span>
            </Link>
            <nav aria-label="Main navigation">
                <Link href="/#selected-projects">Projects</Link>
                <Link href="/#about-me">About</Link>
                <Link href="/#contact">Contact</Link>
            </nav>
        </header>
    );
}
