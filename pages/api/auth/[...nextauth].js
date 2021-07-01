import NextAuth from 'next-auth';
import { session } from 'next-auth/client';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.MONGO_DB_URL,
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      return session;
    },
  },
});
