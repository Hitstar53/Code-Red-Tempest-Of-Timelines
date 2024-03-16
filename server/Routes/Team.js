import express from "express";
import { createTeam,getTeam,activateTeam,deactivateTeam,updateLevelTime,calculateLevelScore } from "../Controllers/Team.js";

const router = express.Router();

router.post("/createTeam", createTeam);
router.get("/getTeam/:id", getTeam);
router.put("/activateTeam/:id", activateTeam);
router.put("/deactivateTeam/:id", deactivateTeam);
router.put("/updateLevelTime/:id", updateLevelTime);
router.put("/calculateLevelScore/:id", calculateLevelScore);


export default router;
