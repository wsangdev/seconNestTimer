import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global() // DEcoradador que lo Exporta de Forma Global PrismaService
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}