<script setup lang="ts">
import { type ColorName, fullColors } from '@shares/fullColors.ts';
import { textCssFromOklchColor } from '@shares/sharedApi.ts';
import {
  contextColorsLightDark,
  materialColors,
  themeColors,
  useMaterialColorInfo,
} from '@shares/themeColors.ts';
import { reactive } from 'vue';
import { Helper, StringHelper, type TRecord } from 'vue-mdbootstrap';

defineProps<{ palette: string; colorNames?: string[] }>();

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

<template>
  <div class="docs-color-table">
    <div v-if="palette === 'contextual'" class="row gy-4">
      <div v-for="(_value, key) in contextColorsLightDark" :key="key" class="col-6 col-md-4">
        <div :class="['p-4 lh-1 md-shadow-1', `text-bg-${key}`]">
          <div class="font-weight-medium text-center">{{ key }}</div>
        </div>
      </div>
    </div>

    <div v-else-if="palette === 'primary'" class="row gy-4">
      <div v-for="(value, key) in themeColors" :key="value" class="col-6 col-md-4 col-xl-3">
        <div
          :class="[
            'flex items-center justify-center px-3 md-shadow-1',
            `bg-${key}`,
            textCssFromOklchColor(value),
          ]"
          style="height: 64px"
        >
          <span class="font-weight-medium">{{ key }}</span>
        </div>
      </div>
    </div>

    <div v-else-if="palette === 'material'" class="row gy-4">
      <div v-for="(item, key) in materialColors" :key="key" class="col-sm-6 col-xl-3">
        <div class="md-shadow-2">
          <div
            :class="[
              'p-4 text-center small',
              'bg-' + useMaterialColorInfo(item)[0].name,
              textCssFromOklchColor(useMaterialColorInfo(item)[0].value),
            ]"
          >
            <div>{{ useMaterialColorInfo(item)[0].name }}</div>
          </div>
          <div
            :class="[
              'p-4 text-center text-light small',
              'bg-' + useMaterialColorInfo(item)[1].name,
            ]"
          >
            <div>{{ useMaterialColorInfo(item)[1].name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="palette === 'fullColor'" class="relative">
      <div class="grid grid-cols-auto md-gap-y-2">
        <div class="sticky-top text-bg-surface" style="top: 64px">&nbsp;</div>
        <div
          class="grid grid-cols-11 color-table-header text-bg-surface font-weight-medium md-gap-x-1 py-1 sticky-top"
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
      <div v-for="(items, key) in colorAccents" :key="key" class="col-6 col-md-3">
        <template v-if="!['midnight-haze', 'blue-grey', 'gray', 'neutral'].includes(key)">
          <div class="px-2 mb-2 font-weight-semibold">{{ StringHelper.titleCase(key) }}</div>
          <div class="md-shadow">
            <template v-for="(value, prop) in items" :key="key + prop">
              <div :class="['p-3', `bg-${key}-${prop}`, textCssFromOklchColor(value)]">
                {{ prop }}
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>

    <div v-else-if="palette === 'testColor'" class="row gy-4">
      <div v-for="name in colorNames" :key="name" class="col-6 col-md-3">
        <div class="px-2 mb-2 font-weight-semibold">{{ StringHelper.titleCase(name) }}</div>
        <div class="md-shadow">
          <template v-for="(value, prop) in fullColors[name as ColorName]" :key="name + prop">
            <div :class="['p-3', `bg-${name}-${prop}`, textCssFromOklchColor(value)]">
              {{ prop }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.grid {
  display: grid;

  .sticky-top {
    z-index: 10;
  }
}

.grid-cols-auto {
  grid-template-columns: auto minmax(0, 1fr);
}

.grid-cols-11 {
  grid-template-columns: repeat(11, minmax(0, 1fr));
}

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
