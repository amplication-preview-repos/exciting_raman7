/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Country as PrismaCountry,
  DeparturePoint as PrismaDeparturePoint,
  EntryPoint as PrismaEntryPoint,
  Region as PrismaRegion,
} from "@prisma/client";

export class CountryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CountryCountArgs, "select">): Promise<number> {
    return this.prisma.country.count(args);
  }

  async countries(args: Prisma.CountryFindManyArgs): Promise<PrismaCountry[]> {
    return this.prisma.country.findMany(args);
  }
  async country(
    args: Prisma.CountryFindUniqueArgs
  ): Promise<PrismaCountry | null> {
    return this.prisma.country.findUnique(args);
  }
  async createCountry(args: Prisma.CountryCreateArgs): Promise<PrismaCountry> {
    return this.prisma.country.create(args);
  }
  async updateCountry(args: Prisma.CountryUpdateArgs): Promise<PrismaCountry> {
    return this.prisma.country.update(args);
  }
  async deleteCountry(args: Prisma.CountryDeleteArgs): Promise<PrismaCountry> {
    return this.prisma.country.delete(args);
  }

  async findDeparturePoints(
    parentId: string,
    args: Prisma.DeparturePointFindManyArgs
  ): Promise<PrismaDeparturePoint[]> {
    return this.prisma.country
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .departurePoints(args);
  }

  async findEntryPoints(
    parentId: string,
    args: Prisma.EntryPointFindManyArgs
  ): Promise<PrismaEntryPoint[]> {
    return this.prisma.country
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .entryPoints(args);
  }

  async findRegions(
    parentId: string,
    args: Prisma.RegionFindManyArgs
  ): Promise<PrismaRegion[]> {
    return this.prisma.country
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .regions(args);
  }
}