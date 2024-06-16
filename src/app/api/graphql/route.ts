import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs, resolvers } from "@/server";

import { createContext } from "@/server/utils";


const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: createContext
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