import { SignJWT, jwtVerify } from 'jose';
import { NextResponse as res } from 'next/server';
import { verifyToken } from './lib/token';

export async function middleware(req)
{
    try
    {
        const token = req.cookies.get('token')?.value;

        const user = token ? await verifyToken(token) : null;

        const isAuth = !!user;
        const path = req.nextUrl.pathname;
        const publicRoutes = ['/login', '/signup'];
        const privateRoutes = ['/', '/dashboard'];

        if(!isAuth && privateRoutes.includes(path))
        {
            return res.redirect(new URL('/login', req.url));
        }

        if(isAuth && publicRoutes.includes(path))
        {
            return res.redirect(new URL('/dashboard', req.url));
        }
        return res.next();

    }
    catch(error)
    {
        return res.json({
            success : false,
            message : error.message
        }, {status : 500});
    }
}

export const config = {
    matcher : ['/', '/dashboard','/login','/signup']
}