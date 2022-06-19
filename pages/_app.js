import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import * as gtag from '../lib/gtag';
import 'tailwindcss/tailwind.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Register a Service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async (event) => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log(`Registered with scope ${registration.scope}`);
        } catch (error) {
          console.log(`Registration failed ${error}`);
        }
      });
    }
    // Listen to route changes for Google Analytics
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      NProgress.done();
    };

    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', () => NProgress.done());
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete');
      router.events.off('routeChangeError');
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp
