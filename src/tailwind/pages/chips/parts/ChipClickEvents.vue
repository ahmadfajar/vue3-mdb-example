<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ChipExample4 from '@tw/pages/chips/examples/ChipExample4.vue';
import { ref } from 'vue';

const example = await import('../examples/ChipExample4.vue?raw');

const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Click Events Support</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg">
          <ChipExample4 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
