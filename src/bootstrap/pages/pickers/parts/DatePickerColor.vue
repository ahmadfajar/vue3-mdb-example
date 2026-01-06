<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import DatePickerExample4 from '@bs/pages/pickers/examples/DatePickerExample4.vue';
import { ref } from 'vue';
import Example from '../examples/DatePickerExample4.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'p-3 p-md-4'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Custom Color</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <DatePickerExample4 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
