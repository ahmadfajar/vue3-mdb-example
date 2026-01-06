<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ProgressBarExample3 from '@bs/pages/progress/examples/ProgressBarExample3.vue';
import { ref } from 'vue';
import Example from '../examples/ProgressBarExample3.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

const contentCls = ['h-full min-h-40 flex justify-center', 'p-3 p-md-5'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Advance Usage</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <ProgressBarExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
