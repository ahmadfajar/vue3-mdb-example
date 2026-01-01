<script setup lang="ts">
import { ref } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const mode = ref<TColorPickerMode>();
const color = ref<string>();
const swatches = [
  '#f4a261',
  '#e76f51',
  '#FF0000',
  '#d62828',
  '#AA0000',
  '#FFFF00',
  '#d5d50a',
  '#a5a512',
  '#17dc7a',
  '#00FF00',
  '#00AA00',
  '#005500',
  '#055e8e',
  '#0a80a6',
  '#099fbd',
  '#69d9ef',
  '#95e6f6',
];
</script>

<template>
  <div>
    <BsColorPicker v-model="color" v-model:mode="mode" :swatches="swatches" class="border shadow" />
    <table class="text-sm mt-3">
      <thead>
        <tr class="*:px-2 text-left">
          <th class="w-17">Mode</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr class="*:px-2">
          <td>{{ mode }}</td>
          <td>{{ color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
