<script setup lang="ts">
import { NButton, useMessage } from 'naive-ui'
import { watchEffect } from 'vue'
import useBotRestart from '@/services/api/useBotRestart'
import useSendMessage from '@/services/api/useSendMessage'
import useGetMessage from '@/services/api/useGetMessage'

const message = useMessage()
const { request: restart, isLoading: restartIsLoading, error: restartError } = useBotRestart()
const { request: sendMessage, isLoading: sendMessageIsLoading, error: sendMessageError } = useSendMessage()
const { request: getMessage, isLoading: getMessageIsLoading, error: getMessageError } = useGetMessage()

async function copyMrInfo() {
  const { response } = await getMessage()

  if (response?.message) {
    await navigator.clipboard.writeText(response?.message)
    message.success('Инфа по мрам скопирована в буфер обмена')
  }
}

watchEffect(() => {
  if (restartError.value) message.error(JSON.stringify(restartError.value))
})

watchEffect(() => {
  if (sendMessageError.value) message.error('Ошибка отправки сообщения')
})

watchEffect(() => {
  if (getMessageError.value) message.error('Ошибка получения сообщения')
})
</script>

<template>
  <div class="fd-row gap-base container">
    <NButton
      type="warning"
      :loading="restartIsLoading"
      :disabled="restartIsLoading"
      @click="restart"
    >
      Перезапустить бота
    </NButton>
    <NButton
      type="success"
      :loading="sendMessageIsLoading"
      :disabled="sendMessageIsLoading"
      @click="sendMessage"
    >
      Отправить инфу по мрам
    </NButton>
    <NButton
      type="success"
      :loading="getMessageIsLoading"
      :disabled="getMessageIsLoading"
      @click="copyMrInfo"
    >
      Скопировать инфу по мрам
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-wrap: wrap;
}
</style>
