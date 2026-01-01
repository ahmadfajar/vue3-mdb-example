<script setup lang="ts">
import { parseVueScriptTag, parseVueStyleTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import CheckboxExample5 from '@bs/pages/inputs/examples/CheckboxExample5.vue';
import { ref } from 'vue';
import Example from '../examples/CheckboxExample5.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fmtVueStyle = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
fmtVueStyle.value = parseVueStyleTag(Example);

const contentCls = ['h-full min-h-40 flex justify-center', 'py-8 px-4 md:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Custom Checkbox</h2>
    </div>
    <ShoutBox :styl="fmtVueStyle" :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <div>
            <CheckboxExample5 />
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
