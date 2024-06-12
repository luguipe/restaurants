export const typeDefs = `#graphql
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
    active: Boolean
  }

  type MenuItem {
    _id: ID!
    name: String!
    price: Float!
    description: String!
    active: Boolean
    itemType: String!
  }

  type Restaurant {
    _id: ID!
    name: String!
    location: String!
    cuisine: String!
    openningTime: String!                     
    closingTime: String!
    active: Boolean
    menu: [MenuItem!]!
  }

  input RestaurantInput {
    name: String
    location: String
    cuisine: String
    openningTime: String
    closingTime: String
    active: Boolean
  }

  input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
  }

  type Query {
    users: [User]
    restaurants (input: RestaurantInput): [Restaurant!]!
    menuItems: [MenuItem!]!
  }
  
  type Mutation {
    createUser(input: NewUserInput!): User
  }
`;