import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EntryPointModuleBase } from "./base/entryPoint.module.base";
import { EntryPointService } from "./entryPoint.service";
import { EntryPointController } from "./entryPoint.controller";
import { EntryPointResolver } from "./entryPoint.resolver";

@Module({
  imports: [EntryPointModuleBase, forwardRef(() => AuthModule)],
  controllers: [EntryPointController],
  providers: [EntryPointService, EntryPointResolver],
  exports: [EntryPointService],
})
export class EntryPointModule {}
