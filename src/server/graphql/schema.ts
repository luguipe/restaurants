export const typeDefs = `#graphql
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    dob: String!
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

  input UserSignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    dob: String!
    password: String!
  }

  input userSignInInput {
    email: String!
    password: String!
  }

  type Query {
    users: [User]
    restaurants (input: RestaurantInput): [Restaurant!]!
    menuItems: [MenuItem!]!
  }
  
  type Mutation {
    userSignUp(input: UserSignUpInput!): User
    userSignIn(input: userSignInInput!): User

  }
`;