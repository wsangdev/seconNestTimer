import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService:UserService) {}

  @Get() //Metodo get de Todo
  GetAllUser() {
    return this.userService.GetAllUser()
  }

  @Get(':id')
  GetOneUser(@Param('id') id:string) {
    return this.userService.GetOneUser(Number(id))
  }
  
}