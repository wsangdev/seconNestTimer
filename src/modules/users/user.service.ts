import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private listUsers = [
    {id: 1, username: "willian jordy", email: "willian@gmail.com"},
    {id: 2, username: "Pablo Emilio", email: "pablo@gmail.com"},
    {id: 3, username: "Cristina Aguirre", email: "cristina@gmail.com"},
  ]

  GetAllUser() { // Metodo para traer todos los Usuarios 
    const allUsers = this.listUsers
    return allUsers
  }

  GetOneUser(id:number) { // Metodo para traer un usuario
    const oneUser = this.listUsers.find(user => user.id === id)
    return oneUser
  }
}