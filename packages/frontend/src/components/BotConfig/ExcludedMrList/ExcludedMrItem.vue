<script lang="ts" setup>
import { NInputNumber, NSelect, NFormItem } from 'naive-ui'
import { projectOptions } from './consts'

const props = defineProps<{ rulePaths: { iid: string, projectId: string } }>()
const iidModel = defineModel<number>('iid', { default: undefined })
const projectIdModel = defineModel<number>('projectId', { default: undefined })
</script>

<template>
  <div class="gap-md item-container">
    <NFormItem
      :show-label="false"
      class="w-100"
      :rule="{
        required: true,
        message: 'iid is required'
      }"
      :path="props.rulePaths.iid"
    >
      <NInputNumber
        v-model:value="iidModel"
        :show-button="false"
        class="w-100"
        placeholder="Введите айди мра"
      />
    </NFormItem>
    <NFormItem
      :show-label="false"
      :rule="{
        required: true,
        message: 'projectId is required'
      }"
      class="w-100"
      :path="props.rulePaths.projectId"
    >
      <NSelect
        v-model:value="projectIdModel"
        class="w-100"
        placeholder="Выберите проект"
        :options="projectOptions"
      />
    </NFormItem>
  </div>
</template>

<style lang="scss" scoped>
.item-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include media-down(md) {
    grid-template-columns: 1fr;
  }
}
</style>
