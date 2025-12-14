<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import PopoverExample1 from '@tw/pages/overlays/examples/PopoverExample1.vue';
import PopoverExample2 from '@tw/pages/overlays/examples/PopoverExample2.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Basic Example');

if (props.section === 'placement') {
  pageTitle.value = 'Display Placement';
  example = await import('../examples/PopoverExample2.vue?raw');
} else {
  example = await import('../examples/PopoverExample1.vue?raw');
}

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <PopoverExample2 v-if="section === 'placement'" />
          <PopoverExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
