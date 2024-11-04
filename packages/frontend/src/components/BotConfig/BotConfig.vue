<script setup lang="ts">
import {
  NButton,
  NForm,
  NInput,
  useMessage,
  NFormItem,
  NInputNumber,
  NCheckbox,
  NSelect,
  NSpin,
} from 'naive-ui'
import { ref } from 'vue'
import useConfigStore from '@/stores/config'
import type { SelectOption } from 'naive-ui'

const configStore = useConfigStore()
const isLoading = ref(false)
const message = useMessage()
const isRestartForSave = ref(true)
const isRestartForReset = ref(true)

const timesList: SelectOption[] = Array.from({ length: 23 }, (_, i) => {
  const val = i + 1

  return {
    value: val, label: val.toString(),
  }
})

async function getConfig() {
  if (isLoading.value) return

  isLoading.value = true

  const res = await configStore.getConfig()

  isLoading.value = false

  if (res.error) message.error(JSON.stringify(res.error))
}

async function updateConfig() {
  if (isLoading.value) return

  isLoading.value = true

  const res = await configStore.updateConfig({ restart: isRestartForSave.value })

  isLoading.value = false

  if (res.error) message.error(JSON.stringify(res.error))
}

async function resetConfig() {
  if (isLoading.value) return

  isLoading.value = true

  const res = await configStore.resetConfig({ restart: isRestartForReset.value })

  isLoading.value = false

  if (res.error) message.error(JSON.stringify(res.error))
  else getConfig()
}

getConfig()
</script>

<template>
  <NSpin
    v-if="!configStore.config"
    size="large"
  />
  <div
    v-else
    class="fd-column gap-xs"
  >
    <NForm
      class="config-form"
      :disabled="isLoading"
      @submit.prevent="updateConfig"
    >
      <NFormItem
        label="ID чата"
        required
      >
        <NInput
          v-model:value="configStore.config.reviewChatId"
        />
      </NFormItem>
      <NFormItem
        label="Аппрувов для мерджа"
        required
      >
        <NInputNumber
          v-model:value="configStore.config.approvesForMerge"
          class="w-100"
        />
      </NFormItem>
      <NFormItem
        label="Время оповещения"
        required
      >
        <NSelect
          v-model:value="configStore.config.schedule.time"
          multiple
          :options="timesList"
        />
      </NFormItem>

      <div class="fd-row ai-center gap-base">
        <NButton
          type="success"
          attr-type="submit"
          :loading="isLoading"
        >
          Сохранить
        </NButton>
        <NCheckbox v-model:checked="isRestartForSave">
          Перезапустить
        </NCheckbox>
      </div>
    </NForm>

    <div class="fd-row ai-center gap-base">
      <NButton
        type="error"
        :loading="isLoading"
        @click="resetConfig"
      >
        Сбросить конфиг
      </NButton>
      <NCheckbox v-model:checked="isRestartForReset">
        Перезапустить
      </NCheckbox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.config-form {
  max-width: 600px;
}
</style>
