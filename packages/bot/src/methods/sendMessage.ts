import { v4 as uuidv4 } from 'uuid'
import { AxiosError } from 'axios'
import YandexBotService from '@/services/yandex'
import { handleServerError, handleServerResponse } from '@/utils/server'
import type { BotMessageBody } from '@/types/botMessageBody'
import type IBot from '@/models/bot'

const TIMEOUT_ERRORS = [AxiosError.ECONNABORTED, AxiosError.ETIMEDOUT]

async function sendMessage(this: IBot, message: BotMessageBody) {
  const eventId = uuidv4()

  this.emit('messageSend', eventId, message)

  try {
    const res = await YandexBotService.sendMessage({
      ...message,
      chatId: this.config.reviewChatId,
    })

    this.emit('messageSentSuccess', eventId, message)

    return handleServerResponse(res)
  } catch (e) {
    const origError = e as Error
    const res = handleServerError(origError)

    if (res.error.data) {
      this.emit('messageSentError', eventId, JSON.stringify(res.error.data))
    } else if (TIMEOUT_ERRORS.includes(res.error.code)) {
      this.emit('messageSentError', eventId, 'timeout')
    } else {
      this.emit('messageSentError', eventId, origError.stack ?? origError.message)
    }

    return res
  }
}

export default sendMessage
