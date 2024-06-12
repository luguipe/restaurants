// User Model Creation
import mongoose  from "mongoose";

const { Schema } = mongoose;


// I don't think we need this at all. we can use ZOD to validate the data
const userSchema = new Schema({
  // Define user fields here matching the GraphQL schema
  first_name: { type: String, required: [true, "All fields are required"] },
  last_name: {
    type: String,
    required: [true, "All fields are required"],
  },
  email: {
    type: String,
    required: [true, "All fields are required"],
  },
  age: {
    type: String,
    required: [true, "All fields are required"],
  },
  active: Boolean,
});

export default mongoose.models.UserModel || mongoose.model("UserModel", userSchema);