import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>fb-lite</title>
        <meta name="description" content="facebook clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}
