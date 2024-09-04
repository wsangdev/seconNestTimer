import { Module } from "@nestjs/common";
import { TaskModule } from "./modules/tasks/task.module";
import { UserModule } from "./modules/users/user.module";
import { TimerModule } from "./modules/timers/timer.module";

@Module({
  imports: [UserModule, TaskModule, TimerModule],
})
export class AppModule {}