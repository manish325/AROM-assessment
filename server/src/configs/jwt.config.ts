import { registerAs } from "@nestjs/config";

export default registerAs(
    'jwt',
    () => {
        return {
            jwtSecret : process.env.JWT_SECRET,
            jwtExpiresIn: Number(process.env.JWT_EXPIRE_TIME || 86400)
        }
    }
)