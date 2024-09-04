import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService:UserService) {}

  @Get() //Metodo get de Todo
  GetAllUser():string {
    return this.userService.GetAllUser()
  }
  
}