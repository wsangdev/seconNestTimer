import { Module } from "@nestjs/common";
import { TaskModule } from "./modules/tasks/task.module";
import { UserModule } from "./modules/users/user.module";

@Module({
  imports: [UserModule, TaskModule],
})
export class AppModule {}