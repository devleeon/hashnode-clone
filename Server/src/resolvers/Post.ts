import { Post, User } from "../generated/typegraphql-prisma";
import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { MyContext } from "src/types";

@Resolver(Post)
export class CustomPostResolver {
  @FieldResolver(() => String, { nullable: true })
  async authorname(
    @Root() post: Post,
    @Ctx() { prisma }: MyContext
  ): Promise<string | undefined> {
    const user = await prisma.user.findUnique({
      where: { id: post.authorId },
      select: { username: true },
    });
    return user?.username;
  }
}
