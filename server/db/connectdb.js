import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URL;

const connectdb = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log(`database connect successfuly`);
  } catch (error) {
    console.log(`error while connecting to db: ${error}`);
  }
};

export default connectdb;
