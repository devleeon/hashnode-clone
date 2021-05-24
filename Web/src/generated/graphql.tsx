import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBlog = {
  __typename?: 'AggregateBlog';
  count?: Maybe<BlogCountAggregate>;
  avg?: Maybe<BlogAvgAggregate>;
  sum?: Maybe<BlogSumAggregate>;
  min?: Maybe<BlogMinAggregate>;
  max?: Maybe<BlogMaxAggregate>;
};

export type AggregateBookmark = {
  __typename?: 'AggregateBookmark';
  count?: Maybe<BookmarkCountAggregate>;
  min?: Maybe<BookmarkMinAggregate>;
  max?: Maybe<BookmarkMaxAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count?: Maybe<PostCountAggregate>;
  avg?: Maybe<PostAvgAggregate>;
  sum?: Maybe<PostSumAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type AggregateTags = {
  __typename?: 'AggregateTags';
  count?: Maybe<TagsCountAggregate>;
  avg?: Maybe<TagsAvgAggregate>;
  sum?: Maybe<TagsSumAggregate>;
  min?: Maybe<TagsMinAggregate>;
  max?: Maybe<TagsMaxAggregate>;
};

export type Blog = {
  __typename?: 'Blog';
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  monthlyScore: Scalars['Int'];
  weeklyScore: Scalars['Int'];
  user: User;
};

export type BlogAvgAggregate = {
  __typename?: 'BlogAvgAggregate';
  monthlyScore?: Maybe<Scalars['Float']>;
  weeklyScore?: Maybe<Scalars['Float']>;
};

export type BlogCountAggregate = {
  __typename?: 'BlogCountAggregate';
  id: Scalars['Int'];
  name: Scalars['Int'];
  address: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  monthlyScore: Scalars['Int'];
  weeklyScore: Scalars['Int'];
  _all: Scalars['Int'];
};

export type BlogCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  monthlyScore?: Maybe<Scalars['Int']>;
  weeklyScore?: Maybe<Scalars['Int']>;
  user: UserCreateNestedOneWithoutBlogInput;
};

export type BlogCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  monthlyScore?: Maybe<Scalars['Int']>;
  weeklyScore?: Maybe<Scalars['Int']>;
};

export type BlogCreateNestedOneWithoutUserInput = {
  create?: Maybe<BlogCreateWithoutUserInput>;
  connectOrCreate?: Maybe<BlogCreateOrConnectWithoutUserInput>;
  connect?: Maybe<BlogWhereUniqueInput>;
};

export type BlogCreateOrConnectWithoutUserInput = {
  where: BlogWhereUniqueInput;
  create: BlogCreateWithoutUserInput;
};

export type BlogCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  monthlyScore?: Maybe<Scalars['Int']>;
  weeklyScore?: Maybe<Scalars['Int']>;
};

export type BlogGroupBy = {
  __typename?: 'BlogGroupBy';
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  monthlyScore: Scalars['Int'];
  weeklyScore: Scalars['Int'];
  count?: Maybe<BlogCountAggregate>;
  avg?: Maybe<BlogAvgAggregate>;
  sum?: Maybe<BlogSumAggregate>;
  min?: Maybe<BlogMinAggregate>;
  max?: Maybe<BlogMaxAggregate>;
};

export type BlogMaxAggregate = {
  __typename?: 'BlogMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  monthlyScore?: Maybe<Scalars['Int']>;
  weeklyScore?: Maybe<Scalars['Int']>;
};

export type BlogMinAggregate = {
  __typename?: 'BlogMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  monthlyScore?: Maybe<Scalars['Int']>;
  weeklyScore?: Maybe<Scalars['Int']>;
};

export type BlogOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  monthlyScore?: Maybe<SortOrder>;
  weeklyScore?: Maybe<SortOrder>;
};

export type BlogRelationFilter = {
  is?: Maybe<BlogWhereInput>;
  isNot?: Maybe<BlogWhereInput>;
};

export enum BlogScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  MonthlyScore = 'monthlyScore',
  WeeklyScore = 'weeklyScore'
}

export type BlogScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<BlogScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<BlogScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<BlogScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  address?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
  monthlyScore?: Maybe<IntWithAggregatesFilter>;
  weeklyScore?: Maybe<IntWithAggregatesFilter>;
};

export type BlogSumAggregate = {
  __typename?: 'BlogSumAggregate';
  monthlyScore?: Maybe<Scalars['Int']>;
  weeklyScore?: Maybe<Scalars['Int']>;
};

export type BlogUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  monthlyScore?: Maybe<IntFieldUpdateOperationsInput>;
  weeklyScore?: Maybe<IntFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutBlogInput>;
};

export type BlogUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  monthlyScore?: Maybe<IntFieldUpdateOperationsInput>;
  weeklyScore?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BlogUpdateOneWithoutUserInput = {
  create?: Maybe<BlogCreateWithoutUserInput>;
  connectOrCreate?: Maybe<BlogCreateOrConnectWithoutUserInput>;
  upsert?: Maybe<BlogUpsertWithoutUserInput>;
  connect?: Maybe<BlogWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BlogUpdateWithoutUserInput>;
};

export type BlogUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  monthlyScore?: Maybe<IntFieldUpdateOperationsInput>;
  weeklyScore?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BlogUpsertWithoutUserInput = {
  update: BlogUpdateWithoutUserInput;
  create: BlogCreateWithoutUserInput;
};

export type BlogWhereInput = {
  AND?: Maybe<Array<BlogWhereInput>>;
  OR?: Maybe<Array<BlogWhereInput>>;
  NOT?: Maybe<Array<BlogWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  address?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  monthlyScore?: Maybe<IntFilter>;
  weeklyScore?: Maybe<IntFilter>;
};

export type BlogWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
  postId: Scalars['String'];
  user: User;
  post: Post;
};

export type BookmarkCountAggregate = {
  __typename?: 'BookmarkCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  userId: Scalars['Int'];
  postId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type BookmarkCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookmarksInput;
  post: PostCreateNestedOneWithoutBookmarkedInput;
};

export type BookmarkCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  postId: Scalars['String'];
};

export type BookmarkCreateManyPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookmarkCreateManyPostInputEnvelope = {
  data: Array<BookmarkCreateManyPostInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BookmarkCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  postId: Scalars['String'];
};

export type BookmarkCreateManyUserInputEnvelope = {
  data: Array<BookmarkCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BookmarkCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<BookmarkCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<BookmarkCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
};

export type BookmarkCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<BookmarkCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<BookmarkCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
};

export type BookmarkCreateOrConnectWithoutPostInput = {
  where: BookmarkWhereUniqueInput;
  create: BookmarkCreateWithoutPostInput;
};

export type BookmarkCreateOrConnectWithoutUserInput = {
  where: BookmarkWhereUniqueInput;
  create: BookmarkCreateWithoutUserInput;
};

export type BookmarkCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookmarksInput;
};

export type BookmarkCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutBookmarkedInput;
};

export type BookmarkGroupBy = {
  __typename?: 'BookmarkGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
  postId: Scalars['String'];
  count?: Maybe<BookmarkCountAggregate>;
  min?: Maybe<BookmarkMinAggregate>;
  max?: Maybe<BookmarkMaxAggregate>;
};

export type BookmarkListRelationFilter = {
  every?: Maybe<BookmarkWhereInput>;
  some?: Maybe<BookmarkWhereInput>;
  none?: Maybe<BookmarkWhereInput>;
};

