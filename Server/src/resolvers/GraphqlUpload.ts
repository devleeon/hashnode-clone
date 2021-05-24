import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class File {
  @Field(() => String, {
    nullable: false,
  })
  filename!: string;
  @Field(() => String, {
    nullable: false,
  })
  mimetype!: string;
  @Field(() => String, {
    nullable: false,
  })
  encoding!: string;
}
