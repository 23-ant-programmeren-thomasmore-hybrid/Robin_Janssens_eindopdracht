import {NextAuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from 'bcrypt';
import {sql} from '@vercel/postgres'

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    pages: {},
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
//
                const response = await sql`
                    SELECT *
                    FROM users
                    WHERE email = ${credentials?.email}`;
                const user = response.rows[0];

                const passwordCorrect = await compare(
                    credentials?.password || '',
                    user.password
                );

                console.log({passwordCorrect});

                if (passwordCorrect) {
                    return {
                        id: user.id,
                        email: user.email,
                    };
                }
                return null;
            }
        })
    ]
};