export type BookmarkMaxAggregate = {
  __typename?: 'BookmarkMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
};

export type BookmarkMinAggregate = {
  __typename?: 'BookmarkMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
};

export type BookmarkOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
};

export enum BookmarkScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UserId = 'userId',
  PostId = 'postId'
}

export type BookmarkScalarWhereInput = {
  AND?: Maybe<Array<BookmarkScalarWhereInput>>;
  OR?: Maybe<Array<BookmarkScalarWhereInput>>;
  NOT?: Maybe<Array<BookmarkScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
};

export type BookmarkScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<BookmarkScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<BookmarkScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<BookmarkScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
  postId?: Maybe<StringWithAggregatesFilter>;
};

export type BookmarkUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutBookmarksInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutBookmarkedInput>;
};

export type BookmarkUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookmarkUpdateManyWithWhereWithoutPostInput = {
  where: BookmarkScalarWhereInput;
  data: BookmarkUpdateManyMutationInput;
};

export type BookmarkUpdateManyWithWhereWithoutUserInput = {
  where: BookmarkScalarWhereInput;
  data: BookmarkUpdateManyMutationInput;
};

export type BookmarkUpdateManyWithoutPostInput = {
  create?: Maybe<Array<BookmarkCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<BookmarkUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<BookmarkCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  set?: Maybe<Array<BookmarkWhereUniqueInput>>;
  disconnect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  delete?: Maybe<Array<BookmarkWhereUniqueInput>>;
  update?: Maybe<Array<BookmarkUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<BookmarkUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<BookmarkScalarWhereInput>>;
};

export type BookmarkUpdateManyWithoutUserInput = {
  create?: Maybe<Array<BookmarkCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<BookmarkCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<BookmarkUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<BookmarkCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  set?: Maybe<Array<BookmarkWhereUniqueInput>>;
  disconnect?: Maybe<Array<BookmarkWhereUniqueInput>>;
  delete?: Maybe<Array<BookmarkWhereUniqueInput>>;
  update?: Maybe<Array<BookmarkUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<BookmarkUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<BookmarkScalarWhereInput>>;
};

export type BookmarkUpdateWithWhereUniqueWithoutPostInput = {
  where: BookmarkWhereUniqueInput;
  data: BookmarkUpdateWithoutPostInput;
};

export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
  where: BookmarkWhereUniqueInput;
  data: BookmarkUpdateWithoutUserInput;
};

export type BookmarkUpdateWithoutPostInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutBookmarksInput>;
};

export type BookmarkUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutBookmarkedInput>;
};

export type BookmarkUpsertWithWhereUniqueWithoutPostInput = {
  where: BookmarkWhereUniqueInput;
  update: BookmarkUpdateWithoutPostInput;
  create: BookmarkCreateWithoutPostInput;
};

export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
  where: BookmarkWhereUniqueInput;
  update: BookmarkUpdateWithoutUserInput;
  create: BookmarkCreateWithoutUserInput;
};

export type BookmarkWhereInput = {
  AND?: Maybe<Array<BookmarkWhereInput>>;
  OR?: Maybe<Array<BookmarkWhereInput>>;
  NOT?: Maybe<Array<BookmarkWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  post?: Maybe<PostRelationFilter>;
  postId?: Maybe<StringFilter>;
};

export type BookmarkWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
  postId: Scalars['String'];
};

export type CommentCreateManyPostInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommentCreateManyPostInputEnvelope = {
  data: Array<CommentCreateManyPostInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  postId: Scalars['String'];
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateOrConnectWithoutPostInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutPostInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutUserInput;
};

export type CommentCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UserId = 'userId',
  PostId = 'postId'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
};

export type CommentUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUpdateManyWithoutUserInput = {
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutUserInput;
};

export type CommentUpdateWithoutPostInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostInput;
  create: CommentCreateWithoutPostInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutUserInput;
  create: CommentCreateWithoutUserInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  post?: Maybe<PostRelationFilter>;
  postId?: Maybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
  postId: Scalars['String'];
};

export type LikeCreateManyPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type LikeCreateManyPostInputEnvelope = {
  data: Array<LikeCreateManyPostInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LikeCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  postId: Scalars['String'];
};

export type LikeCreateManyUserInputEnvelope = {
  data: Array<LikeCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LikeCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<LikeCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<LikeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateOrConnectWithoutPostInput = {
  where: LikeWhereUniqueInput;
  create: LikeCreateWithoutPostInput;
};

export type LikeCreateOrConnectWithoutUserInput = {
  where: LikeWhereUniqueInput;
  create: LikeCreateWithoutUserInput;
};

export type LikeCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikesInput;
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutLikesInput;
};

export type LikeListRelationFilter = {
  every?: Maybe<LikeWhereInput>;
  some?: Maybe<LikeWhereInput>;
  none?: Maybe<LikeWhereInput>;
};

export type LikeOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
};

export enum LikeScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UserId = 'userId',
  PostId = 'postId'
}

export type LikeScalarWhereInput = {
  AND?: Maybe<Array<LikeScalarWhereInput>>;
  OR?: Maybe<Array<LikeScalarWhereInput>>;
  NOT?: Maybe<Array<LikeScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
};

export type LikeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LikeUpdateManyWithWhereWithoutPostInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyMutationInput;
};

export type LikeUpdateManyWithWhereWithoutUserInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyMutationInput;
};

export type LikeUpdateManyWithoutPostInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<LikeCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<LikeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutPostInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutPostInput;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutUserInput;
};

export type LikeUpdateWithoutPostInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
};

export type LikeUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutLikesInput>;
};

export type LikeUpsertWithWhereUniqueWithoutPostInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutPostInput;
  create: LikeCreateWithoutPostInput;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutUserInput;
  create: LikeCreateWithoutUserInput;
};

