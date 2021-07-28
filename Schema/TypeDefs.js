const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Channel {
    name: String!
    id: Int!
    category: String!
  }

  type Basket {
    name: String!
    id: Int!
    category: String!
  }

  # Queries
  type Query {
    getAllChannel: [Channel!]!
    getSportsChannel: [Channel!]!
    getNewsChannel: [Channel!]!
    getBasket: [Basket!]
  }

  # Mutation
  type Mutation {
    createNewChannel(name: String!, id: Int!, category: String!): Channel!
    addToBasket(name: String!, id: Int!, category: String!): Basket!
  }
`;

module.exports = { typeDefs };
