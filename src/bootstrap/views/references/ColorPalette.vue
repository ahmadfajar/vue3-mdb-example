<template>
  <div class="docs-color-table">
    <div v-if="palette === 'bootstrap'" class="row">
      <div v-for="(value, key) in themeColors" :key="key" class="col-md-6 col-xl-4 mb-4">
        <div :class="useBootstrapColorClasses(key)" class="d-flex p-3 md-shadow-1">
          <span class="flex-grow-1">{{ key }}</span>
          <span class="opacity-50 small">{{ value.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'grays'" class="row">
      <div class="col-md-6 col-xl-4">
        <div
          v-for="(value, key) in grayColors"
          :class="useGrayColorClasses(key)"
          :key="key"
          class="p-3 d-flex"
        >
          <span class="flex-grow-1">grey-{{ key }}</span>
          <span class="opacity-50 small">{{ value.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'fullColor'" class="row">
      <div v-for="(items, key) in fullColors" :key="key" class="col-md-6 col-xl-4 mb-4">
        <div
          v-for="(value, prop) in items"
          :class="useFullColorClasses(key, prop)"
          :key="key + prop"
          class="p-3 d-flex"
        >
          <span class="flex-grow-1">{{ useFullColorName(key, prop) }}</span>
          <span class="opacity-50 small">{{ (value as string).toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'material'" class="row">
      <div v-for="(item, key) in materialColors" :key="key" class="mb-4 col-md-6 col-xl-3">
        <div
          :class="['bg-' + useMaterialColorInfo(item)[0]!.color]"
          class="docs-color-block text-white"
        >
          <div>{{ useMaterialColorInfo(item)[0]!.color }}</div>
          <div class="opacity-50">
            {{ useMaterialColorInfo(item)[0]!.value.toUpperCase() }}
          </div>
        </div>
        <div
          :class="['bg-' + useMaterialColorInfo(item)[1]!.color]"
          class="md-shadow-1 docs-color-block text-white"
        >
          <div>{{ useMaterialColorInfo(item)[1]!.color }}</div>
          <div class="opacity-50">
            {{ useMaterialColorInfo(item)[1]!.value.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fullColors, useFullColorClasses, useFullColorName } from '@shares/fullColors.ts';
import {
  grayColors,
  materialColors,
  themeColors,
  useBootstrapColorClasses,
  useGrayColorClasses,
  useMaterialColorInfo,
} from '@shares/themeColors.ts';

export default defineComponent({
  name: 'ColorPalette',
  props: {
    palette: {
      type: String,
      default: undefined,
    },
  },
  setup() {
    return {
      materialColors,
      themeColors,
      grayColors,
      fullColors,
      useBootstrapColorClasses,
      useGrayColorClasses,
      useMaterialColorInfo,
      useFullColorClasses,
      useFullColorName,
    };
  },
});
</script>

<style lang="scss">
.docs-color-block {
  padding: 1.5rem;
  text-align: center;
}
</style>
