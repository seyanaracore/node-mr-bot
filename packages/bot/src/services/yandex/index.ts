import yandexServiceLogger from './logger'
import { api } from '@/api'
import type { MessageBody } from './types'

class YandexBotService {
  static async sendMessage(body: MessageBody) {
    yandexServiceLogger.info('sending message to yandex bot')

    const res = await api.modules.yandex.sendText(body)

    return res.data
  }
}

export default YandexBotService

export * from './types'
