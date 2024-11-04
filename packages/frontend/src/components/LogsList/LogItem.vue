<script setup lang="ts">
import type { LogItem } from '@/services/logsListener/types'

type Props = {
  log: LogItem
}

const props = defineProps<Props>()
</script>

<template>
  <span :class="{'error': props.log.level === 'error'}">
    {{ props.log.formattedMessage }}
  </span>
</template>

<style lang="scss" scoped>
.error {
  color: $colorError
}
</style>
