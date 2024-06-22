import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MigrationFlowModuleBase } from "./base/migrationFlow.module.base";
import { MigrationFlowService } from "./migrationFlow.service";
import { MigrationFlowController } from "./migrationFlow.controller";
import { MigrationFlowResolver } from "./migrationFlow.resolver";

@Module({
  imports: [MigrationFlowModuleBase, forwardRef(() => AuthModule)],
  controllers: [MigrationFlowController],
  providers: [MigrationFlowService, MigrationFlowResolver],
  exports: [MigrationFlowService],
})
export class MigrationFlowModule {}
