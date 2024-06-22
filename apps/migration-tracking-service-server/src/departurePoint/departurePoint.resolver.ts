import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeparturePointResolverBase } from "./base/departurePoint.resolver.base";
import { DeparturePoint } from "./base/DeparturePoint";
import { DeparturePointService } from "./departurePoint.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeparturePoint)
export class DeparturePointResolver extends DeparturePointResolverBase {
  constructor(
    protected readonly service: DeparturePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
