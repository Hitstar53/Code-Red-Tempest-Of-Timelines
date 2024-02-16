import express from 'express';
import { getTeams,getTeamById,createTeam, updateTeam, deleteTeam, getLeaderboard } from '../Controllers/Team.js';

const router = express.Router();

router.get('/', getTeams);
router.get('/:id', getTeamById);
router.post('/', createTeam);
router.patch('/:id', updateTeam);
router.delete('/:id', deleteTeam);
router.get('/leaderboard', getLeaderboard);


export default router;


