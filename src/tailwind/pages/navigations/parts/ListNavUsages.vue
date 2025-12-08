<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListNavExample1 from '@tw/pages/navigations/examples/ListNavExample1.vue';
import ListNavExample2 from '@tw/pages/navigations/examples/ListNavExample2.vue';
import ListNavExample3 from '@tw/pages/navigations/examples/ListNavExample3.vue';
import ListNavExample4 from '@tw/pages/navigations/examples/ListNavExample4.vue';
import ListNavExample5 from '@tw/pages/navigations/examples/ListNavExample5.vue';
import { ref } from 'vue';

const props = defineProps<{ section: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref<string>('Basic Example');
let example;

switch (props.section) {
  case 'nested-1':
    example = await import('../examples/ListNavExample2.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    pageTitle.value = 'Nested Navigation';
    break;
  case 'nested-2':
    example = await import('../examples/ListNavExample3.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    pageTitle.value = 'Nested Navigation without Icons';
    break;
  case 'mixed':
    example = await import('../examples/ListNavExample4.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    pageTitle.value = 'Mixed with ListTile';
    break;
  case 'side-drawer':
    example = await import('../examples/ListNavExample5.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    fmtVueTsc.value = parseVueScriptTag(example.default);
    pageTitle.value = 'Used inside SideDrawer';
    break;
  default:
    example = await import('../examples/ListNavExample1.vue?raw');
    fmtVueTpl.value = parseVueTemplateTag(example.default);
    break;
}

const contentCls = ['h-full min-h-40', 'py-8 px-3 lg:px-8 md:rounded-lg text-bg-surface'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <ListNavExample2 v-if="section === 'nested-1'" />
          <ListNavExample3 v-else-if="section === 'nested-2'" />
          <ListNavExample4 v-else-if="section === 'mixed'" />
          <ListNavExample5 v-else-if="section === 'side-drawer'" />
          <ListNavExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
