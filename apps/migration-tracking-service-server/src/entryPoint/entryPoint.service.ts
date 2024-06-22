import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntryPointServiceBase } from "./base/entryPoint.service.base";

@Injectable()
export class EntryPointService extends EntryPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
