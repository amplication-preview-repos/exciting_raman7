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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { DeparturePointUpdateManyWithoutCountriesInput } from "./DeparturePointUpdateManyWithoutCountriesInput";
import { Type } from "class-transformer";
import { EntryPointUpdateManyWithoutCountriesInput } from "./EntryPointUpdateManyWithoutCountriesInput";
import { RegionUpdateManyWithoutCountriesInput } from "./RegionUpdateManyWithoutCountriesInput";

@InputType()
class CountryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: () => DeparturePointUpdateManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => DeparturePointUpdateManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => DeparturePointUpdateManyWithoutCountriesInput, {
    nullable: true,
  })
  departurePoints?: DeparturePointUpdateManyWithoutCountriesInput;

  @ApiProperty({
    required: false,
    type: () => EntryPointUpdateManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => EntryPointUpdateManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => EntryPointUpdateManyWithoutCountriesInput, {
    nullable: true,
  })
  entryPoints?: EntryPointUpdateManyWithoutCountriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  population?: number | null;

  @ApiProperty({
    required: false,
    type: () => RegionUpdateManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => RegionUpdateManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => RegionUpdateManyWithoutCountriesInput, {
    nullable: true,
  })
  regions?: RegionUpdateManyWithoutCountriesInput;
}

export { CountryUpdateInput as CountryUpdateInput };
