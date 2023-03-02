import { verifyPass, verifyPassword } from "../../../lib/auth";

import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connectToDB } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const client = await connectToDB();

        const db = client.db();
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No User Found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Unable to log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
