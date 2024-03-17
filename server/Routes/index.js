import express from 'express'
import levelRouter from './Levels.js'
import teamRouter from './Team.js'
import solutionRouter from './Solutions.js'
import boardLockRouter from './BoardLock.js'


const router = express.Router()

router.use('/levels', levelRouter)
router.use('/team', teamRouter)
router.use('/solutions', solutionRouter)
router.use('/boardlock', boardLockRouter)


export default router


