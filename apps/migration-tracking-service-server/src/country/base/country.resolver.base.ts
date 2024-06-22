/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Country } from "./Country";
import { CountryCountArgs } from "./CountryCountArgs";
import { CountryFindManyArgs } from "./CountryFindManyArgs";
import { CountryFindUniqueArgs } from "./CountryFindUniqueArgs";
import { CreateCountryArgs } from "./CreateCountryArgs";
import { UpdateCountryArgs } from "./UpdateCountryArgs";
import { DeleteCountryArgs } from "./DeleteCountryArgs";
import { DeparturePointFindManyArgs } from "../../departurePoint/base/DeparturePointFindManyArgs";
import { DeparturePoint } from "../../departurePoint/base/DeparturePoint";
import { EntryPointFindManyArgs } from "../../entryPoint/base/EntryPointFindManyArgs";
import { EntryPoint } from "../../entryPoint/base/EntryPoint";
import { RegionFindManyArgs } from "../../region/base/RegionFindManyArgs";
import { Region } from "../../region/base/Region";
import { CountryService } from "../country.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Country)
export class CountryResolverBase {
  constructor(
    protected readonly service: CountryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "read",
    possession: "any",
  })
  async _countriesMeta(
    @graphql.Args() args: CountryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Country])
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "read",
    possession: "any",
  })
  async countries(
    @graphql.Args() args: CountryFindManyArgs
  ): Promise<Country[]> {
    return this.service.countries(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Country, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "read",
    possession: "own",
  })
  async country(
    @graphql.Args() args: CountryFindUniqueArgs
  ): Promise<Country | null> {
    const result = await this.service.country(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Country)
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "create",
    possession: "any",
  })
  async createCountry(
    @graphql.Args() args: CreateCountryArgs
  ): Promise<Country> {
    return await this.service.createCountry({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Country)
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async updateCountry(
    @graphql.Args() args: UpdateCountryArgs
  ): Promise<Country | null> {
    try {
      return await this.service.updateCountry({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Country)
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "delete",
    possession: "any",
  })
  async deleteCountry(
    @graphql.Args() args: DeleteCountryArgs
  ): Promise<Country | null> {
    try {
      return await this.service.deleteCountry(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DeparturePoint], { name: "departurePoints" })
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "read",
    possession: "any",
  })
  async findDeparturePoints(
    @graphql.Parent() parent: Country,
    @graphql.Args() args: DeparturePointFindManyArgs
  ): Promise<DeparturePoint[]> {
    const results = await this.service.findDeparturePoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [EntryPoint], { name: "entryPoints" })
  @nestAccessControl.UseRoles({
    resource: "EntryPoint",
    action: "read",
    possession: "any",
  })
  async findEntryPoints(
    @graphql.Parent() parent: Country,
    @graphql.Args() args: EntryPointFindManyArgs
  ): Promise<EntryPoint[]> {
    const results = await this.service.findEntryPoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Region], { name: "regions" })
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "read",
    possession: "any",
  })
  async findRegions(
    @graphql.Parent() parent: Country,
    @graphql.Args() args: RegionFindManyArgs
  ): Promise<Region[]> {
    const results = await this.service.findRegions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
