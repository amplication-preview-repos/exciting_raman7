/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested, IsString } from "class-validator";
import { DocumentsCreateNestedManyWithoutMigrantsItemsInput } from "./DocumentsCreateNestedManyWithoutMigrantsItemsInput";
import { Type } from "class-transformer";
import { MigrationFlowWhereUniqueInput } from "../../migrationFlow/base/MigrationFlowWhereUniqueInput";

@InputType()
class MigrantsCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number | null;

  @ApiProperty({
    required: false,
    type: () => DocumentsCreateNestedManyWithoutMigrantsItemsInput,
  })
  @ValidateNested()
  @Type(() => DocumentsCreateNestedManyWithoutMigrantsItemsInput)
  @IsOptional()
  @Field(() => DocumentsCreateNestedManyWithoutMigrantsItemsInput, {
    nullable: true,
  })
  documentsItems?: DocumentsCreateNestedManyWithoutMigrantsItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => MigrationFlowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MigrationFlowWhereUniqueInput)
  @IsOptional()
  @Field(() => MigrationFlowWhereUniqueInput, {
    nullable: true,
  })
  migrationFlow?: MigrationFlowWhereUniqueInput | null;
}

export { MigrantsCreateInput as MigrantsCreateInput };
