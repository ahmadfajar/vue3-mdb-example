<script setup lang="ts">
import TransitionExample2 from '@tw/pages/animations/examples/TransitionExample2.vue';
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import { ref } from 'vue';
import Example from '../examples/TransitionExample2.vue?raw';

const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Expand Transition</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="px-3 py-6 md:p-8">
          <TransitionExample2 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
