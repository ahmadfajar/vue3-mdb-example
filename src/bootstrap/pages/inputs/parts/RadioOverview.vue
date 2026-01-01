<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  changeComponentColor,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/RadioExample1.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const color = ref<string>('default');
const radio1 = ref();

const rawTemplate = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

useWatcherDefaultValue({ refObj: color, default: 'default' });

watchEffect(() => {
  const rawCode = changeComponentColor(color, rawTemplate);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode, false);
});

const colorSrc = dsContextColors(['dark', 'light']);
const contentCls = ['h-full min-h-40 flex flex-col', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  colorSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="mt-4">
          <BsCombobox v-model="color" :data-source="colorSrc" filled floating-label>
            <label>Select Color:</label>
          </BsCombobox>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div class="col-form-label">Select an option:</div>
          <div v-for="idx in 3" :key="'option-' + idx">
            <BsRadio v-model="radio1" :color="color" :value="idx"> Option {{ idx }} </BsRadio>
          </div>
          <div class="mt-4">
            Value: <b>{{ radio1 }}</b>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
