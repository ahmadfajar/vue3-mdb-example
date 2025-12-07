<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import FontawesomeExample1 from '@tw/pages/icons/examples/FontawesomeExample1.vue';
import FontawesomeExample2 from '@tw/pages/icons/examples/FontawesomeExample2.vue';
import FontawesomeExample3 from '@tw/pages/icons/examples/FontawesomeExample3.vue';
import FontawesomeExample4 from '@tw/pages/icons/examples/FontawesomeExample4.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'styling') {
  example = await import('../examples/FontawesomeExample2.vue?raw');
  pageTitle.value = 'Styling an Icon';
} else if (props.section === 'rotation') {
  example = await import('../examples/FontawesomeExample3.vue?raw');
  pageTitle.value = 'Rotating an Icon';
} else if (props.section === 'animation') {
  example = await import('../examples/FontawesomeExample4.vue?raw');
  pageTitle.value = 'Animating an Icon';
} else {
  example = await import('../examples/FontawesomeExample1.vue?raw');
}

fmtVueTpl.value = parseVueTemplateTag(example.default);
if (props.section !== 'animation') {
  fmtVueTsc.value = parseVueScriptTag(example.default);
}

const contentCls = ['h-full min-h-40 flex justify-center', 'py-8 px-3 lg:px-8 md:rounded-lg'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <FontawesomeExample2 v-if="section === 'styling'" />
          <FontawesomeExample3 v-else-if="section === 'rotation'" />
          <FontawesomeExample4 v-else-if="section === 'animation'" />
          <FontawesomeExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
