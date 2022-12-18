import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../server/database/adapter_mongoDB";

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ account, token }) {
            if (account) {
                token.idToken = account.providerAccountId;
            }

            return token;
        },
        async session({ session, user, token }) {
            session.user.idToken = token.idToken!;
            return session;
        },
    },
};
export default NextAuth(authOptions);
