// #1 Import the gql method from apollo-server-express
const { gql } = require("apollo-server");

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    username: String
    avatar: String
    bio: String
    bookmarks: [Story]
  }
  type Story {
    id: ID!
    url: String!
  }
  type App {
    id: ID!
    users: [User]!
    stories: [Story]!
  }

  type Query {
    app: App!
    users: [User]!
    user(id: ID!): User
    stories: [Story]!
    story(id: ID!): Story
  }
  type Mutation {
    addUser(email: String!, password: String!): String!
    removeUser(id: ID!): String!
    updateUserPassword(id: ID!, password: String!): String!
    addStory(url: String!): Story!
    removeStory(id: ID!): String!
  }
`;

module.exports = typeDefs;
