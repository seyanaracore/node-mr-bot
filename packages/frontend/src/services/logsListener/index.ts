import { ref } from 'vue'
import type { ClientMessage } from './types'

const MESSAGES_HISTORY_SIZE = 100
const messages = ref<ClientMessage[]>([])

function useLogsListener() {
  const listener = new EventSource('/api/logs')

  listener.addEventListener('message', (event) => {
    if (!event.data) return

    const parsedMessage = JSON.parse(event.data) as ClientMessage

    if (messages.value.length >= MESSAGES_HISTORY_SIZE) {
      messages.value.shift()
    }

    messages.value.push(parsedMessage)
  })

  function close() {
    listener.close()
  }

  return {
    messages,
    close,
  }
}

export default useLogsListener
