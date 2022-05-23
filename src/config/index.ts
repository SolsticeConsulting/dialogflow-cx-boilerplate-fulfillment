import dotenv from "dotenv";

console.log('Reading from dotenv file.');
const dotEnvVars = dotenv.config();
if (!dotEnvVars) {
    throw new Error("Could not find .env file");
}

const { nodeEnv } = dotEnvVars.parsed || {}
export const isProd = nodeEnv === 'production';

export const getNodeEnv = () : string => {
    return nodeEnv
}

export const getSecretKey = (): string => {
    return getNodeEnv() === 'production' ? process.env.SECRET_KEY_PROD : process.env.SECRET_KEY_NON_PROD
}

export const config = {
    port: parseInt(process.env.PORT, 10),
    logs: {
        level: process.env.LOG_LEVEL || 'info'
    },
    nodeEnv: getNodeEnv(),
    isProd,
    secretKeyLocation: `projects/${process.env.GOOGLE_CLOUD_PROJECT}/secrets/meijer-dialogflow-chatbot-api-${isProd ? '' : 'non'}prod/versions/1`,
    constructorKeyLocation: `projects/${process.env.GOOGLE_CLOUD_PROJECT}/secrets/constructor-key-${isProd ? '' : 'non-'}prod/versions/1`,
}