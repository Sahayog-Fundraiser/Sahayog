import environments from '@app/config/environments';

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */

const ClientID = environments.GOOGLE_CLIENT_ID;
const ClientSecret = environments.GOOGLE_CLIENT_SECRET;

async function refreshAccessToken(token: any) {
    try {
        const url =
            'https://oauth2.googleapis.com/token?' +
            new URLSearchParams({
                client_id: ClientID,
                client_secret: ClientSecret,
                grant_type: 'refresh_token',
                refresh_token: token.refreshToken
            });

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST'
        });

        const refreshedTokens = await response.json();

        if (!response.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken
        };
    } catch (error) {
        console.error('Error refreshing access token', error);
        return { ...token, error: 'RefreshAccessTokenError' as const };
    }
}

export default refreshAccessToken;
