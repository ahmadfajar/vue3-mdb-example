<script setup lang="ts">
import { textCssFromOklchColor } from '@shares/sharedApi.ts';

const grayColors = {
  50: 'oklch(0.982 0.002 247.839)',
  100: 'oklch(0.967 0.003 264.542)',
  200: 'oklch(0.942 0.005 247.879)',
  300: 'oklch(0.896 0.007 247.901)',
  400: 'oklch(0.814 0.013 247.949)',
  500: 'oklch(0.687 0.016 239.982)',
  600: 'oklch(0.558 0.016 244.893)',
  700: 'oklch(0.425 0.017 238.405)',
  800: 'oklch(0.345 0.017 238.212)',
  900: 'oklch(0.269 0.017 238.084)',
  950: 'oklch(0.213 0.013 229.783)',
};

// const grayColorsOld = {
//   50: 'oklch(98% 0 0)',
//   100: 'oklch(96.7% 0.003 264.542)',
//   200: 'oklch(92.8% 0.006 264.531)',
//   300: 'oklch(87.2% 0.01 258.338)',
//   400: 'oklch(70.7% 0.022 261.325)',
//   500: 'oklch(55% 0.02 244.89)',
//   600: 'oklch(44% 0.02 244.9)',
//   700: 'oklch(38% 0.02 244.89)',
//   800: 'oklch(29% 0.02 244.91)',
//   900: 'oklch(25% 0.02 244.9)',
//   950: 'oklch(22% 0.02 244.87)',
// };

const neutralColors = {
  50: 'oklch(0.996 0 0)',
  100: 'oklch(0.956 0 0)',
  200: 'oklch(0.889 0 0)',
  300: 'oklch(0.756 0 0)',
  400: 'oklch(0.623 0 0)',
  500: 'oklch(0.556 0 89.876)',
  600: 'oklch(0.439 0 0)',
  700: 'oklch(0.371 0 0)',
  800: 'oklch(0.269 0 0)',
  900: 'oklch(0.205 0 0)',
  950: 'oklch(0.145 0 0)',
};
</script>

<template>
  <BsContent class="max-w-full" tag="div">
    <main class="docs-body mx-auto">
      <div class="row row-cols-1 row-cols-sm-2 gx-5 gy-4">
        <div class="col">
          <h3 class="mb-4">Gray Colors</h3>
          <div
            v-for="(color, key) in grayColors"
            :class="['flex justify-between p-3 md-shadow-1', textCssFromOklchColor(color)]"
            :key="key"
            :style="{ backgroundColor: color }"
          >
            <div class="font-weight-medium">{{ key }}</div>
            <div class="text-sm opacity-70">{{ color }}</div>
          </div>
        </div>
        <div class="col">
          <h3 class="mb-4">Neutral Colors</h3>
          <div
            v-for="(color, key) in neutralColors"
            :class="['flex justify-between p-3 md-shadow-1', textCssFromOklchColor(color)]"
            :key="key"
            :style="{ backgroundColor: color }"
          >
            <div class="font-weight-medium">{{ key }}</div>
            <div class="text-sm opacity-70">{{ color }}</div>
          </div>
        </div>
      </div>
    </main>
  </BsContent>
</template>
