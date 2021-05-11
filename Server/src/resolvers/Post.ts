import { Post, User } from "../generated/typegraphql-prisma";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
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
  @FieldResolver(() => String, { nullable: true })
  async authorAvatar(
    @Root() post: Post,
    @Ctx() { prisma }: MyContext
  ): Promise<string | undefined> {
    const user = await prisma.user.findUnique({
      where: { id: post.authorId },
      select: { avatar: true },
    });
    return user?.avatar;
  }
  @FieldResolver(() => Number, { nullable: true })
  async likesCount(
    @Root() post: Post,
    @Ctx() { prisma }: MyContext
  ): Promise<number | undefined> {
    const likes = await prisma.post
      .findUnique({ where: { id: post.id }, select: { likes: true } })
      .likes();
    return likes?.length;
  }
  @FieldResolver(() => Number, { nullable: true })
  async commentsCount(
    @Root() post: Post,
    @Ctx() { prisma }: MyContext
  ): Promise<number | undefined> {
    const comments = await prisma.post
      .findUnique({ where: { id: post.id }, select: { comments: true } })
      .comments();
    return comments?.length;
  }
  @FieldResolver(() => Boolean, { nullable: true })
  async isBookmarked(
    @Root() post: Post,
    @Ctx() { prisma, userId }: MyContext
  ): Promise<boolean> {
    const bookmarked = await prisma.bookmark.findFirst({
      where: { userId, postId: post.id },
    });
    return bookmarked ? true : false;
  }
  @FieldResolver(() => String, { nullable: true })
  async shortenedText(@Root() post: Post): Promise<string> {
    const shortened = post.text.slice(0, 200);
    return shortened;
  }
  @Mutation(() => Boolean)
  async unBookmark(
    @Arg("postId") postId: string,
    @Ctx() { prisma, userId }: MyContext
  ): Promise<boolean> {
    // check if this post is bookmarked
    const bookmarked = await prisma.bookmark.findFirst({
      where: { userId, postId },
    });
    if (bookmarked) {
      // if it's bookmarked
      // remove bookmark
      await prisma.bookmark.delete({ where: { id: bookmarked.id } });
      return true;
    }
    return false;
  }
}
