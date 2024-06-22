import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MigrantsServiceBase } from "./base/migrants.service.base";

@Injectable()
export class MigrantsService extends MigrantsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
