import express from "express";
import { Level1 } from "../Controllers/Solutions.js";

const router = express.Router();

router.post("/level1", Level1);


export default router;
