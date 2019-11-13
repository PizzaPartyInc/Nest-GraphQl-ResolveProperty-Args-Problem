import { CustomScalar, Scalar } from '@nestjs/graphql';

@Scalar('Object', type => Object)
export class ObjectScalar implements CustomScalar<object, object> {
  description = 'Object custom scalar type';

  parseValue(value: object): object {
    return value;
  }

  serialize(value: object): object {
    return value;
  }

  parseLiteral(ast: any): object {
    return ast.value;
  }
}
