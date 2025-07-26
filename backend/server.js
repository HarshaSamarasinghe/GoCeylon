import express from "express";
import cors from "cors";
import { log } from "console";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";

dotenv.config();  // Activate .env

const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use("/images", express.static("./Uploads"));

server.use("/api/user", userRoute);

connectDB();

server.get("/", (req, res) => {
  res.send("API WORKING");
});

server.listen(PORT, () => log(`Server is running on http://localhost:${PORT}`));
