<script setup lang="ts">
import {
  changeProgressBarStripes,
  changeProgressBarValuePosition,
  changeProgressThickness,
  changeProgressValue,
  dsProgressBarValuePosition,
  dsProgressBarVariants,
} from '@shares/progressApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  addWatcherForDefaultValue,
  changeComponentColor,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';

const example = await import('../examples/ProgressBarExample1.vue?raw');
const rawTemplate = parseVueTemplateTag(example.default);

const fmtVueTpl = ref<string>();
const tabIndex = ref(0);
const progress1 = ref(50);
const variant = ref('default');
const color = ref('primary');
const thickness = ref<number>();
const showValue = ref(false);
const valuePosition = ref('inside');

addWatcherForDefaultValue(
  { refObj: color, default: 'primary' },
  { refObj: variant, default: 'default' },
  { refObj: valuePosition, default: 'inside' }
);

watchEffect(() => {
  let rawCode = changeProgressValue('determinate', progress1.value, rawTemplate);
  rawCode = changeComponentColor(color, rawCode);
  rawCode = changeProgressBarValuePosition(showValue.value, valuePosition.value, rawCode);
  rawCode = changeProgressThickness('bar', thickness.value || 0, rawCode);
  rawCode = changeProgressBarStripes(variant.value, rawCode);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const colorSrc = dsContextColors(['dark', 'light']);
const positionSrc = dsProgressBarValuePosition();
const variantSrc = dsProgressBarVariants();
const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-3 lg:px-8 md:rounded-lg'];

onBeforeUnmount(() => {
  colorSrc.proxy.destroy();
  positionSrc.proxy.destroy();
  variantSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <div class="min-h-84">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="material">
            <BsTab label="General">
              <div class="flex flex-col gap-y-3">
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
                <div class="ps-2">
                  <BsCheckbox v-model="showValue" :value="true">Show Value</BsCheckbox>
                </div>
                <BsCombobox
                  v-model="valuePosition"
                  :data-source="positionSrc"
                  :disabled="!showValue"
                  filled
                  floating-label
                >
                  <label>Value Position:</label>
                </BsCombobox>
              </div>
            </BsTab>
            <BsTab label="Styles">
              <div class="flex flex-col gap-y-4">
                <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
                  <label>Style Variant:</label>
                </BsCombobox>
                <BsCombobox v-model="color" :data-source="colorSrc" filled floating-label>
                  <label>Color:</label>
                </BsCombobox>
                <BsNumericField
                  v-model="thickness"
                  filled
                  floating-label
                  max-value="50"
                  min-value="2"
                  suffix="px"
                >
                  <label>Thickness</label>
                </BsNumericField>
              </div>
            </BsTab>
          </BsTabs>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div class="w-full">
            <BsProgressBar
              v-model="progress1"
              :color="color"
              :height="thickness"
              :show-value="showValue"
              :striped="['striped', 'striped-animation'].includes(variant)"
              :striped-animation="variant === 'striped-animation'"
              :value-position="valuePosition"
            />
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
