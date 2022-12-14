import { Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';

// eslint-disable-next-line
@Resolver((of) => PostModel)
export class PostsResolver {
  // eslint-disable-next-line
  constructor() {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
