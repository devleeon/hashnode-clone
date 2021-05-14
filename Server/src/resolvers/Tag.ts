import { Tags } from "../generated/typegraphql-prisma";
import { MyContext } from "../types";
import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";

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
}
