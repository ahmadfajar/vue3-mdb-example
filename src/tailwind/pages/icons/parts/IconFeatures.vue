<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import IconExample1 from '@tw/pages/icons/examples/IconExample1.vue';
import IconExample2 from '@tw/pages/icons/examples/IconExample2.vue';
import IconExample3 from '@tw/pages/icons/examples/IconExample3.vue';
import IconExample4 from '@tw/pages/icons/examples/IconExample4.vue';
import { ref } from 'vue';
import Example1 from '../examples/IconExample1.vue?raw';
import Example2 from '../examples/IconExample2.vue?raw';
import Example3 from '../examples/IconExample3.vue?raw';
import Example4 from '../examples/IconExample4.vue?raw';

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
          <IconExample2 v-if="section === 'styling'" />
          <IconExample3 v-else-if="section === 'rotation'" />
          <IconExample4 v-else-if="section === 'animation'" />
          <IconExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