export type LikeWhereInput = {
  AND?: Maybe<Array<LikeWhereInput>>;
  OR?: Maybe<Array<LikeWhereInput>>;
  NOT?: Maybe<Array<LikeWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  post?: Maybe<PostRelationFilter>;
  postId?: Maybe<StringFilter>;
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createManyBlog: AffectedRowsOutput;
  deleteBlog?: Maybe<Blog>;
  updateBlog?: Maybe<Blog>;
  deleteManyBlog: AffectedRowsOutput;
  updateManyBlog: AffectedRowsOutput;
  upsertBlog: Blog;
  createBookmark: Bookmark;
  createManyBookmark: AffectedRowsOutput;
  deleteBookmark?: Maybe<Bookmark>;
  updateBookmark?: Maybe<Bookmark>;
  deleteManyBookmark: AffectedRowsOutput;
  updateManyBookmark: AffectedRowsOutput;
  upsertBookmark: Bookmark;
  createPost: Post;
  createManyPost: AffectedRowsOutput;
  deletePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deleteManyPost: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  upsertPost: Post;
  createTags: Tags;
  createManyTags: AffectedRowsOutput;
  deleteTags?: Maybe<Tags>;
  updateTags?: Maybe<Tags>;
  deleteManyTags: AffectedRowsOutput;
  updateManyTags: AffectedRowsOutput;
  upsertTags: Tags;
  unBookmark: Scalars['Boolean'];
  toggleLike: Scalars['Boolean'];
  upload: Scalars['String'];
  signUp: UserResponse;
  login: UserResponse;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateManyBlogArgs = {
  data: Array<BlogCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationDeleteManyBlogArgs = {
  where?: Maybe<BlogWhereInput>;
};


export type MutationUpdateManyBlogArgs = {
  data: BlogUpdateManyMutationInput;
  where?: Maybe<BlogWhereInput>;
};


export type MutationUpsertBlogArgs = {
  where: BlogWhereUniqueInput;
  create: BlogCreateInput;
  update: BlogUpdateInput;
};


export type MutationCreateBookmarkArgs = {
  data: BookmarkCreateInput;
};


export type MutationCreateManyBookmarkArgs = {
  data: Array<BookmarkCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type MutationUpdateBookmarkArgs = {
  data: BookmarkUpdateInput;
  where: BookmarkWhereUniqueInput;
};


export type MutationDeleteManyBookmarkArgs = {
  where?: Maybe<BookmarkWhereInput>;
};


export type MutationUpdateManyBookmarkArgs = {
  data: BookmarkUpdateManyMutationInput;
  where?: Maybe<BookmarkWhereInput>;
};


export type MutationUpsertBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
  create: BookmarkCreateInput;
  update: BookmarkUpdateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationCreateTagsArgs = {
  data: TagsCreateInput;
};


export type MutationCreateManyTagsArgs = {
  data: Array<TagsCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteTagsArgs = {
  where: TagsWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: TagsUpdateInput;
  where: TagsWhereUniqueInput;
};


export type MutationDeleteManyTagsArgs = {
  where?: Maybe<TagsWhereInput>;
};


export type MutationUpdateManyTagsArgs = {
  data: TagsUpdateManyMutationInput;
  where?: Maybe<TagsWhereInput>;
};


export type MutationUpsertTagsArgs = {
  where: TagsWhereUniqueInput;
  create: TagsCreateInput;
  update: TagsUpdateInput;
};


export type MutationUnBookmarkArgs = {
  postId: Scalars['String'];
};


export type MutationToggleLikeArgs = {
  postId: Scalars['String'];
};


export type MutationUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationSignUpArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  text: Scalars['String'];
  published: Scalars['Boolean'];
  photo?: Maybe<Scalars['String']>;
  authorId: Scalars['String'];
  likesCount: Scalars['Int'];
  author: User;
  likes: Array<Like>;
  bookmarked: Array<Bookmark>;
  tags: Array<Tags>;
  comments: Array<Comment>;
  authorname?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  commentsCount?: Maybe<Scalars['Float']>;
  isBookmarked: Scalars['Boolean'];
  isLiked: Scalars['Boolean'];
  shortenedText?: Maybe<Scalars['String']>;
};


export type PostLikesArgs = {
  where?: Maybe<LikeWhereInput>;
  orderBy?: Maybe<Array<LikeOrderByInput>>;
  cursor?: Maybe<LikeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<LikeScalarFieldEnum>>;
};


export type PostBookmarkedArgs = {
  where?: Maybe<BookmarkWhereInput>;
  orderBy?: Maybe<Array<BookmarkOrderByInput>>;
  cursor?: Maybe<BookmarkWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BookmarkScalarFieldEnum>>;
};


export type PostTagsArgs = {
  where?: Maybe<TagsWhereInput>;
  orderBy?: Maybe<Array<TagsOrderByInput>>;
  cursor?: Maybe<TagsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TagsScalarFieldEnum>>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  likesCount?: Maybe<Scalars['Float']>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  title: Scalars['Int'];
  content: Scalars['Int'];
  text: Scalars['Int'];
  published: Scalars['Int'];
  photo: Scalars['Int'];
  authorId: Scalars['Int'];
  likesCount: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PostCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
};

export type PostCreateManyAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  authorId: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedManyWithoutTagsInput = {
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedOneWithoutBookmarkedInput = {
  create?: Maybe<PostCreateWithoutBookmarkedInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutBookmarkedInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutLikesInput = {
  create?: Maybe<PostCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutLikesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostCreateOrConnectWithoutBookmarkedInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutBookmarkedInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCommentsInput;
};

export type PostCreateOrConnectWithoutLikesInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutLikesInput;
};

export type PostCreateOrConnectWithoutTagsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutTagsInput;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutBookmarkedInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
};

export type PostCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  author: UserCreateNestedOneWithoutPostsInput;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  tags?: Maybe<TagsCreateNestedManyWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutTagsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  author: UserCreateNestedOneWithoutPostsInput;
  likes?: Maybe<LikeCreateNestedManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkCreateNestedManyWithoutPostInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  text: Scalars['String'];
  published: Scalars['Boolean'];
  photo?: Maybe<Scalars['String']>;
  authorId: Scalars['String'];
  likesCount: Scalars['Int'];
  count?: Maybe<PostCountAggregate>;
  avg?: Maybe<PostAvgAggregate>;
  sum?: Maybe<PostSumAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  likesCount?: Maybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  Content = 'content',
  Text = 'text',
  Published = 'published',
  Photo = 'photo',
  AuthorId = 'authorId',
  LikesCount = 'likesCount'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  photo?: Maybe<StringNullableFilter>;
  authorId?: Maybe<StringFilter>;
  likesCount?: Maybe<IntFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  content?: Maybe<StringWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  photo?: Maybe<StringNullableWithAggregatesFilter>;
  authorId?: Maybe<StringWithAggregatesFilter>;
  likesCount?: Maybe<IntWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  likesCount?: Maybe<Scalars['Int']>;
};

export type PostUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateOneRequiredWithoutBookmarkedInput = {
  create?: Maybe<PostCreateWithoutBookmarkedInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutBookmarkedInput>;
  upsert?: Maybe<PostUpsertWithoutBookmarkedInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutBookmarkedInput>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
};

export type PostUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<PostCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutLikesInput>;
  upsert?: Maybe<PostUpsertWithoutLikesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutLikesInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutTagsInput;
};

export type PostUpdateWithoutAuthorInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpdateWithoutBookmarkedInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpdateWithoutCommentsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
};

export type PostUpdateWithoutLikesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  tags?: Maybe<TagsUpdateManyWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpdateWithoutTagsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  likesCount?: Maybe<IntFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  likes?: Maybe<LikeUpdateManyWithoutPostInput>;
  bookmarked?: Maybe<BookmarkUpdateManyWithoutPostInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutTagsInput;
  create: PostCreateWithoutTagsInput;
};

export type PostUpsertWithoutBookmarkedInput = {
  update: PostUpdateWithoutBookmarkedInput;
  create: PostCreateWithoutBookmarkedInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsInput;
  create: PostCreateWithoutCommentsInput;
};

export type PostUpsertWithoutLikesInput = {
  update: PostUpdateWithoutLikesInput;
  create: PostCreateWithoutLikesInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  photo?: Maybe<StringNullableFilter>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringFilter>;
  likes?: Maybe<LikeListRelationFilter>;
  likesCount?: Maybe<IntFilter>;
  bookmarked?: Maybe<BookmarkListRelationFilter>;
  tags?: Maybe<TagsListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  findFirstBlog?: Maybe<Blog>;
  blogs: Array<Blog>;
  aggregateBlog: AggregateBlog;
  groupByBlog: Array<BlogGroupBy>;
  bookmark?: Maybe<Bookmark>;
  findFirstBookmark?: Maybe<Bookmark>;
  bookmarks: Array<Bookmark>;
  aggregateBookmark: AggregateBookmark;
  groupByBookmark: Array<BookmarkGroupBy>;
  post?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  posts: Array<Post>;
  aggregatePost: AggregatePost;
  groupByPost: Array<PostGroupBy>;
  findUniqueTags?: Maybe<Tags>;
  findFirstTags?: Maybe<Tags>;
  findManyTags: Array<Tags>;
  aggregateTags: AggregateTags;
  groupByTags: Array<TagsGroupBy>;
  tagPosts: Array<Post>;
  me?: Maybe<User>;
};


