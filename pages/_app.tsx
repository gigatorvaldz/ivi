import '@/styles/App.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
