import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class ListDto {
  @Field(() => [String])
  list: string[];

  @Field(() => Int, { nullable: true })
  totalCount?: number;
}
