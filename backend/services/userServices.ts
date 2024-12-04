import jwt from "jsonwebtoken";
import { environments } from "../config/environments";
import UserRepository from "../repository/userRepository";

class UserServices {
  public static async registerUser(userBody: any) {
    const { name, email, image } = userBody;
    const user = await UserRepository.createUser(name, email, image);
    const token = jwt.sign({ name, email, image }, environments.jwt_secret, {
      expiresIn: "7d",
    });
    return { ...user, token };
  }

  public static async getUserByQuery(query:Record<string,string>){
    const user = await UserRepository.getUserByQuery(query);
    return user;
  }
}

export default UserServices;
