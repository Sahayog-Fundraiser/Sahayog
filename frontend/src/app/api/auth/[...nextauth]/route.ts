import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import environments from '@app/config/environments';
import refreshAccessToken from '@app/utils/nextAuthUtils';

const ClientID = environments.GOOGLE_CLIENT_ID;
const ClientSecret = environments.GOOGLE_CLIENT_SECRET;
const SecretKey = environments.NEXTAUTH_SECRET;

const handler = NextAuth({
    secret: SecretKey,
    providers: [
        GoogleProvider({
            clientId: ClientID,
            clientSecret: ClientSecret,
            authorization: { params: { access_type: 'offline', prompt: 'consent' } }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (account) {
                return {
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                    refresh_token: account.refresh_token,
                    id: token.sub,
                    name: user?.name,
                    email: profile?.email,
                    image: token?.picture
                };
            } else if (Date.now() < (token.expires_at as number) * 1000) {
                return token;
            } else {
                return refreshAccessToken(token);
            }
        },
        async session({ session, token }) {
            if (token) {
                session.user = token;
            }
            return session;
        }
    }
});

export { handler as GET, handler as POST };
