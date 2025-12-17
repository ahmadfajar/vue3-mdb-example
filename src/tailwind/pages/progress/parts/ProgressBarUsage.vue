<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ProgressBarExample3 from '@tw/pages/progress/examples/ProgressBarExample3.vue';
import { ref } from 'vue';

const example = await import('../examples/ProgressBarExample3.vue?raw');
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const contentCls = ['h-full min-h-40', 'py-8 px-3 lg:px-8 md:rounded-lg'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
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
