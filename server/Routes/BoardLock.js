import express from "express";
import { getBoardLock,setBoardLock } from "../Controllers/BoardLock.js";


const router = express.Router();

router.get("/", getBoardLock);
router.post("/", setBoardLock);


export default router;

