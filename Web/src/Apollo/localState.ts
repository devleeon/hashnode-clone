import { InMemoryCache, makeVar } from "@apollo/client";
import { RegularUserFragment } from "../generated/graphql";

export const isLoggedInVar = makeVar<boolean>(
  localStorage.getItem("token") === null ? false : true
);

export const meVar = makeVar<RegularUserFragment | null>(null);

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
  isLoggedInVar(true);
  window.location.replace("/");
};
export const removeToken = () => {
  localStorage.removeItem("token");
  isLoggedInVar(false);
  window.location.replace("/");
};
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: ["orderBy", "createdAt"],
          merge(existing, incoming, { args }: any) {
            const merged = existing !== undefined ? existing.slice(0) : [];
            if (!args.skip) {
              return incoming;
            }
            let offset = args.skip !== undefined ? args.skip : 0;
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            return merged;
          },
          read(existing) {
            return existing;
          },
        },
        bookmarks: {
          merge(existing, incoming, { args: { skip } }: any) {
            const merged = existing !== undefined ? existing.slice(0) : [];
            if (!skip) {
              return incoming;
            }
            let offset = skip !== undefined ? skip : 0;
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            return merged;
          },
          read(existing) {
            return existing;
          },
        },
        findManyTags: {
          keyArgs: ["orderBy"],
        },
        tagPosts: {
          keyArgs: ["tagName"],
          merge(existing, incoming, { args: { offset } }: any) {
            const merged = existing !== undefined ? existing.slice(0) : [];
            let offsetVar = offset !== undefined ? offset : 0;
            for (let i = 0; i < incoming.length; ++i) {
              merged[offsetVar + i] = incoming[i];
            }
            return merged;
          },
          read(existing) {
            return existing;
          },
        },
      },
    },
  },
});