export type QueryBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type QueryFindFirstBlogArgs = {
  where?: Maybe<BlogWhereInput>;
  orderBy?: Maybe<Array<BlogOrderByInput>>;
  cursor?: Maybe<BlogWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BlogScalarFieldEnum>>;
};


export type QueryBlogsArgs = {
  where?: Maybe<BlogWhereInput>;
  orderBy?: Maybe<Array<BlogOrderByInput>>;
  cursor?: Maybe<BlogWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BlogScalarFieldEnum>>;
};


export type QueryAggregateBlogArgs = {
  where?: Maybe<BlogWhereInput>;
  orderBy?: Maybe<Array<BlogOrderByInput>>;
  cursor?: Maybe<BlogWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByBlogArgs = {
  where?: Maybe<BlogWhereInput>;
  orderBy?: Maybe<Array<BlogOrderByInput>>;
  by: Array<BlogScalarFieldEnum>;
  having?: Maybe<BlogScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBookmarkArgs = {
  where: BookmarkWhereUniqueInput;
};


export type QueryFindFirstBookmarkArgs = {
  where?: Maybe<BookmarkWhereInput>;
  orderBy?: Maybe<Array<BookmarkOrderByInput>>;
  cursor?: Maybe<BookmarkWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BookmarkScalarFieldEnum>>;
};


export type QueryBookmarksArgs = {
  where?: Maybe<BookmarkWhereInput>;
  orderBy?: Maybe<Array<BookmarkOrderByInput>>;
  cursor?: Maybe<BookmarkWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BookmarkScalarFieldEnum>>;
};


export type QueryAggregateBookmarkArgs = {
  where?: Maybe<BookmarkWhereInput>;
  orderBy?: Maybe<Array<BookmarkOrderByInput>>;
  cursor?: Maybe<BookmarkWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByBookmarkArgs = {
  where?: Maybe<BookmarkWhereInput>;
  orderBy?: Maybe<Array<BookmarkOrderByInput>>;
  by: Array<BookmarkScalarFieldEnum>;
  having?: Maybe<BookmarkScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  by: Array<PostScalarFieldEnum>;
  having?: Maybe<PostScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueTagsArgs = {
  where: TagsWhereUniqueInput;
};


export type QueryFindFirstTagsArgs = {
  where?: Maybe<TagsWhereInput>;
  orderBy?: Maybe<Array<TagsOrderByInput>>;
  cursor?: Maybe<TagsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TagsScalarFieldEnum>>;
};


export type QueryFindManyTagsArgs = {
  where?: Maybe<TagsWhereInput>;
  orderBy?: Maybe<Array<TagsOrderByInput>>;
  cursor?: Maybe<TagsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TagsScalarFieldEnum>>;
};


export type QueryAggregateTagsArgs = {
  where?: Maybe<TagsWhereInput>;
  orderBy?: Maybe<Array<TagsOrderByInput>>;
  cursor?: Maybe<TagsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByTagsArgs = {
  where?: Maybe<TagsWhereInput>;
  orderBy?: Maybe<Array<TagsOrderByInput>>;
  by: Array<TagsScalarFieldEnum>;
  having?: Maybe<TagsScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTagPostsArgs = {
  offset?: Maybe<Scalars['Float']>;
  limit: Scalars['Float'];
  tagName: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type Tags = {
  __typename?: 'Tags';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  followCount: Scalars['Int'];
  postsThisweek: Scalars['Int'];
  explain: Scalars['String'];
  image: Scalars['String'];
  followers: Array<User>;
  posts: Array<Post>;
  postsCount: Scalars['Float'];
  amIFollowing: Scalars['Boolean'];
};


export type TagsFollowersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type TagsPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};

export type TagsAvgAggregate = {
  __typename?: 'TagsAvgAggregate';
  followCount?: Maybe<Scalars['Float']>;
  postsThisweek?: Maybe<Scalars['Float']>;
};

export type TagsCountAggregate = {
  __typename?: 'TagsCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  name: Scalars['Int'];
  followCount: Scalars['Int'];
  postsThisweek: Scalars['Int'];
  explain: Scalars['Int'];
  image: Scalars['Int'];
  _all: Scalars['Int'];
};

export type TagsCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
  explain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  followers?: Maybe<UserCreateNestedManyWithoutFollowingTagsInput>;
  posts?: Maybe<PostCreateNestedManyWithoutTagsInput>;
};

export type TagsCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
  explain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type TagsCreateNestedManyWithoutFollowersInput = {
  create?: Maybe<Array<TagsCreateWithoutFollowersInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutFollowersInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
};

export type TagsCreateNestedManyWithoutPostsInput = {
  create?: Maybe<Array<TagsCreateWithoutPostsInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutPostsInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
};

export type TagsCreateOrConnectWithoutFollowersInput = {
  where: TagsWhereUniqueInput;
  create: TagsCreateWithoutFollowersInput;
};

export type TagsCreateOrConnectWithoutPostsInput = {
  where: TagsWhereUniqueInput;
  create: TagsCreateWithoutPostsInput;
};

export type TagsCreateWithoutFollowersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
  explain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutTagsInput>;
};

export type TagsCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
  explain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  followers?: Maybe<UserCreateNestedManyWithoutFollowingTagsInput>;
};

export type TagsGroupBy = {
  __typename?: 'TagsGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  followCount: Scalars['Int'];
  postsThisweek: Scalars['Int'];
  explain: Scalars['String'];
  image: Scalars['String'];
  count?: Maybe<TagsCountAggregate>;
  avg?: Maybe<TagsAvgAggregate>;
  sum?: Maybe<TagsSumAggregate>;
  min?: Maybe<TagsMinAggregate>;
  max?: Maybe<TagsMaxAggregate>;
};

export type TagsListRelationFilter = {
  every?: Maybe<TagsWhereInput>;
  some?: Maybe<TagsWhereInput>;
  none?: Maybe<TagsWhereInput>;
};

export type TagsMaxAggregate = {
  __typename?: 'TagsMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
  explain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type TagsMinAggregate = {
  __typename?: 'TagsMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
  explain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type TagsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  followCount?: Maybe<SortOrder>;
  postsThisweek?: Maybe<SortOrder>;
  explain?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
};

export enum TagsScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  FollowCount = 'followCount',
  PostsThisweek = 'postsThisweek',
  Explain = 'explain',
  Image = 'image'
}

export type TagsScalarWhereInput = {
  AND?: Maybe<Array<TagsScalarWhereInput>>;
  OR?: Maybe<Array<TagsScalarWhereInput>>;
  NOT?: Maybe<Array<TagsScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  followCount?: Maybe<IntFilter>;
  postsThisweek?: Maybe<IntFilter>;
  explain?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
};

export type TagsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TagsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TagsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TagsScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  followCount?: Maybe<IntWithAggregatesFilter>;
  postsThisweek?: Maybe<IntWithAggregatesFilter>;
  explain?: Maybe<StringWithAggregatesFilter>;
  image?: Maybe<StringWithAggregatesFilter>;
};

export type TagsSumAggregate = {
  __typename?: 'TagsSumAggregate';
  followCount?: Maybe<Scalars['Int']>;
  postsThisweek?: Maybe<Scalars['Int']>;
};

export type TagsUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  followCount?: Maybe<IntFieldUpdateOperationsInput>;
  postsThisweek?: Maybe<IntFieldUpdateOperationsInput>;
  explain?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingTagsInput>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
};

export type TagsUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  followCount?: Maybe<IntFieldUpdateOperationsInput>;
  postsThisweek?: Maybe<IntFieldUpdateOperationsInput>;
  explain?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagsUpdateManyWithWhereWithoutFollowersInput = {
  where: TagsScalarWhereInput;
  data: TagsUpdateManyMutationInput;
};

export type TagsUpdateManyWithWhereWithoutPostsInput = {
  where: TagsScalarWhereInput;
  data: TagsUpdateManyMutationInput;
};

export type TagsUpdateManyWithoutFollowersInput = {
  create?: Maybe<Array<TagsCreateWithoutFollowersInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutFollowersInput>>;
  upsert?: Maybe<Array<TagsUpsertWithWhereUniqueWithoutFollowersInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
  set?: Maybe<Array<TagsWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagsWhereUniqueInput>>;
  delete?: Maybe<Array<TagsWhereUniqueInput>>;
  update?: Maybe<Array<TagsUpdateWithWhereUniqueWithoutFollowersInput>>;
  updateMany?: Maybe<Array<TagsUpdateManyWithWhereWithoutFollowersInput>>;
  deleteMany?: Maybe<Array<TagsScalarWhereInput>>;
};

export type TagsUpdateManyWithoutPostsInput = {
  create?: Maybe<Array<TagsCreateWithoutPostsInput>>;
  connectOrCreate?: Maybe<Array<TagsCreateOrConnectWithoutPostsInput>>;
  upsert?: Maybe<Array<TagsUpsertWithWhereUniqueWithoutPostsInput>>;
  connect?: Maybe<Array<TagsWhereUniqueInput>>;
  set?: Maybe<Array<TagsWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagsWhereUniqueInput>>;
  delete?: Maybe<Array<TagsWhereUniqueInput>>;
  update?: Maybe<Array<TagsUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagsUpdateManyWithWhereWithoutPostsInput>>;
  deleteMany?: Maybe<Array<TagsScalarWhereInput>>;
};

export type TagsUpdateWithWhereUniqueWithoutFollowersInput = {
  where: TagsWhereUniqueInput;
  data: TagsUpdateWithoutFollowersInput;
};

export type TagsUpdateWithWhereUniqueWithoutPostsInput = {
  where: TagsWhereUniqueInput;
  data: TagsUpdateWithoutPostsInput;
};

export type TagsUpdateWithoutFollowersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  followCount?: Maybe<IntFieldUpdateOperationsInput>;
  postsThisweek?: Maybe<IntFieldUpdateOperationsInput>;
  explain?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
};

export type TagsUpdateWithoutPostsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  followCount?: Maybe<IntFieldUpdateOperationsInput>;
  postsThisweek?: Maybe<IntFieldUpdateOperationsInput>;
  explain?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<UserUpdateManyWithoutFollowingTagsInput>;
};

export type TagsUpsertWithWhereUniqueWithoutFollowersInput = {
  where: TagsWhereUniqueInput;
  update: TagsUpdateWithoutFollowersInput;
  create: TagsCreateWithoutFollowersInput;
};

export type TagsUpsertWithWhereUniqueWithoutPostsInput = {
  where: TagsWhereUniqueInput;
  update: TagsUpdateWithoutPostsInput;
  create: TagsCreateWithoutPostsInput;
};

export type TagsWhereInput = {
  AND?: Maybe<Array<TagsWhereInput>>;
  OR?: Maybe<Array<TagsWhereInput>>;
  NOT?: Maybe<Array<TagsWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  followers?: Maybe<UserListRelationFilter>;
  followCount?: Maybe<IntFilter>;
  posts?: Maybe<PostListRelationFilter>;
  postsThisweek?: Maybe<IntFilter>;
  explain?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
};

export type TagsWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  avatar: Scalars['String'];
  cover: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  followedBy: Array<User>;
  following: Array<User>;
  likes: Array<Like>;
  bookmarks: Array<Bookmark>;
  followingTags: Array<Tags>;
  comments: Array<Comment>;
  blog?: Maybe<Blog>;
  posts: Array<Post>;
  followerCount: Scalars['Float'];
};


export type UserFollowedByArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type UserFollowingArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type UserLikesArgs = {
  where?: Maybe<LikeWhereInput>;
  orderBy?: Maybe<Array<LikeOrderByInput>>;
  cursor?: Maybe<LikeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<LikeScalarFieldEnum>>;
};


export type UserBookmarksArgs = {
  where?: Maybe<BookmarkWhereInput>;
  orderBy?: Maybe<Array<BookmarkOrderByInput>>;
  cursor?: Maybe<BookmarkWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BookmarkScalarFieldEnum>>;
};


export type UserFollowingTagsArgs = {
  where?: Maybe<TagsWhereInput>;
  orderBy?: Maybe<Array<TagsOrderByInput>>;
  cursor?: Maybe<TagsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TagsScalarFieldEnum>>;
};


export type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};

export type UserCreateNestedManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutFollowingTagsInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingTagsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingTagsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutBlogInput = {
  create?: Maybe<UserCreateWithoutBlogInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBlogInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutBookmarksInput = {
  create?: Maybe<UserCreateWithoutBookmarksInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBookmarksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutBlogInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutBlogInput;
};

export type UserCreateOrConnectWithoutBookmarksInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutBookmarksInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCommentsInput;
};

export type UserCreateOrConnectWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserCreateOrConnectWithoutFollowingTagsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowingTagsInput;
};

export type UserCreateOrConnectWithoutLikesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutLikesInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type UserCreateWithoutBlogInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutBookmarksInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutFollowedByInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutFollowingInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutFollowingTagsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkCreateNestedManyWithoutUserInput>;
  followingTags?: Maybe<TagsCreateNestedManyWithoutFollowersInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  blog?: Maybe<BlogCreateNestedOneWithoutUserInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  firstname?: Maybe<SortOrder>;
  lastname?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  cover?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<FieldError>;
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Username = 'username',
  Password = 'password',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Avatar = 'avatar',
  Cover = 'cover',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  avatar?: Maybe<StringFilter>;
  cover?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutFollowedByInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithWhereWithoutFollowingTagsInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowedByInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyWithoutFollowingTagsInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingTagsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingTagsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingTagsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingTagsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingTagsInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateOneRequiredWithoutBlogInput = {
  create?: Maybe<UserCreateWithoutBlogInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBlogInput>;
  upsert?: Maybe<UserUpsertWithoutBlogInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutBlogInput>;
};

export type UserUpdateOneRequiredWithoutBookmarksInput = {
  create?: Maybe<UserCreateWithoutBookmarksInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBookmarksInput>;
  upsert?: Maybe<UserUpsertWithoutBookmarksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutBookmarksInput>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLikesInput>;
  upsert?: Maybe<UserUpsertWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutLikesInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
};

export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowedByInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowingInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingTagsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowingTagsInput;
};

export type UserUpdateWithoutBlogInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutBookmarksInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutCommentsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutFollowedByInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutFollowingInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutFollowingTagsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutLikesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutPostsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<StringFieldUpdateOperationsInput>;
  cover?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  bookmarks?: Maybe<BookmarkUpdateManyWithoutUserInput>;
  followingTags?: Maybe<TagsUpdateManyWithoutFollowersInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  blog?: Maybe<BlogUpdateOneWithoutUserInput>;
};

export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowedByInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowingInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingTagsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowingTagsInput;
  create: UserCreateWithoutFollowingTagsInput;
};

export type UserUpsertWithoutBlogInput = {
  update: UserUpdateWithoutBlogInput;
  create: UserCreateWithoutBlogInput;
};

export type UserUpsertWithoutBookmarksInput = {
  update: UserUpdateWithoutBookmarksInput;
  create: UserCreateWithoutBookmarksInput;
};

export type UserUpsertWithoutCommentsInput = {
  update: UserUpdateWithoutCommentsInput;
  create: UserCreateWithoutCommentsInput;
};

export type UserUpsertWithoutLikesInput = {
  update: UserUpdateWithoutLikesInput;
  create: UserCreateWithoutLikesInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  avatar?: Maybe<StringFilter>;
  cover?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  followedBy?: Maybe<UserListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  likes?: Maybe<LikeListRelationFilter>;
  bookmarks?: Maybe<BookmarkListRelationFilter>;
  followingTags?: Maybe<TagsListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  blog?: Maybe<BlogRelationFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type BlogsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlogOrderByInput> | BlogOrderByInput>;
}>;


export type BlogsQuery = (
  { __typename?: 'Query' }
  & { blogs: Array<(
    { __typename?: 'Blog' }
    & Pick<Blog, 'name' | 'address'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'avatar' | 'username' | 'followerCount'>
      & { posts: Array<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'createdAt' | 'title'>
      )> }
    ) }
  )> }
);

export type BookmarksQueryVariables = Exact<{
  userId?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type BookmarksQuery = (
  { __typename?: 'Query' }
  & { bookmarks: Array<(
    { __typename?: 'Bookmark' }
    & { post: (
      { __typename?: 'Post' }
      & RegularPostFragment
    ) }
  )> }
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'content' | 'authorname' | 'authorAvatar' | 'createdAt' | 'likesCount' | 'shortenedText' | 'commentsCount' | 'isBookmarked' | 'photo' | 'isLiked'>
);

export type RegularTagFragment = (
  { __typename?: 'Tags' }
  & Pick<Tags, 'id' | 'name' | 'image' | 'explain' | 'createdAt' | 'followCount' | 'postsCount' | 'amIFollowing'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'avatar'>
);

export type PostsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PostOrderByInput> | PostOrderByInput>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )> }
);

export type TagPostsQueryVariables = Exact<{
  tagName: Scalars['String'];
  limit: Scalars['Float'];
  offset?: Maybe<Scalars['Float']>;
}>;


export type TagPostsQuery = (
  { __typename?: 'Query' }
  & { tagPosts: Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )> }
);

export type ToggleLikeMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type ToggleLikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleLike'>
);

export type TopArticlesQueryVariables = Exact<{
  createdDate?: Maybe<Scalars['DateTime']>;
}>;


export type TopArticlesQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )> }
);

export type UploadPhotoMutationVariables = Exact<{
  upload: Scalars['Upload'];
}>;


export type UploadPhotoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'upload'>
);

export type AllTimePopularQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTimePopularQuery = (
  { __typename?: 'Query' }
  & { findManyTags: Array<(
    { __typename?: 'Tags' }
    & Pick<Tags, 'followCount'>
    & RegularTagFragment
  )> }
);

export type FindUniqueTagQueryVariables = Exact<{
  tagName: Scalars['String'];
}>;


export type FindUniqueTagQuery = (
  { __typename?: 'Query' }
  & { findUniqueTags?: Maybe<(
    { __typename?: 'Tags' }
    & RegularTagFragment
  )> }
);

export type PopularThisWeekQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularThisWeekQuery = (
  { __typename?: 'Query' }
  & { findManyTags: Array<(
    { __typename?: 'Tags' }
    & Pick<Tags, 'postsThisweek'>
    & RegularTagFragment
  )> }
);

export type RecentlyAddedQueryVariables = Exact<{
  sixMonthAgo?: Maybe<Scalars['DateTime']>;
}>;


export type RecentlyAddedQuery = (
  { __typename?: 'Query' }
  & { findManyTags: Array<(
    { __typename?: 'Tags' }
    & Pick<Tags, 'createdAt'>
    & RegularTagFragment
  )> }
);

export type CreateBookmarkMutationVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['String'];
}>;


