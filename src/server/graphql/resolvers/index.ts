import { Query } from "mongoose";

import {query as restaurantQuery, mutation as restaurantMutation} from "./restaurant";
import {query as userQuery} from "./user";

export const resolvers = {
  Query: {
    ...restaurantQuery,
    ...userQuery,
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
    ...restaurantMutation,
  },
};

