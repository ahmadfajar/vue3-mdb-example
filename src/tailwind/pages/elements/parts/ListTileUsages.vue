<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListTileExample1 from '@tw/pages/elements/examples/ListTileExample1.vue';
import ListTileExample2 from '@tw/pages/elements/examples/ListTileExample2.vue';
import ListTileExample3 from '@tw/pages/elements/examples/ListTileExample3.vue';
import ListTileExample4 from '@tw/pages/elements/examples/ListTileExample4.vue';
import ListTileExample5 from '@tw/pages/elements/examples/ListTileExample5.vue';
import ListTileExample6 from '@tw/pages/elements/examples/ListTileExample6.vue';
import { ref } from 'vue';
import Example1 from '../examples/ListTileExample1.vue?raw';
import Example2 from '../examples/ListTileExample2.vue?raw';
import Example3 from '../examples/ListTileExample3.vue?raw';
import Example4 from '../examples/ListTileExample4.vue?raw';
import Example5 from '../examples/ListTileExample5.vue?raw';
import Example6 from '../examples/ListTileExample6.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref<string>('Basic Example');

switch (props.section) {
  case 'images':
    fmtVueTpl.value = parseVueTemplateTag(Example2);
    fmtVueTsc.value = parseVueScriptTag(Example2);
    pageTitle.value = 'with Images';
    break;
  case 'image-icon':
    fmtVueTpl.value = parseVueTemplateTag(Example3);
    fmtVueTsc.value = parseVueScriptTag(Example3);
    pageTitle.value = 'with Images & Icons';
    break;
  case 'contact-details':
    fmtVueTpl.value = parseVueTemplateTag(Example4);
    pageTitle.value = 'Contact Details';
    break;
  case 'input-controls':
    fmtVueTpl.value = parseVueTemplateTag(Example5);
    fmtVueTsc.value = parseVueScriptTag(Example5);
    pageTitle.value = 'Used with Input Controls';
    break;
  case 'side-drawer':
    fmtVueTpl.value = parseVueTemplateTag(Example6);
    fmtVueTsc.value = parseVueScriptTag(Example6);
    pageTitle.value = 'Used inside SideDrawer';
    break;
  default:
    fmtVueTpl.value = parseVueTemplateTag(Example1);
    break;
}

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
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
          <ListTileExample2 v-if="section === 'images'" />
          <ListTileExample3 v-else-if="section === 'image-icon'" />
          <ListTileExample4 v-else-if="section === 'contact-details'" />
          <ListTileExample5 v-else-if="section === 'input-controls'" />
          <ListTileExample6 v-else-if="section === 'side-drawer'" />
          <ListTileExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
