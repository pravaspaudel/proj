import express from "express";
import "dotenv/config";
import connectdb from "./db/connectdb.js";
import router from "./routes/user.route.js";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/auth", router);

const PORT = process.env.PORT;

//socket things

const server = http.createServer(app);

//initialize socket io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("client - connected", socket.id);
});

const start = async () => {
  try {
    await connectdb();
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
start();
