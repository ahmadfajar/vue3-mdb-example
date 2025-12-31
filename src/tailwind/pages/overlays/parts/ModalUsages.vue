<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ModalExample1 from '@tw/pages/overlays/examples/ModalExample1.vue';
import ModalExample2 from '@tw/pages/overlays/examples/ModalExample2.vue';
import ModalExample3 from '@tw/pages/overlays/examples/ModalExample3.vue';
import ModalExample4 from '@tw/pages/overlays/examples/ModalExample4.vue';
import { ref } from 'vue';
import Example1 from '../examples/ModalExample1.vue?raw';
import Example2 from '../examples/ModalExample2.vue?raw';
import Example3 from '../examples/ModalExample3.vue?raw';
import Example4 from '../examples/ModalExample4.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'true-modal') {
  pageTitle.value = 'True Modal Dialog';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.section === 'long-content') {
  pageTitle.value = 'Scrolling Long Content';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else if (props.section === 'hide-backdrop') {
  pageTitle.value = 'Hiding Backdrop Overlay';
  fmtVueTpl.value = parseVueTemplateTag(Example4);
  fmtVueTsc.value = parseVueScriptTag(Example4);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
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
