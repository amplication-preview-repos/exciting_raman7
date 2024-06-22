import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeparturePointService } from "./departurePoint.service";
import { DeparturePointControllerBase } from "./base/departurePoint.controller.base";

@swagger.ApiTags("departurePoints")
@common.Controller("departurePoints")
export class DeparturePointController extends DeparturePointControllerBase {
  constructor(
    protected readonly service: DeparturePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
