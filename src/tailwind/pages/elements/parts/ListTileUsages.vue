<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListTileExample1 from '@tw/pages/elements/examples/ListTileExample1.vue';
import ListTileExample2 from '@tw/pages/elements/examples/ListTileExample2.vue';
import ListTileExample3 from '@tw/pages/elements/examples/ListTileExample3.vue';
import ListTileExample4 from '@tw/pages/elements/examples/ListTileExample4.vue';
import ListTileExample5 from '@tw/pages/elements/examples/ListTileExample5.vue';
import ListTileExample6 from '@tw/pages/elements/examples/ListTileExample6.vue';
import { ref } from 'vue';

const props = defineProps<{ usage: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref<string>('Basic Example');
let example;

switch (props.usage) {
  case 'image':
    example = await import('../examples/ListTileExample2.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    fmtVueTsc.value = parseVueScriptTag(example.default);
    pageTitle.value = 'with Images';
    break;
  case 'image-icon':
    example = await import('../examples/ListTileExample3.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    fmtVueTsc.value = parseVueScriptTag(example.default);
    pageTitle.value = 'with Images & Icons';
    break;
  case 'contact-details':
    example = await import('../examples/ListTileExample4.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    pageTitle.value = 'Contact Details';
    break;
  case 'input-controls':
    example = await import('../examples/ListTileExample5.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    fmtVueTsc.value = parseVueScriptTag(example.default);
    pageTitle.value = 'Used with Input Controls';
    break;
  case 'side-drawer':
    example = await import('../examples/ListTileExample6.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    fmtVueTsc.value = parseVueScriptTag(example.default);
    pageTitle.value = 'Used inside SideDrawer';
    break;
  default:
    example = await import('../examples/ListTileExample1.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    break;
}

const contentCls = [
  'h-full flex items-center justify-center min-h-40',
  'py-8 px-3 lg:px-8 md:rounded-lg text-bg-surface',
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
          <ListTileExample2 v-if="usage === 'image'" />
          <ListTileExample3 v-else-if="usage === 'image-icon'" />
          <ListTileExample4 v-else-if="usage === 'contact-details'" />
          <ListTileExample5 v-else-if="usage === 'input-controls'" />
          <ListTileExample6 v-else-if="usage === 'side-drawer'" />
          <ListTileExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
