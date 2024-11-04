import type { CamelCaseKeys } from '@/helpers/toCamelCase'

/**
 * @link https://yandex.ru/dev/messenger/doc/ru/api-requests/message-send-text
 */
type MessageBodyBaseRaw = {
  /** Текст сообщения */
  text: string
  /** ID запроса */
  payload_id?: string
  /** ID сообщения, на которое будет ответ */
  reply_message_id?: number
  /** Нужно ли отключить уведомление */
  disable_notification?: boolean
  /** Является ли сообщение важным */
  important?: boolean
  /** Отключить раскрытие ссылок в сообщении */
  disable_web_page_preview?: boolean
  /** Идентификатор треда (timestamp сообщения) */
  thread_id?: number
  inline_keyboard?: {
    /** Текст на инлайн-кнопке */
    text: string
    /**
     * Данные, которые будут отправлены на сервер при нажатии кнопки
     * @type json
     */
    callback_data?: string
  }[]
}

type MessageBodyPersonalRaw = MessageBodyBaseRaw & {
  /** Логин пользователя */
  login: string
}

type MessageBodyGroupRaw = MessageBodyBaseRaw & {
  /** ID группового чата */
  chat_id: string
}

export type MessageBodyPersonal = CamelCaseKeys<MessageBodyPersonalRaw>
export type MessageBodyGroup = CamelCaseKeys<MessageBodyGroupRaw>

export type MessageBody = MessageBodyPersonal | MessageBodyGroup

type SendTextResponseRaw = {
  /** Флаг успешности выполнения */
  ok: true
  /** ID сообщения в чате */
  message_id: number
}

export type SendTextResponseError = {
  /** Флаг успешности выполнения */
  ok: false
  /** ID сообщения в чате */
  description: string
}

export type SendTextResponse = CamelCaseKeys<SendTextResponseRaw>
