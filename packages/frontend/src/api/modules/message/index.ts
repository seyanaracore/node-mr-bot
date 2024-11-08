import type { ApiClient } from '@/api/types'
import type { GetMessageResponse } from '@/api/modules/message/types'

function getMessageModule(apiClient: ApiClient) {
  return {
    send() {
      return apiClient.post<void>('/message')
    },
    get() {
      return apiClient.get<GetMessageResponse>('/message')
    },
  }
}

export default getMessageModule
