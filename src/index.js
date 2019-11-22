import { ApolloServer } from "apollo-server";
import { schema, photon } from "./schema";

new ApolloServer({ schema, context: photon }).listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#5-using-the-graphql-api`
  )
);
