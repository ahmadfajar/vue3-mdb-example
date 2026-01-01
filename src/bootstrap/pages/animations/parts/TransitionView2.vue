<script setup lang="ts">
import TransitionExample2 from '@bs/pages/animations/examples/TransitionExample2.vue';
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
    <div class="section-content mb-4">
      <h2>Expand Transition</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="px-3 py-4 p-md-5">
          <TransitionExample2 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
