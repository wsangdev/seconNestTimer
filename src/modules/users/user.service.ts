import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private listUsers = [
    {id: 1, username: "willian jordy", email: "willian@gmail.com"},
    {id: 2, username: "Pablo Emilio", email: "pablo@gmail.com"},
    {id: 3, username: "Cristina Aguirre", email: "cristina@gmail.com"},
  ]

  GetAllUser() { // Metodo para traer todos los Usuarios 
    return this.listUsers
  }

  GetOneUser(id:number) {
    return this.listUsers.find(item => item.id = id)
  }
}