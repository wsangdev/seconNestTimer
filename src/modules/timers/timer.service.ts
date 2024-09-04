import { Injectable } from "@nestjs/common";

@Injectable() 
export class TimerService {
  
  GetAllTimers() {
    return "aqui retornaremos todos los timer"
  }
}