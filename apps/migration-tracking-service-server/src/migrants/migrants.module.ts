import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MigrantsModuleBase } from "./base/migrants.module.base";
import { MigrantsService } from "./migrants.service";
import { MigrantsController } from "./migrants.controller";
import { MigrantsResolver } from "./migrants.resolver";

@Module({
  imports: [MigrantsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MigrantsController],
  providers: [MigrantsService, MigrantsResolver],
  exports: [MigrantsService],
})
export class MigrantsModule {}
