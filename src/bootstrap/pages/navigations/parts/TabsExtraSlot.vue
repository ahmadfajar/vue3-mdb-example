<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import TabsExample3 from '@bs/pages/navigations/examples/TabsExample3.vue';
import { ref } from 'vue';
import Example from '../examples/TabsExample3.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const contentCls = ['h-full min-h-40', 'py-8 px-3 lg:px-8'];

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Using Extra Slot</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <TabsExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
