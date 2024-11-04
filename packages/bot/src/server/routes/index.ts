import path from 'path'
import { Router } from 'express'
import { FRONTEND_BUILD_PATH } from '../consts'
import apiRouter from './api'

const router = Router()

router.use('/api', apiRouter)

router.get('*', (req, res) => {
  res.sendFile(path.join(FRONTEND_BUILD_PATH, 'index.html'))
})

export default router
