import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/utils/mongoClientPromise";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const connection = await clientPromise;

      const userExists = await connection
        .db("kakeibo")
        .collection("users")
        .findOne({ email: profile.email });
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await connection.db("kakeibo").collection("users").insertOne({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      return true;
    },
    async session({ session }) {
      const connection = await clientPromise;
      const user = await connection
        .db("kakeibo")
        .collection("users")
        .findOne({ email: session.user.email });
      session.user.id = user?._id.toString();
      return session;
    },
  },
};
