<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ChipExample4 from '@bs/pages/chips/examples/ChipExample4.vue';
import { ref } from 'vue';
import Example from '../examples/ChipExample4.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Click Events Support</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center px-6 py-8">
          <ChipExample4 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
