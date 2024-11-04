import type { ApiClient } from '@/api/types'

function getMessageModule(apiClient: ApiClient) {
  return {
    send() {
      return apiClient.post<void>('/message')
    },
  }
}

export default getMessageModule
