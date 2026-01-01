<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ColorPickerExample1 from '@bs/pages/pickers/examples/ColorPickerExample1.vue';
import ColorPickerExample2 from '@bs/pages/pickers/examples/ColorPickerExample2.vue';
import ColorPickerExample3 from '@bs/pages/pickers/examples/ColorPickerExample3.vue';
import { ref } from 'vue';
import Example1 from '../examples/ColorPickerExample1.vue?raw';
import Example2 from '../examples/ColorPickerExample2.vue?raw';
import Example3 from '../examples/ColorPickerExample3.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'swatches') {
  pageTitle.value = 'Color Swatches';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.section === 'popup') {
  pageTitle.value = 'Popup Color Picker';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
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
        <div :class="contentCls" style="--md-border-color: var(--border-translucent)">
          <ColorPickerExample2 v-if="section === 'swatches'" />
          <ColorPickerExample3 v-else-if="section === 'popup'" />
          <ColorPickerExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
