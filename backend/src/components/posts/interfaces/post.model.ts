import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  // eslint-disable-next-line
  @Field((type) => String)
  id: string;
  // eslint-disable-next-line
  @Field((type) => String)
  title: string;
}
