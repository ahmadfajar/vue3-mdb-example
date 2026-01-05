<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import BreadcrumbExample1 from '@bs/pages/navigations/examples/BreadcrumbExample1.vue';
import BreadcrumbExample2 from '@bs/pages/navigations/examples/BreadcrumbExample2.vue';
import BreadcrumbExample3 from '@bs/pages/navigations/examples/BreadcrumbExample3.vue';
import { ref } from 'vue';
import Example1 from '../examples/BreadcrumbExample1.vue?raw';
import Example2 from '../examples/BreadcrumbExample2.vue?raw';
import Example3 from '../examples/BreadcrumbExample3.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Basic Example');

if (props.section === 'icon') {
  pageTitle.value = 'Icon Example';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.section === 'separator') {
  pageTitle.value = 'Custom Separator Example';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['h-full min-h-40 flex items-center', 'py-4'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <BreadcrumbExample2 v-if="section === 'icon'" />
          <BreadcrumbExample3 v-else-if="section === 'separator'" />
          <BreadcrumbExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
