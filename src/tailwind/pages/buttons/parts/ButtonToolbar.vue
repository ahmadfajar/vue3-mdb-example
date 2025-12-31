<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample7 from '@tw/pages/buttons/examples/ButtonExample7.vue';
import { ref } from 'vue';
import Example from '../examples/ButtonExample7.vue?raw';

const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();
fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Button Toolbar</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center px-6 py-8">
          <ButtonExample7 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
