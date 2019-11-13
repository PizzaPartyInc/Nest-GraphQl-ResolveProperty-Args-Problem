import { IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class FilterDto {
  @IsOptional()
  @IsNotEmpty()
  @Field(() => Object, { nullable: true })
  name?: object;
}
