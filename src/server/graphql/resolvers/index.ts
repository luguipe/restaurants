import { Query } from "mongoose";

import {query as restaurantQuery, mutation as restaurantMutation} from "./restaurant";
import {query as userQuery, mutation as userMutation} from "./user";

export const resolvers = {
  Query: {
    ...restaurantQuery,
    ...userQuery,
  },
  Mutation: {
    ...userMutation,
    ...restaurantMutation,
  },
};

