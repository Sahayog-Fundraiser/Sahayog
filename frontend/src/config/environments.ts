import getConfig from 'next/config';

const config = getConfig();
let publicRuntimeConfig: any = {};
let serverRuntimeConfig: any = {};
if (config && config.publicRuntimeConfig) {
    publicRuntimeConfig = config.publicRuntimeConfig;
}

if (config && config.serverRuntimeConfig) {
    serverRuntimeConfig = config.serverRuntimeConfig;
}

const environments = {
    GOOGLE_CLIENT_ID: serverRuntimeConfig.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: serverRuntimeConfig.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_URL: serverRuntimeConfig.NEXTAUTH_URL,
    NEXTAUTH_SECRET: serverRuntimeConfig.NEXTAUTH_SECRET
};

export default environments;
