import express from 'express'
import levelRouter from './Levels.js'
import teamRouter from './Team.js'
import solutionRouter from './Solutions.js'


const router = express.Router()

router.use('/levels', levelRouter)
router.use('/team', teamRouter)
router.use('/solutions', solutionRouter)


export default router


