<script setup lang="ts">
import { computed } from 'vue'
import { NButton, NDivider } from 'naive-ui'
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import { v4 as uuidv4 } from 'uuid'
import LogItem from './LogItem.vue'
import useLogsListener from '@/services/logsListener'

const { messages } = useLogsListener()

const totalMessages = computed(() => messages.value.flatMap(({ data }, group) => data.logs.map((log) => {
  return {
    ...log,
    id: uuidv4(),
    group,
  }
})).reverse())
</script>

<template>
  <div class="fd-column gap-md">
    <div>
      <NButton
        type="error"
        @click="messages = []"
      >
        Очистить
      </NButton>
    </div>

    <DynamicScroller
      :items="totalMessages"
      :min-item-size="22"
      item-resizable
      class="virtual-list"
    >
      <template #default="{ item: logItem, index, active }">
        <DynamicScrollerItem
          :item="logItem"
          :active="active"
          :size-dependencies="[
            logItem.formattedMessage,
          ]"
          :data-index="index"
        >
          <div>
            <LogItem :log="logItem" />
            <NDivider
              v-if="totalMessages[index-1]?.group !== logItem.group"
              class="divider"
            />
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<style lang="scss" scoped>
.divider {
  margin: $marginXXS;
  padding: 0;
  background: $colorBorder;
}

.virtual-list {
  height: 500px;
}
</style>
