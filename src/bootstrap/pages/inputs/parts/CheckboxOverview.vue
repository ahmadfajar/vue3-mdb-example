<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  useWatcherDefaultValue,
  dsContextColors,
  changeComponentColor,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/CheckboxExample1.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const color = ref<string>('default');
const checkbox1 = ref();

const rawTemplate = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

useWatcherDefaultValue({ refObj: color, default: 'default' });

watchEffect(() => {
  const rawCode = changeComponentColor(color, rawTemplate);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode, false);
});

const colorSrc = dsContextColors(['dark', 'light']);
const contentCls = ['h-full flex items-center justify-center min-h-40', 'p-3 p-md-5'];

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
          <BsCheckbox v-model="checkbox1" :color="color" value="accepted">
            Accept the terms and use
          </BsCheckbox>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
