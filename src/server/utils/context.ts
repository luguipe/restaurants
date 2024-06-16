import  { Users } from "@/db/model";

import { MongoClient } from 'mongodb';

export type Context = {
    req: any;
    res: any;
    db: {
        users: Users;
    }
}

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const uri = `mongodb+srv://root:learningmongoDB@learningcluster.nuamtpr.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster`;

const client = new MongoClient(uri);


export const createContext = async (req: any, res: any) => {
    
    await client.connect();
    return {
      req,
      res,
      db: {
        users: new Users({ modelOrCollection: client.db().collection('users') }),
      },
    }
}