<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import BreadcrumbExample1 from '@tw/pages/navigations/examples/BreadcrumbExample1.vue';
import BreadcrumbExample2 from '@tw/pages/navigations/examples/BreadcrumbExample2.vue';
import BreadcrumbExample3 from '@tw/pages/navigations/examples/BreadcrumbExample3.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Basic Example');

if (props.section === 'icon') {
  example = await import('../examples/BreadcrumbExample2.vue?raw');
  pageTitle.value = 'Icon Example';
} else if (props.section === 'separator') {
  example = await import('../examples/BreadcrumbExample3.vue?raw');
  pageTitle.value = 'Custom Separator Example';
} else {
  example = await import('../examples/BreadcrumbExample1.vue?raw');
}

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const contentCls = ['h-full min-h-40 flex items-center', 'py-8 lg:px-3 md:rounded-lg'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
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
