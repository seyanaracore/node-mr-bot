import toSnakeCase from '@/helpers/toSnakeCase'
import toCamelCase from '@/helpers/toCamelCase'
import type { MessageBody, SendTextResponse } from './types'
import type { ApiClient } from '@/api/types'

// https://yandex.ru/dev/messenger/doc/ru/api-requests
function getYandexModule(api: ApiClient) {
  return {
    sendText(body: MessageBody) {
      return api
        .post<SendTextResponse>('v1/messages/sendText', {
        body: toSnakeCase(body),
      })
        .then((res) => {
          res.data = toCamelCase(res.data)
          return res
        })
    },
  }
}

export default getYandexModule

export * as YandexModule from './types'
