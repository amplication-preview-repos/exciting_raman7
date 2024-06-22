/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RegionWhereUniqueInput } from "../../region/base/RegionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RegionUpdateManyWithoutCountriesInput {
  @Field(() => [RegionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RegionWhereUniqueInput],
  })
  connect?: Array<RegionWhereUniqueInput>;

  @Field(() => [RegionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RegionWhereUniqueInput],
  })
  disconnect?: Array<RegionWhereUniqueInput>;

  @Field(() => [RegionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RegionWhereUniqueInput],
  })
  set?: Array<RegionWhereUniqueInput>;
}

export { RegionUpdateManyWithoutCountriesInput as RegionUpdateManyWithoutCountriesInput };
