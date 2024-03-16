import express from "express";
import { createTeam,getTeam,activateTeam,deactivateTeam } from "../Controllers/Team.js";

const router = express.Router();

router.post("/createTeam", createTeam);
router.get("/getTeam/:id", getTeam);
router.put("/activateTeam/:id", activateTeam);
router.put("/deactivateTeam/:id", deactivateTeam);


export default router;
