import { Injectable } from "@nestjs/common";  
import { Task } from "@prisma/client";
import { PrismaService } from "src/shared/services/prisma/prisma.service";


@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {} 

  async GetAllTask(): Promise<Task[]> { // Traer todas las Tasks
    const allTasks = await this.prisma.task.findMany();
    return allTasks
  }

  async GetOneTask(id:number): Promise<Task | null> { // Devuel Tarea o Nullo sino Existe 
    const oneTask = await this.prisma.task.findUnique({ where: {id} });
    return oneTask
  }

}