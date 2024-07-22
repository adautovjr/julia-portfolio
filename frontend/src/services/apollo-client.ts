import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://127.0.0.1/strapi/graphql",
  cache: new InMemoryCache(),
});