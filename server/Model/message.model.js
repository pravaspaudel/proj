import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sendat: {
    type: Date,
    default: Date.now(),
  },
});

const message = mongoose.model("Message", messageSchema);

export default message;
