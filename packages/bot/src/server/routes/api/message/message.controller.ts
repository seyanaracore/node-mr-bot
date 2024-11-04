import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import mrBot from '@/bot'

const messageRouter = Router()

messageRouter.post('/', async (req, res) => {
  mrBot.sendMrInfo()

  res.sendStatus(StatusCodes.OK)
})

export default messageRouter
