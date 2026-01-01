<script setup lang="ts">
import {
  buttonIconPositions,
  changeButtonVariant,
  changeIconFlip,
  changeIconPosition,
  changeIconRotation,
  dsButtonSizes,
  dsButtonVariants,
  dsIconFlips,
  dsIconRotations,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import type { TButtonSize, TIconFlip, TIconPosition, TIconRotation } from 'vue-mdbootstrap';
import Example from '../examples/ButtonExample1.vue?raw';

const fmtVueTpl = ref<string>();
const iconName = 'shopping_cart';
const btnVariant = ref<string | undefined>('filled');
const btnSize = ref<string | undefined>('md');
const btnIcon = ref<string | undefined>(iconName);
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const iconFlip = ref<TIconFlip>();
const iconRotation = ref<TIconRotation>();
const rawTemplate = parseVueTemplateTag(Example);

function changeButtonSize(data?: string): string | undefined {
  let tmp = data?.replace('{$icon}', `icon="${btnIcon.value}"`);

  switch (btnSize.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      tmp = tmp?.replace('{$sizes}', `size="${btnSize.value}"`);
      return tmp?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
    default:
      return tmp;
  }
}

useWatcherDefaultValue({ refObj: btnVariant, default: 'filled' });

watch(btnSize, async (value) => {
  if (value === 'lg') {
    iconSize.value = 30;
  } else if (value === 'sm') {
    iconSize.value = 20;
  } else if (value === 'xs') {
    iconSize.value = 16;
  } else {
    iconSize.value = 24;
  }

  btnIcon.value = undefined;
  await nextTick(() => {
    btnIcon.value = iconName;
    if (!value) {
      btnSize.value = 'md';
    }
  });
});

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate);
  rawCode = changeButtonSize(rawCode);
  rawCode = changeIconFlip(iconFlip, rawCode);
  rawCode = changeIconRotation(iconRotation, rawCode);
  rawCode = changeIconPosition(iconPosition, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnVariants = dsButtonVariants();
const btnSizes = dsButtonSizes();
const iconFlipSrc = dsIconFlips();
const iconRotationSrc = dsIconRotations();
const iconPositions = buttonIconPositions();

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnSizes.proxy.destroy();
  iconFlipSrc.proxy.destroy();
  iconRotationSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Icon Rotation</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
          <label>Size:</label>
        </BsCombobox>
        <BsCombobox
          v-model="iconFlip"
          :data-source="iconFlipSrc"
          :disabled="!!iconRotation"
          filled
          floating-label
        >
          <label>Flip Icon</label>
        </BsCombobox>
        <BsCombobox
          v-model="iconRotation"
          :data-source="iconRotationSrc"
          :disabled="!!iconFlip"
          filled
          floating-label
        >
          <label>Rotate Icon</label>
        </BsCombobox>

        <div class="ps-2">
          <BsRadioGroup v-model="iconPosition" :items="iconPositions" column="2">
            <div class="col-form-label select-none">Icon Position:</div>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center px-6 py-8">
          <BsButton
            :flat="btnVariant === 'flat'"
            :icon="btnIcon"
            :icon-flip="iconFlip"
            :icon-position="iconPosition"
            :icon-rotation="iconRotation"
            :icon-size="iconSize"
            :outlined="btnVariant === 'outlined'"
            :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
            :tonal="btnVariant === 'tonal'"
          >
            Button
          </BsButton>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
