<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import LightboxExample1 from '@tw/pages/overlays/examples/LightboxExample1.vue';
import LightboxExample2 from '@tw/pages/overlays/examples/LightboxExample2.vue';
import LightboxExample3 from '@tw/pages/overlays/examples/LightboxExample3.vue';
import LightboxExample4 from '@tw/pages/overlays/examples/LightboxExample4.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Basic Example');

if (props.section === 'images-videos') {
  example = await import('../examples/LightboxExample2.vue?raw');
  pageTitle.value = 'Images and Videos Example';
} else if (props.section === 'single-image') {
  example = await import('../examples/LightboxExample3.vue?raw');
  pageTitle.value = 'Single Image Example';
} else if (props.section === 'custom-toolbar') {
  example = await import('../examples/LightboxExample4.vue?raw');
  pageTitle.value = 'Custom Toolbar Example';
} else {
  example = await import('../examples/LightboxExample1.vue?raw');
}

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-3 lg:px-8 md:rounded-lg'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <LightboxExample2 v-if="section === 'images-videos'" />
          <LightboxExample3 v-else-if="section === 'single-image'" />
          <LightboxExample4 v-else-if="section === 'custom-toolbar'" />
          <LightboxExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
