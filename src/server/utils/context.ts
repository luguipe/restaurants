import  { ShoppingCart, Users,  MenuItem } from "@/db/model";

import { MongoClient } from 'mongodb';

export type Context = {
    req: any;
    res: any;
    db: {
        users: Users;
        shoppingCart: ShoppingCart;
        menuItem: MenuItem;
    };
    userId?: string;
}

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const uri = `mongodb+srv://root:learningmongoDB@learningcluster.nuamtpr.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster`;

const client = new MongoClient(uri);


export const createContext = async (req: any, res: any): Promise<Context> => {
    await client.connect();
    return {
      req,
      res,
      db: {
        users: Users.createCollection(client),
        shoppingCart: ShoppingCart.createCollection(client),
        menuItem: MenuItem.createCollection(client)
      },
      userId: '60b3f'
    }
}