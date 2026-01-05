<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListNavExample1 from '@tw/pages/navigations/examples/ListNavExample1.vue';
import ListNavExample2 from '@tw/pages/navigations/examples/ListNavExample2.vue';
import ListNavExample3 from '@tw/pages/navigations/examples/ListNavExample3.vue';
import ListNavExample4 from '@tw/pages/navigations/examples/ListNavExample4.vue';
import ListNavExample5 from '@tw/pages/navigations/examples/ListNavExample5.vue';
import { ref } from 'vue';
import Example1 from '../examples/ListNavExample1.vue?raw';
import Example2 from '../examples/ListNavExample2.vue?raw';
import Example3 from '../examples/ListNavExample3.vue?raw';
import Example4 from '../examples/ListNavExample4.vue?raw';
import Example5 from '../examples/ListNavExample5.vue?raw';

const props = defineProps<{ section: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref<string>('Overview');

switch (props.section) {
  case 'nested-1':
    pageTitle.value = 'Nested Navigation';
    fmtVueTpl.value = parseVueTemplateTag(Example2);
    break;
  case 'nested-2':
    pageTitle.value = 'Nested Navigation without Icons';
    fmtVueTpl.value = parseVueTemplateTag(Example3);
    break;
  case 'mixed':
    pageTitle.value = 'Mixed with ListTile';
    fmtVueTpl.value = parseVueTemplateTag(Example4);
    break;
  case 'side-drawer':
    pageTitle.value = 'Used inside SideDrawer';
    fmtVueTpl.value = parseVueTemplateTag(Example5);
    fmtVueTsc.value = parseVueScriptTag(Example5);
    break;
  default:
    fmtVueTpl.value = parseVueTemplateTag(Example1);
    break;
}

const contentCls = ['h-full min-h-40', 'p-3 lg:px-8 md:rounded-lg text-bg-surface'];
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
