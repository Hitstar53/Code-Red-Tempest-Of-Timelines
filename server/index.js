import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/dbConnect.js';
import dotenv from 'dotenv';
import indexRouter from "./Router/index.js"
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


app.use("/api", indexRouter);

