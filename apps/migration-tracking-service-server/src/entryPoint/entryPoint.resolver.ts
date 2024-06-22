import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EntryPointResolverBase } from "./base/entryPoint.resolver.base";
import { EntryPoint } from "./base/EntryPoint";
import { EntryPointService } from "./entryPoint.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EntryPoint)
export class EntryPointResolver extends EntryPointResolverBase {
  constructor(
    protected readonly service: EntryPointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
