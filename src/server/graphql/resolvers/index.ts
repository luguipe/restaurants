import { Query } from "mongoose";

import {query as restaurantQuery, mutation as restaurantMutation} from "./restaurant";
import {query as userQuery, mutation as userMutation} from "./user";
import { query as shoppingCartQuery, mutation as shoppingCartMutation } from "./shoppingCart";
import { query as menuItemQuery, mutation as menuItemMutation } from "./menuItem";


export const resolvers = {
  Query: {
    ...restaurantQuery,
    ...userQuery,
    ...shoppingCartQuery,
    ...menuItemQuery,
  },
  Mutation: {
    ...userMutation,
    ...restaurantMutation,
    ...shoppingCartMutation,  
    ...menuItemMutation,
  },
};

