<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import TextFieldExample5 from '@bs/pages/inputs/examples/TextFieldExample5.vue';
import { ref } from 'vue';
import Example from '../examples/TextFieldExample5.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const contentCls = ['h-full min-h-40', 'p-3 p-md-5'];

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
        <div :class="contentCls">
          <TextFieldExample5 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
