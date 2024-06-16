import { Query } from "mongoose";

import {query as restaurantQuery, mutation as restaurantMutation} from "./restaurant";
import {query as userQuery, mutation as userMutation} from "./user";
import { query as shoppingCartQuery, mutation as shoppingCartMutation } from "./shoppingCart";

export const resolvers = {
  Query: {
    ...restaurantQuery,
    ...userQuery,
    ...shoppingCartQuery,
  },
  Mutation: {
    ...userMutation,
    ...restaurantMutation,
    ...shoppingCartMutation,
  },
};

