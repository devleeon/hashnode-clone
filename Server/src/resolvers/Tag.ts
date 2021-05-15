import { Post, Tags } from "../generated/typegraphql-prisma";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

@Resolver(Tags)
export class CustomTagResolver {
  @FieldResolver(() => Number)
  async postsCount(
    @Root() tag: Tags,
    @Ctx() { prisma }: MyContext
  ): Promise<number> {
    return (await prisma.tags.findUnique({ where: { name: tag.name } }).posts())
      .length;
  }
  @FieldResolver(() => Boolean)
  async amIFollowing(
    @Root() tag: Tags,
    @Ctx() { prisma, userId }: MyContext
  ): Promise<boolean> {
    const following = await prisma.tags.findFirst({
      where: { id: tag.id, followers: { some: { id: userId } } },
    });
    return following ? true : false;
  }
  @Query(() => [Post])
  async tagPosts(
    @Arg("tagName") tagName: string,
    @Arg("limit") limit: number,
    @Arg("offset", { nullable: true }) offset: number,
    @Ctx() { prisma }: MyContext
  ): Promise<Post[]> {
    let posts;
    if (offset) {
      posts = await prisma.post.findMany({
        where: { tags: { some: { name: tagName } } },
        take: limit,
        skip: offset,
      });
    } else {
      posts = await prisma.post.findMany({
        where: { tags: { some: { name: tagName } } },
        take: limit,
      });
    }

    return posts;
  }
}
