import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { StatusCodes } from 'http-status-codes'
import LogsListener from './logs.service'
import type { Response } from 'express'
import type { LogItem, ClientMessage } from '@packages/common/types/logsListener'

const logsRouter = Router()
const logsListener = new LogsListener()

class Client {
  id: string

  private res: Response

  onNewLog(log: LogItem | LogItem[]): void {
    const message: ClientMessage = {
      id: uuidv4(),
      data: {
        logs: Array.isArray(log) ? log : [log],
      },
    }

    const sendData = `data: ${JSON.stringify(message)}\n\n`

    this.res.write(sendData)
  }

  disconnect() {
    this.res.end()
  }

  constructor(res: Response) {
    this.id = uuidv4()
    this.res = res
  }
}

logsRouter.get('/', async (req, res) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
  }

  const lastLogs = req.query.lastLogs ? +req.query.lastLogs : undefined

  res.writeHead(StatusCodes.OK, headers)

  const client = new Client(res)

  logsListener.addClient(client, lastLogs)

  req.on('close', () => {
    logsListener.removeClient(client)
  })
})

export default logsRouter
