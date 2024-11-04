import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import configRouter from './config'
import messageRouter from './message'
import logsRouter from './logs'
import botAppControl from '@/utils/botAppControl'

const apiRouter = Router()

apiRouter.use('/config', configRouter)
apiRouter.use('/message', messageRouter)

apiRouter.post('/restart', (req, res) => {
  botAppControl.restart()

  res.sendStatus(StatusCodes.OK)
})

apiRouter.use('/logs', logsRouter)

export default apiRouter
