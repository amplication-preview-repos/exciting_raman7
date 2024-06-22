import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MigrantsService } from "./migrants.service";
import { MigrantsControllerBase } from "./base/migrants.controller.base";

@swagger.ApiTags("migrants")
@common.Controller("migrants")
export class MigrantsController extends MigrantsControllerBase {
  constructor(
    protected readonly service: MigrantsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
