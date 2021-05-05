import { InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar<boolean>(
  localStorage.getItem("token") === null ? false : true
);
export const meVar = makeVar("");

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});

export const resolvers = {
  Mutation: {
    logUserIn: async (_: any, { token }: any) => {
      localStorage.setItem("token", token);
      isLoggedInVar(true);
      return null;
    },
    logUserOut: () => {
      localStorage.removeItem("token");
      isLoggedInVar(false);
      return null;
    },
  },
};
