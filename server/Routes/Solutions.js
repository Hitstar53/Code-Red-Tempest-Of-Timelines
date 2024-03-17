import express from "express";
import { Level1,Level2,Level3_1,Level4a,Level5 } from "../Controllers/Solutions.js";

const router = express.Router();

router.post("/level1", Level1);
router.post("/level2", Level2);
router.post("/level3_1", Level3_1);
router.post("/level4a", Level4a);
router.post("/level5", Level5);

export default router;
