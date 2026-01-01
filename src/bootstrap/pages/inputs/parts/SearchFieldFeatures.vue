<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import SearchFieldExample1 from '@bs/pages/inputs/examples/SearchFieldExample1.vue';
import SearchFieldExample2 from '@bs/pages/inputs/examples/SearchFieldExample2.vue';
import SearchFieldExample3 from '@bs/pages/inputs/examples/SearchFieldExample3.vue';
import { ref } from 'vue';
import Example1 from '../examples/SearchFieldExample1.vue?raw';
import Example2 from '../examples/SearchFieldExample2.vue?raw';
import Example3 from '../examples/SearchFieldExample3.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref<string>('Overview');

if (props.section === 'advance-search') {
  pageTitle.value = 'Advance Search';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else if (props.section === 'dark-mode') {
  pageTitle.value = 'Dark Mode';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-4 md:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <SearchFieldExample3 v-if="section === 'advance-search'" />
          <SearchFieldExample2 v-else-if="section === 'dark-mode'" />
          <SearchFieldExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
