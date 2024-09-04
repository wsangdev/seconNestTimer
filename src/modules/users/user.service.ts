import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {

  GetAllUser():string {
    return "retornando todos los usuarios "
  }
}