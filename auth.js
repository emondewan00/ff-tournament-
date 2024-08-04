import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials, "authorization");
        return credentials;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(token, user, "jwt");
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session, token, "session");
      if (token) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});
