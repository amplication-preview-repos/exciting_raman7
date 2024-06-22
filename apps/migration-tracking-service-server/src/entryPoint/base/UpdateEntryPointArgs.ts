/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EntryPointWhereUniqueInput } from "./EntryPointWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EntryPointUpdateInput } from "./EntryPointUpdateInput";

@ArgsType()
class UpdateEntryPointArgs {
  @ApiProperty({
    required: true,
    type: () => EntryPointWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntryPointWhereUniqueInput)
  @Field(() => EntryPointWhereUniqueInput, { nullable: false })
  where!: EntryPointWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EntryPointUpdateInput,
  })
  @ValidateNested()
  @Type(() => EntryPointUpdateInput)
  @Field(() => EntryPointUpdateInput, { nullable: false })
  data!: EntryPointUpdateInput;
}

export { UpdateEntryPointArgs as UpdateEntryPointArgs };