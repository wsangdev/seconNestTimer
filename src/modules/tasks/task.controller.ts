import { Controller, Get, Param } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('tasks') //Define la ruta base 
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get() // Obtiene todas las tareas 
  GetAllTask() {
    return this.taskService.GetAllTask()
  }

  @Get(":id")
  GetOneTask(@Param('id') id:string) {
    return this.taskService.GetOneTask(Number(id))
  }
}