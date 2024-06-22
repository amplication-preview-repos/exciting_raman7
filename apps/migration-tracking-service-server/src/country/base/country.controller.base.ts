/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CountryService } from "../country.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CountryCreateInput } from "./CountryCreateInput";
import { Country } from "./Country";
import { CountryFindManyArgs } from "./CountryFindManyArgs";
import { CountryWhereUniqueInput } from "./CountryWhereUniqueInput";
import { CountryUpdateInput } from "./CountryUpdateInput";
import { DeparturePointFindManyArgs } from "../../departurePoint/base/DeparturePointFindManyArgs";
import { DeparturePoint } from "../../departurePoint/base/DeparturePoint";
import { DeparturePointWhereUniqueInput } from "../../departurePoint/base/DeparturePointWhereUniqueInput";
import { EntryPointFindManyArgs } from "../../entryPoint/base/EntryPointFindManyArgs";
import { EntryPoint } from "../../entryPoint/base/EntryPoint";
import { EntryPointWhereUniqueInput } from "../../entryPoint/base/EntryPointWhereUniqueInput";
import { RegionFindManyArgs } from "../../region/base/RegionFindManyArgs";
import { Region } from "../../region/base/Region";
import { RegionWhereUniqueInput } from "../../region/base/RegionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CountryControllerBase {
  constructor(
    protected readonly service: CountryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Country })
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCountry(
    @common.Body() data: CountryCreateInput
  ): Promise<Country> {
    return await this.service.createCountry({
      data: data,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        population: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Country] })
  @ApiNestedQuery(CountryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async countries(@common.Req() request: Request): Promise<Country[]> {
    const args = plainToClass(CountryFindManyArgs, request.query);
    return this.service.countries({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        population: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async country(
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Country | null> {
    const result = await this.service.country({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        population: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCountry(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() data: CountryUpdateInput
  ): Promise<Country | null> {
    try {
      return await this.service.updateCountry({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          id: true,
          name: true,
          population: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCountry(
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Country | null> {
    try {
      return await this.service.deleteCountry({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          name: true,
          population: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/departurePoints")
  @ApiNestedQuery(DeparturePointFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "read",
    possession: "any",
  })
  async findDeparturePoints(
    @common.Req() request: Request,
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<DeparturePoint[]> {
    const query = plainToClass(DeparturePointFindManyArgs, request.query);
    const results = await this.service.findDeparturePoints(params.id, {
      ...query,
      select: {
        country: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/departurePoints")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async connectDeparturePoints(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: DeparturePointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departurePoints: {
        connect: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/departurePoints")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async updateDeparturePoints(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: DeparturePointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departurePoints: {
        set: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/departurePoints")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async disconnectDeparturePoints(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: DeparturePointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departurePoints: {
        disconnect: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/entryPoints")
  @ApiNestedQuery(EntryPointFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EntryPoint",
    action: "read",
    possession: "any",
  })
  async findEntryPoints(
    @common.Req() request: Request,
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<EntryPoint[]> {
    const query = plainToClass(EntryPointFindManyArgs, request.query);
    const results = await this.service.findEntryPoints(params.id, {
      ...query,
      select: {
        country: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/entryPoints")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async connectEntryPoints(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: EntryPointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entryPoints: {
        connect: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/entryPoints")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async updateEntryPoints(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: EntryPointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entryPoints: {
        set: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/entryPoints")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async disconnectEntryPoints(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: EntryPointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entryPoints: {
        disconnect: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/regions")
  @ApiNestedQuery(RegionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "read",
    possession: "any",
  })
  async findRegions(
    @common.Req() request: Request,
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Region[]> {
    const query = plainToClass(RegionFindManyArgs, request.query);
    const results = await this.service.findRegions(params.id, {
      ...query,
      select: {
        country: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/regions")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async connectRegions(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: RegionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      regions: {
        connect: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/regions")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async updateRegions(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: RegionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      regions: {
        set: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/regions")
  @nestAccessControl.UseRoles({
    resource: "Country",
    action: "update",
    possession: "any",
  })
  async disconnectRegions(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() body: RegionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      regions: {
        disconnect: body,
      },
    };
    await this.service.updateCountry({
      where: params,
      data,
      select: { id: true },
    });
  }
}