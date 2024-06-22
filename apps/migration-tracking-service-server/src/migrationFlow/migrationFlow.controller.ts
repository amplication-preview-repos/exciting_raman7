import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MigrationFlowService } from "./migrationFlow.service";
import { MigrationFlowControllerBase } from "./base/migrationFlow.controller.base";

@swagger.ApiTags("migrationFlows")
@common.Controller("migrationFlows")
export class MigrationFlowController extends MigrationFlowControllerBase {
  constructor(
    protected readonly service: MigrationFlowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
