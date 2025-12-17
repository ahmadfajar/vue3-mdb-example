<script setup lang="ts">
import {
  changeProgressBuffer,
  changeProgressMode,
  changeProgressSpinnerDiameter,
  changeProgressThickness,
  changeProgressValue,
  dsProgressModes,
} from '@shares/progressApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  useWatcherDefaultValue,
  changeComponentColor,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
if (props.section === 'spinner') {
  example = await import('../examples/ProgressExample2.vue?raw');
} else {
  example = await import('../examples/ProgressExample1.vue?raw');
}
const rawTemplate = parseVueTemplateTag(example.default);

const fmtVueTpl = ref<string>();
const pageTitle = ref('Bar');
const mode = ref('indeterminate');
const color = ref('default');
const thickness = ref(5);
const diameter = ref(60);
const barBuffer = ref(50);
const progressValue = ref(25);

if (props.section === 'spinner') {
  pageTitle.value = 'Spinner';
}

useWatcherDefaultValue(
  { refObj: color, default: 'default' },
  { refObj: mode, default: 'indeterminate' }
);

watchEffect(() => {
  let rawCode = changeProgressMode(mode.value, rawTemplate);
  rawCode = changeProgressValue(mode.value, progressValue.value, rawCode);
  rawCode = changeComponentColor(color, rawCode);
  rawCode = changeProgressThickness(props.section ?? 'bar', thickness.value, rawCode);

  if (props.section === 'spinner') {
    rawCode = changeProgressSpinnerDiameter(diameter.value, rawCode);
  } else {
    rawCode = changeProgressBuffer(mode.value, barBuffer.value, rawCode);
  }

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const modeSrc = dsProgressModes(props.section ?? 'bar');
const colorSrc = dsContextColors(['dark', 'light']);
const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];

onBeforeUnmount(() => {
  modeSrc.proxy.destroy();
  colorSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="mode" :data-source="modeSrc" filled floating-label>
          <label>Select Mode:</label>
        </BsCombobox>
        <BsCombobox v-model="color" :data-source="colorSrc" filled floating-label>
          <label>Select Color:</label>
        </BsCombobox>
        <BsNumericField
          v-if="section === 'spinner'"
          v-model="diameter"
          filled
          floating-label
          max-value="300"
          min-value="25"
        >
          <label>Diameter</label>
        </BsNumericField>
        <BsNumericField v-model="thickness" filled floating-label max-value="50" min-value="3">
          <label>Thickness</label>
        </BsNumericField>
        <BsNumericField
          v-if="section !== 'spinner'"
          v-model="barBuffer"
          :disabled="mode !== 'buffer'"
          filled
          floating-label
          max-value="100"
          min-value="0"
          suffix="%"
        >
          <label>Buffer</label>
        </BsNumericField>
        <BsNumericField
          v-model="progressValue"
          :disabled="mode === 'indeterminate'"
          class="mb-2"
          filled
          floating-label
          max-value="100"
          min-value="0"
          suffix="%"
        >
          <label>Value</label>
        </BsNumericField>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsProgress
            v-if="section === 'spinner'"
            :color="color"
            :diameter="diameter"
            :mode="mode"
            :model-value="progressValue"
            :stroke="thickness"
            type="spinner"
          />
          <BsProgress
            v-else
            :buffer="barBuffer"
            :color="color"
            :height="thickness"
            :mode="mode"
            :model-value="progressValue"
            class="w-full"
          />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
