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
import { DeparturePointService } from "../departurePoint.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeparturePointCreateInput } from "./DeparturePointCreateInput";
import { DeparturePoint } from "./DeparturePoint";
import { DeparturePointFindManyArgs } from "./DeparturePointFindManyArgs";
import { DeparturePointWhereUniqueInput } from "./DeparturePointWhereUniqueInput";
import { DeparturePointUpdateInput } from "./DeparturePointUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DeparturePointControllerBase {
  constructor(
    protected readonly service: DeparturePointService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeparturePoint })
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDeparturePoint(
    @common.Body() data: DeparturePointCreateInput
  ): Promise<DeparturePoint> {
    return await this.service.createDeparturePoint({
      data: {
        ...data,

        country: data.country
          ? {
              connect: data.country,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DeparturePoint] })
  @ApiNestedQuery(DeparturePointFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async departurePoints(
    @common.Req() request: Request
  ): Promise<DeparturePoint[]> {
    const args = plainToClass(DeparturePointFindManyArgs, request.query);
    return this.service.departurePoints({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeparturePoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async departurePoint(
    @common.Param() params: DeparturePointWhereUniqueInput
  ): Promise<DeparturePoint | null> {
    const result = await this.service.departurePoint({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DeparturePoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDeparturePoint(
    @common.Param() params: DeparturePointWhereUniqueInput,
    @common.Body() data: DeparturePointUpdateInput
  ): Promise<DeparturePoint | null> {
    try {
      return await this.service.updateDeparturePoint({
        where: params,
        data: {
          ...data,

          country: data.country
            ? {
                connect: data.country,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: DeparturePoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeparturePoint",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDeparturePoint(
    @common.Param() params: DeparturePointWhereUniqueInput
  ): Promise<DeparturePoint | null> {
    try {
      return await this.service.deleteDeparturePoint({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
