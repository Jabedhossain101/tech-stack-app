import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    // 👉 Credentials (email + password)
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // এখানে আসল ডাটাবেস চেক করবে (MongoDB, Prisma ইত্যাদি)
        // এখন ডেমো হিসেবে হার্ডকোড ইউজার ব্যবহার করছি
        if (
          credentials.email === 'test@example.com' &&
          credentials.password === '123456'
        ) {
          return { id: '1', name: 'Demo User', email: 'test@example.com' };
        }
        return null;
      },
    }),

    // 👉 Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // 👉 Login page override
  pages: {
    signIn: '/login',
  },

  // 👉 Session config
  session: {
    strategy: 'jwt',
  },

  // 👉 JWT config
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