export type CreateBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { createBookmark: (
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'id' | 'userId' | 'postId'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type UnBookmarkMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type UnBookmarkMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unBookmark'>
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularPostFragmentDoc = gql`
    fragment RegularPost on Post {
  id
  title
  content
  authorname
  authorAvatar
  createdAt
  likesCount
  shortenedText
  commentsCount
  isBookmarked
  photo
  isLiked
}
    `;
export const RegularTagFragmentDoc = gql`
    fragment RegularTag on Tags {
  id
  name
  image
  explain
  createdAt
  followCount
  postsCount
  amIFollowing
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  email
  avatar
}
    `;
export const BlogsDocument = gql`
    query Blogs($take: Int!, $skip: Int, $orderBy: [BlogOrderByInput!]) {
  blogs(orderBy: $orderBy, take: $take, skip: $skip) {
    name
    address
    user {
      id
      avatar
      username
      followerCount
      posts(take: 2, orderBy: {createdAt: desc}) {
        id
        createdAt
        title
      }
    }
  }
}
    `;
export type BlogsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BlogsQuery, BlogsQueryVariables>, 'query'> & ({ variables: BlogsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const BlogsComponent = (props: BlogsComponentProps) => (
      <ApolloReactComponents.Query<BlogsQuery, BlogsQueryVariables> query={BlogsDocument} {...props} />
    );
    

/**
 * __useBlogsQuery__
 *
 * To run a query within a React component, call `useBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useBlogsQuery(baseOptions: Apollo.QueryHookOptions<BlogsQuery, BlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogsQuery, BlogsQueryVariables>(BlogsDocument, options);
      }
export function useBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogsQuery, BlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogsQuery, BlogsQueryVariables>(BlogsDocument, options);
        }
export type BlogsQueryHookResult = ReturnType<typeof useBlogsQuery>;
export type BlogsLazyQueryHookResult = ReturnType<typeof useBlogsLazyQuery>;
export type BlogsQueryResult = Apollo.QueryResult<BlogsQuery, BlogsQueryVariables>;
export const BookmarksDocument = gql`
    query Bookmarks($userId: [String!], $limit: Int, $offset: Int) {
  bookmarks(
    where: {userId: {in: $userId}}
    take: $limit
    skip: $offset
    orderBy: {createdAt: asc}
  ) {
    post {
      ...RegularPost
    }
  }
}
    ${RegularPostFragmentDoc}`;
export type BookmarksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BookmarksQuery, BookmarksQueryVariables>, 'query'>;

    export const BookmarksComponent = (props: BookmarksComponentProps) => (
      <ApolloReactComponents.Query<BookmarksQuery, BookmarksQueryVariables> query={BookmarksDocument} {...props} />
    );
    

/**
 * __useBookmarksQuery__
 *
 * To run a query within a React component, call `useBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarksQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<BookmarksQuery, BookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookmarksQuery, BookmarksQueryVariables>(BookmarksDocument, options);
      }
export function useBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookmarksQuery, BookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookmarksQuery, BookmarksQueryVariables>(BookmarksDocument, options);
        }
export type BookmarksQueryHookResult = ReturnType<typeof useBookmarksQuery>;
export type BookmarksLazyQueryHookResult = ReturnType<typeof useBookmarksLazyQuery>;
export type BookmarksQueryResult = Apollo.QueryResult<BookmarksQuery, BookmarksQueryVariables>;
export const PostsDocument = gql`
    query Posts($limit: Int, $orderBy: [PostOrderByInput!], $offset: Int) {
  posts(
    where: {published: {equals: true}}
    take: $limit
    orderBy: $orderBy
    skip: $offset
  ) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>;

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const TagPostsDocument = gql`
    query tagPosts($tagName: String!, $limit: Float!, $offset: Float) {
  tagPosts(tagName: $tagName, limit: $limit, offset: $offset) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;
export type TagPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TagPostsQuery, TagPostsQueryVariables>, 'query'> & ({ variables: TagPostsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TagPostsComponent = (props: TagPostsComponentProps) => (
      <ApolloReactComponents.Query<TagPostsQuery, TagPostsQueryVariables> query={TagPostsDocument} {...props} />
    );
    

/**
 * __useTagPostsQuery__
 *
 * To run a query within a React component, call `useTagPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagPostsQuery({
 *   variables: {
 *      tagName: // value for 'tagName'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTagPostsQuery(baseOptions: Apollo.QueryHookOptions<TagPostsQuery, TagPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagPostsQuery, TagPostsQueryVariables>(TagPostsDocument, options);
      }
export function useTagPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagPostsQuery, TagPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagPostsQuery, TagPostsQueryVariables>(TagPostsDocument, options);
        }
export type TagPostsQueryHookResult = ReturnType<typeof useTagPostsQuery>;
export type TagPostsLazyQueryHookResult = ReturnType<typeof useTagPostsLazyQuery>;
export type TagPostsQueryResult = Apollo.QueryResult<TagPostsQuery, TagPostsQueryVariables>;
export const ToggleLikeDocument = gql`
    mutation ToggleLike($postId: String!) {
  toggleLike(postId: $postId)
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;
export type ToggleLikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleLikeMutation, ToggleLikeMutationVariables>, 'mutation'>;

    export const ToggleLikeComponent = (props: ToggleLikeComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleLikeMutation, ToggleLikeMutationVariables> mutation={ToggleLikeDocument} {...props} />
    );
    

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const TopArticlesDocument = gql`
    query TopArticles($createdDate: DateTime) {
  posts(
    where: {published: {equals: true}, createdAt: {gt: $createdDate}}
    take: 5
    orderBy: {likesCount: desc}
  ) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;
export type TopArticlesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TopArticlesQuery, TopArticlesQueryVariables>, 'query'>;

    export const TopArticlesComponent = (props: TopArticlesComponentProps) => (
      <ApolloReactComponents.Query<TopArticlesQuery, TopArticlesQueryVariables> query={TopArticlesDocument} {...props} />
    );
    

/**
 * __useTopArticlesQuery__
 *
 * To run a query within a React component, call `useTopArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopArticlesQuery({
 *   variables: {
 *      createdDate: // value for 'createdDate'
 *   },
 * });
 */
export function useTopArticlesQuery(baseOptions?: Apollo.QueryHookOptions<TopArticlesQuery, TopArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopArticlesQuery, TopArticlesQueryVariables>(TopArticlesDocument, options);
      }
export function useTopArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopArticlesQuery, TopArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopArticlesQuery, TopArticlesQueryVariables>(TopArticlesDocument, options);
        }
export type TopArticlesQueryHookResult = ReturnType<typeof useTopArticlesQuery>;
export type TopArticlesLazyQueryHookResult = ReturnType<typeof useTopArticlesLazyQuery>;
export type TopArticlesQueryResult = Apollo.QueryResult<TopArticlesQuery, TopArticlesQueryVariables>;
export const UploadPhotoDocument = gql`
    mutation UploadPhoto($upload: Upload!) {
  upload(file: $upload)
}
    `;
export type UploadPhotoMutationFn = Apollo.MutationFunction<UploadPhotoMutation, UploadPhotoMutationVariables>;
export type UploadPhotoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UploadPhotoMutation, UploadPhotoMutationVariables>, 'mutation'>;

    export const UploadPhotoComponent = (props: UploadPhotoComponentProps) => (
      <ApolloReactComponents.Mutation<UploadPhotoMutation, UploadPhotoMutationVariables> mutation={UploadPhotoDocument} {...props} />
    );
    

/**
 * __useUploadPhotoMutation__
 *
 * To run a mutation, you first call `useUploadPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPhotoMutation, { data, loading, error }] = useUploadPhotoMutation({
 *   variables: {
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useUploadPhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadPhotoMutation, UploadPhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPhotoMutation, UploadPhotoMutationVariables>(UploadPhotoDocument, options);
      }
export type UploadPhotoMutationHookResult = ReturnType<typeof useUploadPhotoMutation>;
export type UploadPhotoMutationResult = Apollo.MutationResult<UploadPhotoMutation>;
export type UploadPhotoMutationOptions = Apollo.BaseMutationOptions<UploadPhotoMutation, UploadPhotoMutationVariables>;
export const AllTimePopularDocument = gql`
    query AllTimePopular {
  findManyTags(orderBy: {followCount: desc}, take: 10) {
    followCount
    ...RegularTag
  }
}
    ${RegularTagFragmentDoc}`;
export type AllTimePopularComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTimePopularQuery, AllTimePopularQueryVariables>, 'query'>;

    export const AllTimePopularComponent = (props: AllTimePopularComponentProps) => (
      <ApolloReactComponents.Query<AllTimePopularQuery, AllTimePopularQueryVariables> query={AllTimePopularDocument} {...props} />
    );
    

/**
 * __useAllTimePopularQuery__
 *
 * To run a query within a React component, call `useAllTimePopularQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTimePopularQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTimePopularQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTimePopularQuery(baseOptions?: Apollo.QueryHookOptions<AllTimePopularQuery, AllTimePopularQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTimePopularQuery, AllTimePopularQueryVariables>(AllTimePopularDocument, options);
      }
export function useAllTimePopularLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTimePopularQuery, AllTimePopularQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTimePopularQuery, AllTimePopularQueryVariables>(AllTimePopularDocument, options);
        }
export type AllTimePopularQueryHookResult = ReturnType<typeof useAllTimePopularQuery>;
export type AllTimePopularLazyQueryHookResult = ReturnType<typeof useAllTimePopularLazyQuery>;
export type AllTimePopularQueryResult = Apollo.QueryResult<AllTimePopularQuery, AllTimePopularQueryVariables>;
export const FindUniqueTagDocument = gql`
    query findUniqueTag($tagName: String!) {
  findUniqueTags(where: {name: $tagName}) {
    ...RegularTag
  }
}
    ${RegularTagFragmentDoc}`;
export type FindUniqueTagComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindUniqueTagQuery, FindUniqueTagQueryVariables>, 'query'> & ({ variables: FindUniqueTagQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindUniqueTagComponent = (props: FindUniqueTagComponentProps) => (
      <ApolloReactComponents.Query<FindUniqueTagQuery, FindUniqueTagQueryVariables> query={FindUniqueTagDocument} {...props} />
    );
    

/**
 * __useFindUniqueTagQuery__
 *
 * To run a query within a React component, call `useFindUniqueTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueTagQuery({
 *   variables: {
 *      tagName: // value for 'tagName'
 *   },
 * });
 */
export function useFindUniqueTagQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueTagQuery, FindUniqueTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueTagQuery, FindUniqueTagQueryVariables>(FindUniqueTagDocument, options);
      }
export function useFindUniqueTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueTagQuery, FindUniqueTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueTagQuery, FindUniqueTagQueryVariables>(FindUniqueTagDocument, options);
        }
export type FindUniqueTagQueryHookResult = ReturnType<typeof useFindUniqueTagQuery>;
export type FindUniqueTagLazyQueryHookResult = ReturnType<typeof useFindUniqueTagLazyQuery>;
export type FindUniqueTagQueryResult = Apollo.QueryResult<FindUniqueTagQuery, FindUniqueTagQueryVariables>;
export const PopularThisWeekDocument = gql`
    query PopularThisWeek {
  findManyTags(orderBy: {postsThisweek: desc}, take: 10) {
    postsThisweek
    ...RegularTag
  }
}
    ${RegularTagFragmentDoc}`;
export type PopularThisWeekComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PopularThisWeekQuery, PopularThisWeekQueryVariables>, 'query'>;

    export const PopularThisWeekComponent = (props: PopularThisWeekComponentProps) => (
      <ApolloReactComponents.Query<PopularThisWeekQuery, PopularThisWeekQueryVariables> query={PopularThisWeekDocument} {...props} />
    );
    

/**
 * __usePopularThisWeekQuery__
 *
 * To run a query within a React component, call `usePopularThisWeekQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularThisWeekQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularThisWeekQuery({
 *   variables: {
 *   },
 * });
 */
export function usePopularThisWeekQuery(baseOptions?: Apollo.QueryHookOptions<PopularThisWeekQuery, PopularThisWeekQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularThisWeekQuery, PopularThisWeekQueryVariables>(PopularThisWeekDocument, options);
      }
export function usePopularThisWeekLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularThisWeekQuery, PopularThisWeekQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularThisWeekQuery, PopularThisWeekQueryVariables>(PopularThisWeekDocument, options);
        }
