<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import IconExample1 from '@tw/pages/icons/examples/IconExample1.vue';
import IconExample2 from '@tw/pages/icons/examples/IconExample2.vue';
import IconExample3 from '@tw/pages/icons/examples/IconExample3.vue';
import IconExample4 from '@tw/pages/icons/examples/IconExample4.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'styling') {
  example = await import('../examples/IconExample2.vue?raw');
  pageTitle.value = 'Styling an Icon';
} else if (props.section === 'rotation') {
  example = await import('../examples/IconExample3.vue?raw');
  pageTitle.value = 'Rotating an Icon';
} else if (props.section === 'animation') {
  example = await import('../examples/IconExample4.vue?raw');
  pageTitle.value = 'Animating an Icon';
} else {
  example = await import('../examples/IconExample1.vue?raw');
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
          <IconExample2 v-if="section === 'styling'" />
          <IconExample3 v-else-if="section === 'rotation'" />
          <IconExample4 v-else-if="section === 'animation'" />
          <IconExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
