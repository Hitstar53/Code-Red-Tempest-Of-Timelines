import express from "express";
import { createTeam,getTeam,activateTeam,deactivateTeam,updateLevelTime,calculateLevelScore,getTeamScore,getCurrentLevel,getIsLooped,incrementLevel,uploaTeamsBulk,getNoOfTeams,getLeaderboard } from "../Controllers/Team.js";

const router = express.Router();

router.post("/createTeam", createTeam);
router.get("/getTeam/:id", getTeam);
router.put("/activateTeam/:id", activateTeam);
router.put("/deactivateTeam/:id", deactivateTeam);
router.put("/updateLevelTime/:id", updateLevelTime);
router.put("/calculateLevelScore/:id", calculateLevelScore);
router.get("/getTeamScore/:id", getTeamScore);
router.get("/getCurrentLevel/:id", getCurrentLevel);
router.get("/getIsLooped/:id", getIsLooped);
router.put("/incrementLevel/:id", incrementLevel);
router.post("/uploadTeamsBulk", uploaTeamsBulk);
router.get("/getNoOfTeams", getNoOfTeams);
router.get("/getLeaderboard", getLeaderboard);


export default router;
