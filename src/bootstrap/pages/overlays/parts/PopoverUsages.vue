<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import PopoverExample1 from '@bs/pages/overlays/examples/PopoverExample1.vue';
import PopoverExample2 from '@bs/pages/overlays/examples/PopoverExample2.vue';
import { ref } from 'vue';
import Example1 from '../examples/PopoverExample1.vue?raw';
import Example2 from '../examples/PopoverExample2.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'placement') {
  pageTitle.value = 'Display Placement';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
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
