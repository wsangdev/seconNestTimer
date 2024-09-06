import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaClient) {}

  async GetAllTask() { // Traer todas las Tasks
    const allTasks = await this.prisma.task.findMany();
    return allTasks
  }

  async GetOneTask(id:number) { // Trear Tarea por Id 
    const oneTask = await this.prisma.task.findUnique({ where: {id} });
    return oneTask
  }

}