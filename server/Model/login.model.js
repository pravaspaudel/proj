import mongoose from "mongoose";

const loginUserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

const usermodel = mongoose.model("LoggedUser", loginUserSchema);

export default usermodel;
