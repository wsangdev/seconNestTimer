import { Module } from "@nestjs/common";
import { PrismaModule } from "./shared/services/prisma/prisma.module";
import { TaskModule } from "./modules/tasks/task.module";
import { UserModule } from "./modules/users/user.module";
import { TimerModule } from "./modules/timers/timer.module";

@Module({
  imports: [PrismaModule, UserModule, TaskModule, TimerModule],
})
export class AppModule {}