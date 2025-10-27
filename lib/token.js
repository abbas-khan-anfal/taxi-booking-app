import { SignJWT, jwtVerify } from "jose";

const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export const generateToken = async (userId) =>
{
    try
    {
        const token = await new SignJWT({userId})
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(jwtSecret);
        return token;
    }
    catch(error)
    {
        return null;
    }
}

export const verifyToken = async (token) =>
{
    try
    {
        const {payload} = await jwtVerify(token, jwtSecret);
        return payload.userId;
    }
    catch(error)
    {
        return null;
    }
}