<script lang="ts" setup>
import {
  ruRU,
  dateRuRU,
  NConfigProvider,
  NGlobalStyle,
} from 'naive-ui'
import { defineAsyncComponent } from 'vue'
import { lightGlobalTheme } from '@/themes'

const NThemeEditor = defineAsyncComponent(() => import('naive-ui/es/theme-editor/src/ThemeEditor'))
const isDevelopment = APP_MODE === 'development'
</script>

<template>
  <NConfigProvider
    :locale="ruRU"
    :date-locale="dateRuRU"
    :theme-overrides="lightGlobalTheme"
  >
    <NGlobalStyle />
    <NThemeEditor v-if="isDevelopment">
      <slot />
    </NThemeEditor>
    <slot v-else />
  </NConfigProvider>
</template>
