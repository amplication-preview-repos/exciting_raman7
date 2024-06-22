import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeparturePointServiceBase } from "./base/departurePoint.service.base";

@Injectable()
export class DeparturePointService extends DeparturePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
