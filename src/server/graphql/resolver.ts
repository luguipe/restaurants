export const resolvers = {
  Query: {
    users: () => {
      return [{ id: "hello user", first_name: "Pedro", age: 40}];
    },
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
  },
};

