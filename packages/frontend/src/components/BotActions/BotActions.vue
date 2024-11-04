<script setup lang="ts">
import { NButton, useMessage } from 'naive-ui'
import { watchEffect } from 'vue'
import useBotRestart from '@/services/api/useBotRestart'
import useSendMessage from '@/services/api/useSendMessage'

const message = useMessage()
const { request: restart, isLoading: restartIsLoading, error: restartError } = useBotRestart()
const { request: sendMessage, isLoading: sendMessageIsLoading, error: sendMessageError } = useSendMessage()

watchEffect(() => {
  if (restartError.value) message.error(JSON.stringify(restartError.value))
})

watchEffect(() => {
  if (sendMessageError.value) message.error(JSON.stringify(sendMessageError.value))
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
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-wrap: wrap;
}
</style>
