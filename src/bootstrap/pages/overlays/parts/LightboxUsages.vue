<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import LightboxExample1 from '@bs/pages/overlays/examples/LightboxExample1.vue';
import LightboxExample2 from '@bs/pages/overlays/examples/LightboxExample2.vue';
import LightboxExample3 from '@bs/pages/overlays/examples/LightboxExample3.vue';
import LightboxExample4 from '@bs/pages/overlays/examples/LightboxExample4.vue';
import { ref } from 'vue';
import Example1 from '../examples/LightboxExample1.vue?raw';
import Example2 from '../examples/LightboxExample2.vue?raw';
import Example3 from '../examples/LightboxExample3.vue?raw';
import Example4 from '../examples/LightboxExample4.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'images-videos') {
  pageTitle.value = 'Images and Videos Example';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.section === 'single-image') {
  pageTitle.value = 'Single Image Example';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else if (props.section === 'custom-toolbar') {
  pageTitle.value = 'Custom Toolbar Example';
  fmtVueTpl.value = parseVueTemplateTag(Example4);
  fmtVueTsc.value = parseVueScriptTag(Example4);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
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
