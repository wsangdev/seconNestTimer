import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/shared/services/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //  Create User SERVICE
  async CreateUser(username:string, email:string, password:string): Promise<User> {
    return this.prisma.user.create({
      data: {username, email, password}
    })
  }

}