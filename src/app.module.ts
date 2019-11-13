import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ObjectScalar } from './object.scalar';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.graphql',
    }),
  ],
  providers: [ObjectScalar, AppResolver],
})
export class AppModule {}
