import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Field, InputType } from 'type-graphql';

import { FilterDto } from './filter.dto';

@InputType()
export class CriteriaDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => FilterDto)
  @Field(() => FilterDto)
  filter?: FilterDto = new FilterDto();
}
