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
import ExcludedMrList from './ExcludedMrList'
import useConfigStore from '@/stores/config'
import useValidateForm from '@/composables/useValidateForm'
import type { BotConfig } from '@/stores/config'
import type { SelectOption } from 'naive-ui'
import type { FormRulesByState } from '@/types/utils'

const configStore = useConfigStore()
const isLoading = ref(false)
const message = useMessage()
const isRestartForSave = ref(true)
const isRestartForReset = ref(true)
const formRef = ref()
const validateForm = useValidateForm(formRef)

const formRules: FormRulesByState<BotConfig> = {
  reviewChatId: {
    required: true,
  },
  approvesForMerge: {
    required: true,
  },
  schedule: {
    time: {
      type: 'array',
      required: false,
    },
  },
  excludedMrs: {
    type: 'array',
    required: false,
  },
}

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
  const isValid = await validateForm()

  if (isLoading.value || !isValid) return

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
      ref="formRef"
      :rules="formRules"
      class="config-form"
      :disabled="isLoading"
      :model="configStore.config"
      @submit.prevent="updateConfig"
    >
      <NFormItem
        label="ID чата"
        path="reviewChatId"
      >
        <NInput
          v-model:value="configStore.config.reviewChatId"
        />
      </NFormItem>
      <NFormItem
        label="Аппрувов для мерджа"
        path="approvesForMerge"
      >
        <NInputNumber
          v-model:value="configStore.config.approvesForMerge"
          class="w-100"
        />
      </NFormItem>
      <NFormItem
        label="Время оповещения"
        path="schedule.time"
      >
        <NSelect
          v-model:value="configStore.config.schedule.time"
          multiple
          :options="timesList"
        />
      </NFormItem>

      <div class="excluded-mr-list-container">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label>Исключить мры</label>
        <ExcludedMrList />
      </div>

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

.excluded-mr-list-container {
  display: flex;
  flex-direction: column;
  gap: $marginXS;
  margin-bottom: $marginLG;
}
</style>
