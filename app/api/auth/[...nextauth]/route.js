import connectToDB from "@/database/database";
import User from "@/schema/User";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      let loggingInUser = profile;

      try {
        connectToDB();

        let logedInUser = await User.findOne({ email: loggingInUser.email });

        if (logedInUser == null) {
          await User.create({
            name: loggingInUser.login,
            email: loggingInUser.email,
            image: loggingInUser.avatar_url,
          });
        }

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
