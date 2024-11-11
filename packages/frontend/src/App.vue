<script setup lang="ts">
import { NMessageProvider, NDivider } from 'naive-ui'
import BotConfig from './components/BotConfig'
import ControlButtons from './components/BotActions'
import VConfigProvider from './components/VConfigProvider'
import LogsList from './components/LogsList/LogsList.vue'
</script>

<template>
  <VConfigProvider>
    <NMessageProvider :duration="5000">
      <main
        class="layout layout-default"
      >
        <div
          id="layout-content"
          class="layout-content"
        >
          <div class="layout-content-wrapper">
            <div class="layout-content-container">
              <div class="fd-column gap-lg">
                <ControlButtons />
                <NDivider class="divider" />
                <BotConfig />
                <NDivider class="divider" />
                <LogsList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </NMessageProvider>
  </VConfigProvider>
</template>

<style lang="scss">
@use '@/assets/scss/base' as *;

.layout {
  min-height: 100dvh;
  background-color: $colorBgLayout;
}

.layout-content {
  --layout-content-x-padding: 120px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @include media-down(xl) {
    --layout-content-x-padding: #{$marginXXL};
  }

  @include media-down(lg) {
    --layout-content-x-padding: #{$marginXL};
  }

  @include media-down(md) {
    --layout-content-x-padding: #{$marginMD};
  }
}

.layout-content-wrapper {
  --layout-content-y-margin: #{$marginBase};

  display: flex;
  justify-content: center;

  width: 100%;
  margin: var(--layout-content-y-margin) auto;
  padding: 0 var(--layout-content-x-padding);
}

.layout-content-container {
  width: 100%;
  max-width: 1200px;

  & > .layout-loader {
    padding: 20dvh 0;
  }
}
</style>
