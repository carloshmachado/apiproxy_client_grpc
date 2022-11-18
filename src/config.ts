import * as dotenv from 'dotenv'

dotenv.config()
const { env } = process

export default {
    API_PORT: parseInt(env.API_PORT || '3000'),
    API_SECRET: env.API_SECRET,
    NODE_ENV: env.NODE_ENV || 'development',
    AWS_ACCESS_KEY_ID: env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: env.AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION: env.AWS_DEFAULT_REGION || 'sa-east-1',
    AWS_BUCKET: env.AWS_BUCKET,
    AWS_BUCKET_NFSE_FILES:
        env.AWS_BUCKET_NFSE_FILES || 'edocsaas-xmls',
    CONSULTACHAVENFEGRPC_URL: env.CONSULTACHAVENFEGRPC_URL || '0.0.0.0:50051',
    STORAGEXML_URL: env.STORAGEXML_URL,
    TOKEN_STORAGEXML: env.TOKEN_STORAGEXML,
}