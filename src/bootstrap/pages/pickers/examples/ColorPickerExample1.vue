<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import type { BsColorPickerInstance, TColorPickerMode } from 'vue-mdbootstrap';

const mode = ref<TColorPickerMode>();
const color = ref<string>('#1669de');
const colorPicker = useTemplateRef<BsColorPickerInstance>('colorPicker');
</script>

<template>
  <div class="w-full" style="max-width: 440px">
    <div class="text-center text-md-start">
      <BsColorPicker ref="colorPicker" v-model="color" v-model:mode="mode" class="shadow" />
    </div>
    <table class="table small mt-3">
      <thead>
        <tr class="text-start">
          <th style="width: 70px">Mode</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ mode }}</td>
          <td>{{ color }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table mt-4">
      <thead class="text-start">
        <tr>
          <th class="p-1" colspan="3">Exposed by instance</th>
        </tr>
      </thead>
      <tbody class="small">
        <tr>
          <td style="width: 60px">HEX</td>
          <td class="px-0 text-center" style="width: 12px">:</td>
          <td>{{ colorPicker?.hex() }}</td>
        </tr>
        <tr>
          <td>RGBA</td>
          <td class="px-0 text-center">:</td>
          <td>{{ colorPicker?.rgba() }}</td>
        </tr>
        <tr>
          <td>HSLA</td>
          <td class="px-0 text-center">:</td>
          <td>{{ colorPicker?.hsla() }}</td>
        </tr>
        <tr>
          <td>OKLCH</td>
          <td class="px-0 text-center">:</td>
          <td>{{ colorPicker?.oklch() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
