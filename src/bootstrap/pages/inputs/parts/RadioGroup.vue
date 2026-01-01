<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import RadioExample2 from '@bs/pages/inputs/examples/RadioExample2.vue';
import RadioExample3 from '@bs/pages/inputs/examples/RadioExample3.vue';
import RadioExample4 from '@bs/pages/inputs/examples/RadioExample4.vue';
import { ref, watch } from 'vue';
import type { TRadioInputProps } from 'vue-mdbootstrap';
import Example1 from '../examples/RadioExample2.vue?raw';
import Example2 from '../examples/RadioExample3.vue?raw';
import Example3 from '../examples/RadioExample4.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const sample = ref<string>('default');

watch(
  sample,
  (newValue) => {
    if (newValue === 'single-color') {
      fmtVueTpl.value = parseVueTemplateTag(Example2);
      fmtVueTsc.value = parseVueScriptTag(Example2);
    } else if (newValue === 'multi-color') {
      fmtVueTpl.value = parseVueTemplateTag(Example3);
      fmtVueTsc.value = parseVueScriptTag(Example3);
    } else {
      fmtVueTpl.value = parseVueTemplateTag(Example1);
      fmtVueTsc.value = parseVueScriptTag(Example1);
    }
  },
  { immediate: true }
);

const exampleVariants = [
  { value: 'default', label: 'Basic' },
  { value: 'single-color', label: 'Multi column : single color' },
  { value: 'multi-color', label: 'Multi column : multiple colors' },
] satisfies TRadioInputProps[];

const contentCls = ['h-full min-h-40', 'py-8 px-4 md:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Radio Group</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="ps-2">
          <BsRadioGroup v-model="sample" :items="exampleVariants" column="1">
            <label class="col-form-label font-weight-semibold">Select example:</label>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <RadioExample3 v-if="sample === 'single-color'" />
          <RadioExample4 v-else-if="sample === 'multi-color'" />
          <RadioExample2 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
