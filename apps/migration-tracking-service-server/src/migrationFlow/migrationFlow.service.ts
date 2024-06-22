import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MigrationFlowServiceBase } from "./base/migrationFlow.service.base";

@Injectable()
export class MigrationFlowService extends MigrationFlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
