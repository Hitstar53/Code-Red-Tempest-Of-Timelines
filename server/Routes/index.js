import express from 'express'
import levelRouter from './Levels.js'
import teamRouter from './Team.js'


const router = express.Router()

router.use('/levels', levelRouter)
router.use('/team', teamRouter)


export default router


