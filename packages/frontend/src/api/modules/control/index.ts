import type { ApiClient } from '@/api/types'

function getControlModule(apiClient: ApiClient) {
  return {
    restart() {
      return apiClient.post<void>('/restart')
    },
  }
}

export default getControlModule
