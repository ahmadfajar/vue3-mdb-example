<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import DateTimeFieldExample3 from '@bs/pages/inputs/examples/DateTimeFieldExample3.vue';
import { ref } from 'vue';
import Example from '../examples/DateTimeFieldExample3.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const contentCls = ['h-full min-h-40', 'py-8 px-4 md:px-8'];

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Validation Example</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls" style="--md-border-color: var(--border-translucent)">
          <DateTimeFieldExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