export type PopularThisWeekQueryHookResult = ReturnType<typeof usePopularThisWeekQuery>;
export type PopularThisWeekLazyQueryHookResult = ReturnType<typeof usePopularThisWeekLazyQuery>;
export type PopularThisWeekQueryResult = Apollo.QueryResult<PopularThisWeekQuery, PopularThisWeekQueryVariables>;
export const RecentlyAddedDocument = gql`
    query RecentlyAdded($sixMonthAgo: DateTime) {
  findManyTags(
    orderBy: {createdAt: desc}
    take: 10
    where: {createdAt: {gte: $sixMonthAgo}}
  ) {
    createdAt
    ...RegularTag
  }
}
    ${RegularTagFragmentDoc}`;
export type RecentlyAddedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecentlyAddedQuery, RecentlyAddedQueryVariables>, 'query'>;

    export const RecentlyAddedComponent = (props: RecentlyAddedComponentProps) => (
      <ApolloReactComponents.Query<RecentlyAddedQuery, RecentlyAddedQueryVariables> query={RecentlyAddedDocument} {...props} />
    );
    

/**
 * __useRecentlyAddedQuery__
 *
 * To run a query within a React component, call `useRecentlyAddedQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentlyAddedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentlyAddedQuery({
 *   variables: {
 *      sixMonthAgo: // value for 'sixMonthAgo'
 *   },
 * });
 */
export function useRecentlyAddedQuery(baseOptions?: Apollo.QueryHookOptions<RecentlyAddedQuery, RecentlyAddedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentlyAddedQuery, RecentlyAddedQueryVariables>(RecentlyAddedDocument, options);
      }
export function useRecentlyAddedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentlyAddedQuery, RecentlyAddedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentlyAddedQuery, RecentlyAddedQueryVariables>(RecentlyAddedDocument, options);
        }
export type RecentlyAddedQueryHookResult = ReturnType<typeof useRecentlyAddedQuery>;
export type RecentlyAddedLazyQueryHookResult = ReturnType<typeof useRecentlyAddedLazyQuery>;
export type RecentlyAddedQueryResult = Apollo.QueryResult<RecentlyAddedQuery, RecentlyAddedQueryVariables>;
export const CreateBookmarkDocument = gql`
    mutation CreateBookmark($userId: String!, $postId: String!) {
  createBookmark(
    data: {user: {connect: {id: $userId}}, post: {connect: {id: $postId}}}
  ) {
    id
    userId
    postId
  }
}
    `;
export type CreateBookmarkMutationFn = Apollo.MutationFunction<CreateBookmarkMutation, CreateBookmarkMutationVariables>;
export type CreateBookmarkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>, 'mutation'>;

    export const CreateBookmarkComponent = (props: CreateBookmarkComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBookmarkMutation, CreateBookmarkMutationVariables> mutation={CreateBookmarkDocument} {...props} />
    );
    

/**
 * __useCreateBookmarkMutation__
 *
 * To run a mutation, you first call `useCreateBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookmarkMutation, { data, loading, error }] = useCreateBookmarkMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCreateBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookmarkMutation, CreateBookmarkMutationVariables>(CreateBookmarkDocument, options);
      }
export type CreateBookmarkMutationHookResult = ReturnType<typeof useCreateBookmarkMutation>;
export type CreateBookmarkMutationResult = Apollo.MutationResult<CreateBookmarkMutation>;
export type CreateBookmarkMutationOptions = Apollo.BaseMutationOptions<CreateBookmarkMutation, CreateBookmarkMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
    token
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $username: String!, $password: String!) {
  signUp(email: $email, username: $username, password: $password) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
    token
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, 'mutation'>;

    export const SignUpComponent = (props: SignUpComponentProps) => (
      <ApolloReactComponents.Mutation<SignUpMutation, SignUpMutationVariables> mutation={SignUpDocument} {...props} />
    );
    

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UnBookmarkDocument = gql`
    mutation UnBookmark($postId: String!) {
  unBookmark(postId: $postId)
}
    `;
export type UnBookmarkMutationFn = Apollo.MutationFunction<UnBookmarkMutation, UnBookmarkMutationVariables>;
export type UnBookmarkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UnBookmarkMutation, UnBookmarkMutationVariables>, 'mutation'>;

    export const UnBookmarkComponent = (props: UnBookmarkComponentProps) => (
      <ApolloReactComponents.Mutation<UnBookmarkMutation, UnBookmarkMutationVariables> mutation={UnBookmarkDocument} {...props} />
    );
    

/**
 * __useUnBookmarkMutation__
 *
 * To run a mutation, you first call `useUnBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unBookmarkMutation, { data, loading, error }] = useUnBookmarkMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useUnBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<UnBookmarkMutation, UnBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnBookmarkMutation, UnBookmarkMutationVariables>(UnBookmarkDocument, options);
      }
export type UnBookmarkMutationHookResult = ReturnType<typeof useUnBookmarkMutation>;
export type UnBookmarkMutationResult = Apollo.MutationResult<UnBookmarkMutation>;
export type UnBookmarkMutationOptions = Apollo.BaseMutationOptions<UnBookmarkMutation, UnBookmarkMutationVariables>;