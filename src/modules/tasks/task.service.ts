import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
  private listTask = [
    {id:1, title: "Quehaceres", description: "ir de compras al super"},
    {id:2, title: "Servicios", description: "pasear al perro firulais"},
    {id:3, title: "Aprendizaje", description: "seguir aprendiendo nest js"},
  ]

  GetAllTask() { // Traer todas las Tasks
    const allTasks = this.listTask
    return allTasks
  }

  GetOneTask(id:number) { // Trear Tarea por Id 
    const oneTask = this.listTask.find(task => task.id === id)
    return oneTask
  }

}