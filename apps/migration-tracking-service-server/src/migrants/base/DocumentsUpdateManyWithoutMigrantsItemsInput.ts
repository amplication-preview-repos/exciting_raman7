/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DocumentsWhereUniqueInput } from "../../documents/base/DocumentsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DocumentsUpdateManyWithoutMigrantsItemsInput {
  @Field(() => [DocumentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DocumentsWhereUniqueInput],
  })
  connect?: Array<DocumentsWhereUniqueInput>;

  @Field(() => [DocumentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DocumentsWhereUniqueInput],
  })
  disconnect?: Array<DocumentsWhereUniqueInput>;

  @Field(() => [DocumentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DocumentsWhereUniqueInput],
  })
  set?: Array<DocumentsWhereUniqueInput>;
}

export { DocumentsUpdateManyWithoutMigrantsItemsInput as DocumentsUpdateManyWithoutMigrantsItemsInput };