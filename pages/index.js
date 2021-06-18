import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>fb-lite</title>
        <meta name="description" content="facebook clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-red-500">something bigger is about to lounch</h2>
    </div>
  );
}
