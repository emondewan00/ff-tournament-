import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials, "authorization");
        // Simulate user retrieval
        const user = { email: credentials.email };

        // Check if the email exists in the user object
        if (!user || !user.email) {
          throw new Error("Email is required");
        }

        return user; // Return user object with email
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      console.log(account, user, "jwt token");
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});
