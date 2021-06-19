import Head from 'next/head';
import Image from 'next/image';
import { getSession } from 'next-auth/client';

import Header from '../components/Header';
import Login from '../components/Login';

export default function Home({ session }) {
  if (!session) return <Login />;

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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  return {
    props: {
      session,
    },
  };
};
