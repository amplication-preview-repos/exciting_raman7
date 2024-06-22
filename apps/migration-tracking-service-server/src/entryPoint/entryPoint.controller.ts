import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EntryPointService } from "./entryPoint.service";
import { EntryPointControllerBase } from "./base/entryPoint.controller.base";

@swagger.ApiTags("entryPoints")
@common.Controller("entryPoints")
export class EntryPointController extends EntryPointControllerBase {
  constructor(
    protected readonly service: EntryPointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
