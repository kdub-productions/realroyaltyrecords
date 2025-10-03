import '../styles/app.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect } from 'react'; // Import useEffect
import Head from 'next/head'; // Import the Head component

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.clear(); // Clear cache on refresh
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Add the link tag here */}
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;