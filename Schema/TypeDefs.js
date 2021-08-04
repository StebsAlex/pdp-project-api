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
    channels: [Channel!]!
    sportsChannels: [Channel!]!
    newsChannels: [Channel!]!
    basket: [Basket!]
  }

  # Mutation
  type Mutation {
    createNewChannel(name: String!, id: Int!, category: String!): Channel!
    addToBasket(name: String!, id: Int!, category: String!): Basket!
  }
`;

module.exports = { typeDefs };
