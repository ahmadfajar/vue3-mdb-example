<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import FontawesomeExample1 from '@tw/pages/icons/examples/FontawesomeExample1.vue';
import FontawesomeExample2 from '@tw/pages/icons/examples/FontawesomeExample2.vue';
import FontawesomeExample3 from '@tw/pages/icons/examples/FontawesomeExample3.vue';
import FontawesomeExample4 from '@tw/pages/icons/examples/FontawesomeExample4.vue';
import { ref } from 'vue';
import Example1 from '../examples/FontawesomeExample1.vue?raw';
import Example2 from '../examples/FontawesomeExample2.vue?raw';
import Example3 from '../examples/FontawesomeExample3.vue?raw';
import Example4 from '../examples/FontawesomeExample4.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'styling') {
  pageTitle.value = 'Styling an Icon';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.section === 'rotation') {
  pageTitle.value = 'Rotating an Icon';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else if (props.section === 'animation') {
  pageTitle.value = 'Animating an Icon';
  fmtVueTpl.value = parseVueTemplateTag(Example4);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['h-full min-h-40 flex justify-center', 'py-8 px-3 lg:px-8'];
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
