import CredentialsProvider from "next-auth/providers/credentials"
import  { NextAuthOptions } from "next-auth";
import axios from "@/lib/axios";
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await axios.post("/auth/sign-in", {}, {
                    auth: {
                        username: credentials?.username as string,
                        password: credentials?.password as string
                    }
                    
                });
                const user = res.data;
                // If no error and we have user data, return it
                if (user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: "/exception/error"
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return { ...token, ...user };
        },
        async session({ session, token }) {
            if (session.user) session.user = token as any;
            return session
        }
    },
}