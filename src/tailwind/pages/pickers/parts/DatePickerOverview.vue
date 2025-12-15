<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import DatePickerExample1 from '@tw/pages/pickers/examples/DatePickerExample1.vue';
import DatePickerExample2 from '@tw/pages/pickers/examples/DatePickerExample2.vue';
import { ref, watchEffect } from 'vue';

const example1 = await import('../examples/DatePickerExample1.vue?raw');
const example2 = await import('../examples/DatePickerExample2.vue?raw');

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const orientation = ref('portrait');

watchEffect(() => {
  if (orientation.value === 'landscape') {
    fmtVueTpl.value = parseVueTemplateTag(example2.default);
    fmtVueTsc.value = parseVueScriptTag(example2.default);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(example1.default);
    fmtVueTsc.value = parseVueScriptTag(example1.default);
  }
});

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="flex flex-col ps-2">
          <h6 class="my-2">Select Orientation:</h6>
          <BsRadio v-model="orientation" value="portrait">Default orientation</BsRadio>
          <BsRadio v-model="orientation" value="landscape">Landscape orientation</BsRadio>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <DatePickerExample2 v-if="orientation === 'landscape'" />
          <DatePickerExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
