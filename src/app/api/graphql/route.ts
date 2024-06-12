import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs, resolvers } from "@/server";
import Users from "../../../db/datasources";
import UserModel from "../../../model/model";


import mongoose from "mongoose";

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const uri = `mongodb+srv://root:learningmongoDB@learningcluster.nuamtpr.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster`;

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
connectDB();


const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      users: new Users({ modelOrCollection: UserModel }),
    },
  }),
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