import { defineStore } from 'pinia'
import { api } from '@/api'
import { handleServerError, handleServerResponse } from '@/utils/server'
import type { ConfigStoreState, ResetConfigPayload, UpdateConfigPayload } from '@/stores/config/types'

const useConfigStore = defineStore('botConfig', {
  state: (): ConfigStoreState => ({
    config: null,
  }),
  actions: {
    async getConfig() {
      try {
        const { data } = await api.modules.config.get()

        this.config = data
        return handleServerResponse(data)
      } catch (e) {
        return handleServerError(e as never)
      }
    },
    async updateConfig(params?: UpdateConfigPayload['params']) {
      try {
        const { data } = await api.modules.config.update({ data: this.config!, params })

        return handleServerResponse(data)
      } catch (e) {
        return handleServerError(e as never)
      }
    },
    async resetConfig(params?: ResetConfigPayload['params']) {
      try {
        const { data } = await api.modules.config.reset({ params })

        return handleServerResponse(data)
      } catch (e) {
        return handleServerError(e as never)
      }
    },
  },
})

export default useConfigStore
