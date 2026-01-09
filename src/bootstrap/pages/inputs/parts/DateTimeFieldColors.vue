<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import DateTimeFieldExample2 from '@bs/pages/inputs/examples/DateTimeFieldExample2.vue';
import { ref } from 'vue';
import Example from '../examples/DateTimeFieldExample2.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'p-3 p-md-5'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Custom Color</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <div class="w-full" style="max-width: 320px">
            <DateTimeFieldExample2 />
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
