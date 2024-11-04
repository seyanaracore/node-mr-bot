import getLogger from '@/logger'
import {
  baseLogger,
  getFullLog,
} from '@/logger/baseLogger'
import type { Client, LogItem, TransformableInfo } from './types'

const logsListenerLogger = getLogger({ label: '[logs-listener]' })

class LogsListener {
  clients: Client[] = []

  logsHistorySize = 100

  logsHistory: LogItem[] = []

  addClient(client: Client, lastLogs = 15) {
    logsListenerLogger.info(`Client added, id: ${client.id}`)

    const lastLogsToSend = this.logsHistory.slice(-lastLogs)

    if (lastLogsToSend.length) {
      client.onNewLog(lastLogsToSend)
    }

    this.clients.push(client)
  }

  removeClient(client: Client) {
    client.disconnect()

    this.clients = this.clients.filter((el) => el !== client)

    logsListenerLogger.info(`Client removed, id: ${client.id}`)
  }

  removeAllClients() {
    this.clients.forEach((client) => client.disconnect())

    this.clients = []
    logsListenerLogger.info('All clients removed')
  }

  onNewLog(log: LogItem) {
    if (this.logsHistory.length >= this.logsHistorySize) {
      this.logsHistory.shift()
    }

    this.logsHistory.push(log)

    this.clients.forEach((client) => client.onNewLog(log))
  }

  private onData(log: TransformableInfo) {
    const fullLog = getFullLog(log)

    this.onNewLog(fullLog)
  }

  constructor() {
    baseLogger.on('data', (data: TransformableInfo) => this.onData(data))
  }
}

export default LogsListener
