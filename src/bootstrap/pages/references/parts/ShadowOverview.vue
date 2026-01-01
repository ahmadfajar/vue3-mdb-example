<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ShadowExample1 from '@bs/pages/references/examples/ShadowExample1.vue';
import ShadowExample2 from '@bs/pages/references/examples/ShadowExample2.vue';
import { ref } from 'vue';
import Example1 from '../examples/ShadowExample1.vue?raw';
import Example2 from '../examples/ShadowExample2.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const pageTitle = ref<string>('Overview');

if (props.section === 'on-hover') {
  pageTitle.value = 'Shadow on Hover';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
}

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 md:py-12 px-4 md:px-8',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <ShadowExample2 v-if="section === 'on-hover'" />
          <ShadowExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
