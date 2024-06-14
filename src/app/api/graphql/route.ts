import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs, resolvers } from "@/server";
import Users from "../../../db/datasources";

import { MongoClient } from "mongodb";

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const uri = `mongodb+srv://root:learningmongoDB@learningcluster.nuamtpr.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster`;

const client = new MongoClient(uri);

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => {
    await client.connect();
    return {
      req,
      res,
      dataSources: {
        users: new Users({ modelOrCollection: client.db().collection('users') }),
      },
    };
  }
});























// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
//   context: async (req, res) => ({
//     req,
//     res,
//     db: {},
//   }),
// });
export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}