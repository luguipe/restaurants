import { Query } from "mongoose";

const restaurants = () => {
  return [];
};

export const resolvers = {
  Query: {
    users: () => {
      return [{ id: "hello user", first_name: "Pedro", age: 40}];
    },
    restaurants,
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
  },
};

