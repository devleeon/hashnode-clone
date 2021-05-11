import { InMemoryCache, makeVar } from "@apollo/client";
import { useHistory } from "react-router";
import { RegularUserFragment, useMeQuery, User } from "../generated/graphql";

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
          merge(existing, incoming) {
            console.log("incoming: ", incoming);
            console.log("existing: ", existing);
            const merged = existing !== undefined ? existing.slice(0) : [];
            let offset = merged.length;
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
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
