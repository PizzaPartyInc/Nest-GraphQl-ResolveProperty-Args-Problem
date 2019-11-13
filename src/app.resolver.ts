import {
  Args,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { Int } from 'type-graphql';

import { CriteriaDto } from './criteria.dto';
import { ListDto } from './list.dto';

@Resolver(type => ListDto)
export class AppResolver {
  @Query(returns => ListDto, { name: 'getData' })
  async getData(
    @Args({
      name: 'criteria',
      type: () => CriteriaDto,
      nullable: true,
    })
    criteria: CriteriaDto,
  ): Promise<ListDto> {
    console.log('getData', criteria);
    const returnDto = new ListDto();
    returnDto.list = ['test1', 'test2'];
    return returnDto;
  }

  @ResolveProperty('totalCount', returns => Int, {
    nullable: true,
  })
  async getTotalCount(obj, args, context, info): Promise<number> {
    console.log('getTotalCount args: ', args);
    return 2;
  }
}
