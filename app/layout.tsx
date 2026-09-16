import type { Metadata } from 'next';
import { DM_Sans, Pixelify_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { GENERAL_INFO } from '@/lib/data';
import './globals.css';

const pixelFont = Pixelify_Sans({ subsets: ['latin'], variable: '--font-pixel', display: 'swap' });
const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const description = 'Zeedan Khan is a software engineer and researcher studying Computer Science at Mississippi State University. Explore work in neural-network verification, machine learning, and iOS development.';

export const metadata: Metadata = {
    metadataBase: new URL(GENERAL_INFO.siteUrl),
    title: { default: 'Zeedan Khan — Software Engineer & Researcher', template: '%s | Zeedan Khan' },
    description,
    openGraph: { title: 'Zeedan Khan — Software Engineer & Researcher', description, url: GENERAL_INFO.siteUrl, type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body id="top" className={`${pixelFont.variable} ${bodyFont.variable}`}>
                <a className="skip-link" href="#main-content">Skip to content</a>
                <Navbar />
                <main id="main-content" tabIndex={-1}>{children}</main>
                <Footer />
                <GoogleAnalytics gaId="G-MHLY1LNGY5" />
                <Script id="hotjar" strategy="afterInteractive">
                    {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6380611,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </Script>
            </body>
        </html>
    );
}
