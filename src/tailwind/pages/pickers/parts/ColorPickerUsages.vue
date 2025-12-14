<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ColorPickerExample1 from '@tw/pages/pickers/examples/ColorPickerExample1.vue';
import ColorPickerExample2 from '@tw/pages/pickers/examples/ColorPickerExample2.vue';
import ColorPickerExample3 from '@tw/pages/pickers/examples/ColorPickerExample3.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'swatches') {
  pageTitle.value = 'Color Swatches';
  example = await import('../examples/ColorPickerExample2.vue?raw');
} else if (props.section === 'popup') {
  pageTitle.value = 'Popup Color Picker';
  example = await import('../examples/ColorPickerExample3.vue?raw');
} else {
  example = await import('../examples/ColorPickerExample1.vue?raw');
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
        <div :class="contentCls" style="--md-border-color: var(--border-translucent)">
          <ColorPickerExample2 v-if="section === 'swatches'" />
          <ColorPickerExample3 v-else-if="section === 'popup'" />
          <ColorPickerExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
