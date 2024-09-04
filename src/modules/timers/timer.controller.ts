import { Controller, Get } from "@nestjs/common";
import { TimerService } from "./timer.service";

@Controller('timers') 
export class TimerController {
  constructor(private readonly timerService:TimerService) {}

  @Get() // Metodo para Traer todos los Timers 
  GetAllTimer() {
    return this.timerService.GetAllTimers();
  }
}