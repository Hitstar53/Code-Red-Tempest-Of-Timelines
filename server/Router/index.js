import express from 'express';
import teamRouter from './Team.js';

const router = express.Router();

router.use('/team', teamRouter);


export default router;