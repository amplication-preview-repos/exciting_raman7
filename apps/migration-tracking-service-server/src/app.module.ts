import { Module } from "@nestjs/common";
import { MigrationFlowModule } from "./migrationFlow/migrationFlow.module";
import { CountryModule } from "./country/country.module";
import { RegionModule } from "./region/region.module";
import { MigrantsModule } from "./migrants/migrants.module";
import { CityModule } from "./city/city.module";
import { DocumentsModule } from "./documents/documents.module";
import { EntryPointModule } from "./entryPoint/entryPoint.module";
import { DeparturePointModule } from "./departurePoint/departurePoint.module";
import { AdminModule } from "./admin/admin.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    MigrationFlowModule,
    CountryModule,
    RegionModule,
    MigrantsModule,
    CityModule,
    DocumentsModule,
    EntryPointModule,
    DeparturePointModule,
    AdminModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
