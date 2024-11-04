import type { ApiClient } from '@/api/types'
import type { GetConfigResponse, ResetConfigPayload, UpdateConfigPayload } from './types'

function getConfigModule(apiClient: ApiClient) {
  return {
    get() {
      return apiClient.get<GetConfigResponse>('/config')
    },
    update(payload: UpdateConfigPayload) {
      return apiClient.put<void>('/config', payload.data, {
        params: {
          restart: true,
          ...payload?.params,
        },
      })
    },
    reset(payload?: ResetConfigPayload) {
      return apiClient.post<void>('/config/reset', null, {
        params: {
          restart: true,
          ...payload?.params,
        },
      })
    },
  }
}

export default getConfigModule

export * as ConfigModule from './types'
