<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample7 from '@tw/views/buttons/examples/ButtonExample7.vue';
import { ref } from 'vue';

const example = await import('../examples/ButtonExample7.vue?raw');
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Button Toolbar</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg">
          <ButtonExample7 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
