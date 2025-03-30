import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
// @ts-ignore
import WebApp from '@twa-dev/sdk';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return <Component {...pageProps} />;
}