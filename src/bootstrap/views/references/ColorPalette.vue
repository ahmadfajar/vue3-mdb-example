<template>
  <div class="docs-color-table">
    <div v-if="palette === 'contextual'" class="row gy-4">
      <div v-for="(value, key) in contextColorsLightDark" :key="key" class="col-md-6 col-xl-4">
        <div
          :class="useMainColorClasses(key)"
          class="flex items-center px-3 md-shadow-1"
          style="height: 64px"
        >
          <span class="flex-grow font-weight-semibold">{{ key }}</span>
          <span class="opacity-75 small"> {{ value }} </span>
        </div>
      </div>
    </div>

    <div v-else-if="palette === 'primary'" class="row gy-4">
      <div v-for="(value, key) in themeColors" :key="value" class="col-6 col-md-4 col-xl-3">
        <div
          :class="useMainColorClasses(key)"
          class="flex items-center text-center px-3 md-shadow-1"
          style="height: 64px"
        >
          <span class="flex-grow font-weight-semibold">{{ key }}</span>
        </div>
      </div>
    </div>

    <div v-else-if="palette === 'material'" class="row gy-4">
      <div v-for="(item, key) in materialColors" :key="key" class="col-md-6 col-xl-3">
        <div class="md-shadow-2">
          <div
            :class="[
              'p-4 text-center',
              'bg-' + useMaterialColorInfo(item)[0].name,
              textCssFromOklchColor(useMaterialColorInfo(item)[0].value),
            ]"
          >
            <div>{{ useMaterialColorInfo(item)[0].name }}</div>
          </div>
          <div :class="['p-4 text-center text-light', 'bg-' + useMaterialColorInfo(item)[1].name]">
            <div>{{ useMaterialColorInfo(item)[1].name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="palette === 'fullColor'" class="relative">
      <div class="grid grid-cols-auto md-gap-y-2">
        <div class="sticky-top bg-background" style="top: 64px">&nbsp;</div>
        <div
          class="grid grid-cols-11 color-table-header bg-background font-weight-medium md-gap-x-1 py-1 sticky-top"
          style="top: 64px"
        >
          <div>50</div>
          <div>100</div>
          <div>200</div>
          <div>300</div>
          <div>400</div>
          <div>500</div>
          <div>600</div>
          <div>700</div>
          <div>800</div>
          <div>900</div>
          <div>950</div>
        </div>
        <template v-for="(items, key) in colorFulls" :key="key">
          <div class="content-center color-table-cell-start">
            {{ StringHelper.titleCase(key) }}
          </div>
          <div class="grid grid-cols-11 color-table-body">
            <template v-for="prop in Object.keys(items as TRecord)" :key="key + prop">
              <div :class="[`bg-${key}-${prop}`]">&nbsp;</div>
            </template>
          </div>
        </template>
      </div>
    </div>

    <div v-else-if="palette === 'accentColor'" class="row gy-4">
      <div v-for="(items, key) in colorAccents" :key="key" class="col-6 col-md-4 col-xl-3">
        <template v-if="!['midnight-haze', 'blue-grey', 'gray', 'neutral'].includes(key)">
          <div class="px-2 mb-2 font-weight-semibold">{{ StringHelper.titleCase(key) }}</div>
          <div class="md-shadow">
            <template v-for="(value, prop) in items" :key="key + prop">
              <div :class="[`bg-${key}-${prop}`, textCssFromOklchColor(value)]" class="p-3 flex">
                <span class="flex-grow">{{ prop }}</span>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fullColors } from '@shares/fullColors.ts';
import { textCssFromOklchColor } from '@shares/sharedApi.ts';
import {
  contextColorsLightDark,
  materialColors,
  themeColors,
  useMainColorClasses,
  useMaterialColorInfo,
} from '@shares/themeColors.ts';
import { reactive } from 'vue';
import { Helper, StringHelper, type TRecord } from 'vue-mdbootstrap';

defineProps<{ palette: string }>();

const colorFulls = reactive<TRecord>({});
const colorAccents = reactive<TRecord>({});

Object.entries(fullColors).forEach(([key, value]) => {
  const full: TRecord = {};
  const accents: TRecord = {};

  Object.entries(value).forEach(([prop, color]) => {
    if (prop.startsWith('accent-')) {
      accents[prop] = color;
    } else {
      full[prop] = color;
    }
  });

  colorFulls[key] = full;
  if (!Helper.isEmptyObject(accents)) {
    colorAccents[key] = accents;
  }
});
</script>

<style lang="scss">
//.docs-color-block {
//  padding: 1.5rem;
//  text-align: center;
//}
.color-table-header {
  justify-items: start;
  padding-bottom: 0.5rem !important;

  > * {
    writing-mode: vertical-lr;
    rotate: 180deg;
    height: 36px;
  }

  @media (min-width: 40rem) {
    justify-items: center;
    align-items: center;
    padding-bottom: 0.25rem !important;

    > * {
      writing-mode: horizontal-tb;
      rotate: none;
      height: auto;
    }
  }
}

.color-table-cell-start {
  width: 135px;
  height: 32px;

  @media (min-width: 40rem) {
    height: 42px;
  }
}

.color-table-body {
  > * {
    height: 32px;
  }

  @media (min-width: 40rem) {
    > * {
      height: 42px;
    }
  }
}
</style>
