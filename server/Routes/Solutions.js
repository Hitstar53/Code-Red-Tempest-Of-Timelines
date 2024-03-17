import express from "express";
import { Level1,Level2,Level3_1,Level4a,Level5,Level8_1,Level7,setLooped } from "../Controllers/Solutions.js";

const router = express.Router();

router.post("/level1", Level1);
router.post("/level2", Level2);
router.post("/level3_1", Level3_1);
router.post("/level4a", Level4a);
router.post("/level5", Level5);
router.post("/level8_1", Level8_1);
router.post("/level7", Level7);
router.post("/setlooped", setLooped);


export default router;
