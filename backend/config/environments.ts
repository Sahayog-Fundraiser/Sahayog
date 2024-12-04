
export const environments = {
    jwt_secret: process.env.JWT_SECRET || 'secret_key',
    node_env: process.env.NODE_ENV || 'development'
}