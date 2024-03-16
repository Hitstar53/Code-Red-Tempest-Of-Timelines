import express from "express";
import { verifyLevel } from "../Controllers/Levels.js";

const router = express.Router();


router.post("/verifyLevel", verifyLevel);


export default router;



