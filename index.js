const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const expressPlayground =
  require("graphql-playground-middleware-express").default;

const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

const PORT = 3001;

const startServer = async () => {
  const isDev = process.env.NODE_ENV !== "production";
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });
  if (isDev) app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));

  console.log(`Server running on port ${PORT} 🚀`);
  if (isDev) console.log(`GraphQL Playground on http://localhost:${PORT}/playground`);
};

startServer();
