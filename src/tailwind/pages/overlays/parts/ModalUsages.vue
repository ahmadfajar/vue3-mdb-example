<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ModalExample1 from '@tw/pages/overlays/examples/ModalExample1.vue';
import ModalExample2 from '@tw/pages/overlays/examples/ModalExample2.vue';
import ModalExample3 from '@tw/pages/overlays/examples/ModalExample3.vue';
import ModalExample4 from '@tw/pages/overlays/examples/ModalExample4.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'true-modal') {
  example = await import('../examples/ModalExample2.vue?raw');
  pageTitle.value = 'True Modal Dialog';
} else if (props.section === 'long-content') {
  example = await import('../examples/ModalExample3.vue?raw');
  pageTitle.value = 'Scrolling Long Content';
} else if (props.section === 'hide-backdrop') {
  example = await import('../examples/ModalExample4.vue?raw');
  pageTitle.value = 'Hiding Backdrop Overlay';
} else {
  example = await import('../examples/ModalExample1.vue?raw');
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
          <ModalExample2 v-if="section === 'true-modal'" />
          <ModalExample3 v-else-if="section === 'long-content'" />
          <ModalExample4 v-else-if="section === 'hide-backdrop'" />
          <ModalExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
