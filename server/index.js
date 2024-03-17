import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Helpers/connectDB.js";
import indexRouter from "./Routes/index.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(app);


app.use("/api", indexRouter);

