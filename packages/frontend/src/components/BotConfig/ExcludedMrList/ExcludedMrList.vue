<script lang="ts" setup>
import { NButton } from 'naive-ui'
import ExcludedMrItem from './ExcludedMrItem.vue'
import useConfigStore from '@/stores/config'
import SkalaConfirm from '@/components/common/SkalaConfirm'

const configStore = useConfigStore()
</script>

<template>
  <div v-if="configStore.config">
    <p
      v-if="!configStore.config.excludedMrs.length"
      class="empty-msg"
    >
      Список пуст
    </p>
    <div
      v-else
      class="fd-column gap-xs"
    >
      <div
        v-for="(item, idx) in configStore.config.excludedMrs"
        :key="idx"
        class="fd-row gap-base w-100"
      >
        <ExcludedMrItem
          v-model:iid="item.iid"
          v-model:project-id="item.projectId"
          :rule-paths="{
            iid: `excludedMrs[${idx}].iid`,
            projectId: `excludedMrs[${idx}].projectId`,
          }"
          class="w-100"
        />
        <NButton
          color="red"
          @click="configStore.removeExcludeItem(item)"
        >
          X
        </NButton>
      </div>
    </div>

    <div class="fd-row gap-xs jc-sb">
      <NButton
        type="warning"
        @click="configStore.addExcludedItem"
      >
        Добавить
      </NButton>

      <SkalaConfirm @positive-click="configStore.clearExcludedItems">
        <template #trigger>
          <NButton
            type="error"
          >
            Очистить
          </NButton>
        </template>
      </SkalaConfirm>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty-msg {
  margin-bottom: $marginBase;
  text-align: center;
}
</style>
