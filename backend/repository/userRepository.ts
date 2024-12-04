import { prismaDb } from "../config/database";

class UserRepository {
  public static async createUser(name: string, email: string, image: string) {
    const user = await prismaDb.user.create({
      data: {
        name,
        email,
        image,
      },
    });
    return user;
  }

  public static async getUserByQuery(query: Record<string,string>) {
    const user = await prismaDb.user.findFirst({
      where: query,
    });
    return user;
  }
}

export default UserRepository;
