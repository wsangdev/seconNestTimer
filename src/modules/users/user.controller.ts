import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService:UserService) {}

  // Controlador USER
  @Post()
  async createUser(
    @Body('username') username:string,
    @Body('email') email:string,
    @Body('password') password:string,
  ) {
    return this.userService.CreateUser(username, email, password);
  }
  
}