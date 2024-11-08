import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import mrBot from '@/bot'

const messageRouter = Router()

messageRouter.post('/', async (req, res) => {
  mrBot.sendMrInfo()

  mrBot.once('sendMrInfo', (eventId, { err }) => {
    if (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
      res.end()
      return
    }

    res.sendStatus(StatusCodes.OK)
    res.end()
  })
})

messageRouter.get('/', async (req, res) => {
  mrBot.getMrList()

  mrBot.once('getMrList', (eventId, { err }) => {
    if (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
      res.end()

      return
    }

    const message = mrBot.getMessage(mrBot.targetMrList)

    res.json({ message })
    res.end()
  })
})

export default messageRouter
