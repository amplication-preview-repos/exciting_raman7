import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeparturePointModuleBase } from "./base/departurePoint.module.base";
import { DeparturePointService } from "./departurePoint.service";
import { DeparturePointController } from "./departurePoint.controller";
import { DeparturePointResolver } from "./departurePoint.resolver";

@Module({
  imports: [DeparturePointModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeparturePointController],
  providers: [DeparturePointService, DeparturePointResolver],
  exports: [DeparturePointService],
})
export class DeparturePointModule {}
