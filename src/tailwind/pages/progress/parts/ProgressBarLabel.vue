<script setup lang="ts">
import {
  changeProgressBarLabel,
  changeProgressBarLabelPosition,
  changeProgressValue,
  dsProgressBarLabelAlignment,
  dsProgressBarLabelPosition,
} from '@shares/progressApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  useWatcherDefaultValue,
  changeComponentColor,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/ProgressBarExample2.vue?raw';

const fmtVueTpl = ref<string>();
const progress1 = ref(50);
const color = ref('primary');
const textLabel = ref('Marketing Performance');
const labelAlignment = ref('center');
const labelPosition = ref('top');
const rawTemplate = parseVueTemplateTag(Example);

useWatcherDefaultValue(
  { refObj: color, default: 'primary' },
  { refObj: labelAlignment, default: 'center' },
  { refObj: labelPosition, default: 'top' }
);

watchEffect(() => {
  let rawCode = changeProgressValue('determinate', progress1.value, rawTemplate);
  rawCode = changeComponentColor(color, rawCode);
  rawCode = changeProgressBarLabel(textLabel.value, rawCode);
  rawCode = changeProgressBarLabelPosition(labelAlignment.value, labelPosition.value, rawCode);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const colorSrc = dsContextColors(['dark', 'light']);
const alignmentSrc = dsProgressBarLabelAlignment();
const positionSrc = dsProgressBarLabelPosition();
const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-3 lg:px-8'];

onBeforeUnmount(() => {
  colorSrc.proxy.destroy();
  positionSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Text Label</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsNumericField
          v-model="progress1"
          filled
          floating-label
          max-value="100"
          min-value="0"
          suffix="%"
        >
          <label>Value</label>
        </BsNumericField>
        <BsTextField v-model="textLabel" filled floating-label>
          <label>Text label</label>
        </BsTextField>
        <BsCombobox v-model="labelAlignment" :data-source="alignmentSrc" filled floating-label>
          <label>Label Alignment:</label>
        </BsCombobox>
        <BsCombobox v-model="labelPosition" :data-source="positionSrc" filled floating-label>
          <label>Label Position:</label>
        </BsCombobox>
        <BsCombobox v-model="color" :data-source="colorSrc" class="mb-3" filled floating-label>
          <label>Color:</label>
        </BsCombobox>
      </template>

      <template #content>
        <div :class="contentCls">
          <div class="w-full">
            <BsProgressBar
              v-model="progress1"
              :color="color"
              :label="textLabel"
              :label-alignment="labelAlignment"
              :label-position="labelPosition"
              show-value
            />
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
