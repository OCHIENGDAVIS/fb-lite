import Head from 'next/head';
import Image from 'next/image';
import { getSession } from 'next-auth/client';
import axios from 'axios';
import Header from '../components/Header';
import Login from '../components/Login';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>fb-lite</title>
        <meta name="description" content="facebook clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <SideBar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const res = await axios.get('http://localhost:3000/api/post');

  return {
    props: {
      session,
      posts: res.data,
    },
  };
};
