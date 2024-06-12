// MongoDB Data Source for Users
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface UserDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  interests: [string];
}

export default class Users extends MongoDataSource<UserDocument> {
  // Function to fetch all users
  async getAllUsers() {
      return this.collection.find().toArray();
  }

  // Function to create a new user
  async createUser(input) {
    try {
      return await this.collection.insertOne(input);
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
}