import { NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken"
import { environments } from "../config/environments";

const protectedRouteHandler = (req:Request&{userEmail?:string},res:Response,next:NextFunction)=>{
    const token = req.cookies.access_token
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no cookie found");
    }
    try{
        const data:any = jwt.verify(token, environments.jwt_secret);
        req.userEmail = data.email;
        next();
    }
    catch(err){
        res.status(401);
        throw new Error("Not authorized, token is not valid");
    }
}

export default protectedRouteHandler;