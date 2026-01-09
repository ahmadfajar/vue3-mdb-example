<script setup lang="ts">
import { parseVueScriptTag, parseVueStyleTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListboxExample3 from '@bs/pages/inputs/examples/ListboxExample3.vue';
import { ref } from 'vue';
import Example from '../examples/ListboxExample3.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fmtVueStyle = ref<string>();
const contentCls = ['h-full min-h-40', 'p-3 p-md-5'];

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
fmtVueStyle.value = parseVueStyleTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Customizing Listbox</h2>
    </div>
    <ShoutBox :styl="fmtVueStyle" :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <ListboxExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
