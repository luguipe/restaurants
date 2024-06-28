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
    quantity: Int!
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

  type ShoppingCart {
    _id: ID!
    userId: String!
    items: [MenuItem!]!
    total: Float!
    comment: String!
    status: String!
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

  input ShoppingCartUpdateInput {
    id:String
    menuItemId: String!
    quantity: Int!
  }

  type Query {
    users: [User]
    restaurants (input: RestaurantInput): [Restaurant!]!
    menuItem: [MenuItem!]!
    shoppingCart(id: String!): ShoppingCart
  }
  
  type Mutation {
    userSignUp(input: UserSignUpInput!): User
    userSignIn(input: userSignInInput!): User
    userSignOut: Boolean
    restaurantList: [Restaurant!]!
    restaurantCreate(input: RestaurantInput!): Restaurant
    restaurantUpdate(input: RestaurantInput!): Restaurant
    shoppingCartUpdate(input:ShoppingCartUpdateInput!): ShoppingCart
    menuItem: [MenuItem!]!
  
  }
`;