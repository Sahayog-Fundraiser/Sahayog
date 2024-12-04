import { Request, Response } from "express";
import { environments } from "../config/environments";
import UserServices from "../services/userServices";

export default class Users {
  public static async getUsers(
    req: Request & { userEmail?: string },
    res: Response
  ): Promise<void> {
    console.log("user are: ", req.userEmail);
    res.status(200).json({ message: "Users are ...." });
  }

  public static async registerUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    const { name, email, image } = userData;
    if (!name || !email || !image) {
      res.status(422);
      throw new Error("Invalid input data, All value required.");
    }
    const existingUser = await UserServices.getUserByQuery({ email });
    if (existingUser) {
      res.status(409);
      throw new Error("User already exist.");
    }
    const userResponse = await UserServices.registerUser(userData);
    res.cookie("access_token", userResponse.token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: environments.node_env === "production",
      sameSite: "none",
    });
    res.status(201).send(userResponse);
  }

  public static async logoutUser(req:Request,res:Response):Promise<void>{
    res.clearCookie("access_token");
    res.status(200).json({ message: "User logged out successfully" });
  }
}
