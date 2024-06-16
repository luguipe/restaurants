// MongoDB Data Source for Users
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface UserDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  salt: string;
  active: boolean;
  interests: [string];
}

interface RestaurantDocument {
  _id: ObjectId;
  restaurantName: string;
  phone: string;
  location: string;
  openningTime: string;
  closingTime: string;
  cuisine: string;
  active: boolean;

}


export class Users extends MongoDataSource<UserDocument> {
  // Function to fetch all users
  async getAllUsers() {
      return this.collection.find().toArray();
  }
  
  async getUserByEmail(email: string) {
    return this.collection.findOne({ email });
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