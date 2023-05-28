import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    lowercase: true
  },
  image:{
    type: String,
  }
});

const User = models.users || model("users", UserSchema)

export default User