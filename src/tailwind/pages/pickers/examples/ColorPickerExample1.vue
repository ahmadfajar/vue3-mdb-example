<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import type { BsColorPickerInstance, TColorPickerMode } from 'vue-mdbootstrap';

const mode = ref<TColorPickerMode>();
const color = ref<string>('#1669de');
const colorPicker = useTemplateRef<BsColorPickerInstance>('colorPicker');
</script>

<template>
  <div class="w-full max-w-110">
    <div class="text-center md:text-left">
      <BsColorPicker ref="colorPicker" v-model="color" v-model:mode="mode" class="md-shadow" />
    </div>
    <table class="w-full text-sm mt-4">
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
    <table class="w-full mt-3">
      <thead class="text-left">
        <tr>
          <th class="p-1" colspan="3">Exposed by instance</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <tr class="*:px-1">
          <td class="w-15">HEX</td>
          <td>:</td>
          <td>{{ colorPicker?.hex() }}</td>
        </tr>
        <tr class="*:px-1">
          <td>RGBA</td>
          <td>:</td>
          <td>{{ colorPicker?.rgba() }}</td>
        </tr>
        <tr class="*:px-1">
          <td>HSLA</td>
          <td>:</td>
          <td>{{ colorPicker?.hsla() }}</td>
        </tr>
        <tr class="*:px-1">
          <td>OKLCH</td>
          <td>:</td>
          <td>{{ colorPicker?.oklch() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
