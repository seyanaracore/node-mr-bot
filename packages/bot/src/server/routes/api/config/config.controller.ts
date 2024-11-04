import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as ConfigService from './config.service'
import botAppControl from '@/utils/botAppControl'

const configRouter = Router()

configRouter.get('/', async (req, res) => {
  const config = await ConfigService.readConfig()

  res.json(config)
})

configRouter.put('/', async (req, res) => {
  const toUpdate = req.body

  if (Object.keys(toUpdate).length === 0) {
    res.sendStatus(StatusCodes.NO_CONTENT)
  }

  await ConfigService.writeConfig(req.body)

  if (req.query.restart === 'true') {
    botAppControl.restart()
  }

  res.sendStatus(StatusCodes.OK)
})

configRouter.post('/reset', async (req, res) => {
  await ConfigService.resetConfig()

  if (req.query.restart === 'true') {
    botAppControl.restart()
  }

  res.sendStatus(StatusCodes.RESET_CONTENT)
})

export default configRouter
