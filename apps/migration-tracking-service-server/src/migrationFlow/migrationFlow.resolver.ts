import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MigrationFlowResolverBase } from "./base/migrationFlow.resolver.base";
import { MigrationFlow } from "./base/MigrationFlow";
import { MigrationFlowService } from "./migrationFlow.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MigrationFlow)
export class MigrationFlowResolver extends MigrationFlowResolverBase {
  constructor(
    protected readonly service: MigrationFlowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
