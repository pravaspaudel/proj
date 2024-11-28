import express from "express";
import "dotenv/config";
import connectdb from "./db/connectdb.js";
import router from "./routes/user.route.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/auth", router);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
start();
