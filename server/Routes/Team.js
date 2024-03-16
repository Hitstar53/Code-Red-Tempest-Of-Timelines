import express from "express";
import { createTeam,getTeam,activateTeam,deactivateTeam,updateLevelTime,calculateLevelScore,getTeamScore,getCurrentLevel } from "../Controllers/Team.js";

const router = express.Router();

router.post("/createTeam", createTeam);
router.get("/getTeam/:id", getTeam);
router.put("/activateTeam/:id", activateTeam);
router.put("/deactivateTeam/:id", deactivateTeam);
router.put("/updateLevelTime/:id", updateLevelTime);
router.put("/calculateLevelScore/:id", calculateLevelScore);
router.get("/getTeamScore/:id", getTeamScore);
router.get("/getCurrentLevel/:id", getCurrentLevel);


export default router;
