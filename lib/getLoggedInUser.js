import userModel from "@/app/models/user/user";
import { cookies } from "next/headers";
import { verifyToken } from "./token";


const getLoggedInUser = async () => {
    try
    {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        const user = token ? await verifyToken(token) : null;
        return user;
    }
    catch (err)
    {
        return null;
    }
}

export default getLoggedInUser;