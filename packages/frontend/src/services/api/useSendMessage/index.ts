import { ref } from 'vue'
import { api } from '@/api'
import { handleServerResponse, handleServerError } from '@/utils/server'
import type { ServerError } from './types'

function useBotRestart() {
  const isLoading = ref(false)
  const error = ref<ServerError | null>(null)

  async function request() {
    isLoading.value = true
    error.value = null

    try {
      const data = await api.modules.message.send()

      return handleServerResponse(data)
    } catch (e) {
      const res = handleServerError(e as never)

      error.value = res.error

      return res
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    request,
  }
}

export default useBotRestart
