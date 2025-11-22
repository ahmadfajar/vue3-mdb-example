<script setup lang="ts">
import {
  buttonIconPositions,
  buttonSizes,
  buttonVariants,
  changeButtonVariant,
  changeIconFlip,
  changeIconPosition,
  changeIconRotation,
  iconFlips,
  iconRotations,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import type { TButtonSize, TIconFlip, TIconPosition, TIconRotation } from 'vue-mdbootstrap';

const example = await import('../examples/ButtonExample1.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);

const iconName = 'shopping_cart';
const btnVariant = ref<string>();
const btnSize = ref<string | undefined>('md');
const btnIcon = ref<string>();
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const iconFlip = ref<TIconFlip>();
const iconRotation = ref<TIconRotation>();

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

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonSize(rawCode);
  rawCode = changeIconFlip(iconFlip, rawCode);
  rawCode = changeIconRotation(iconRotation, rawCode);
  rawCode = changeIconPosition(iconPosition, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

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
  });
});

const btnVariants = buttonVariants();
const btnSizes = buttonSizes();
const iconFlipSrc = iconFlips();
const iconRotationSrc = iconRotations();
const iconPositions = buttonIconPositions();

onMounted(() => {
  // trigger reactivity on first load
  btnVariant.value = 'filled';
  btnIcon.value = iconName;
});

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnSizes.proxy.destroy();
  iconFlipSrc.proxy.destroy();
  iconRotationSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
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
        <BsCombobox v-model="iconFlip" :data-source="iconFlipSrc" filled floating-label>
          <label>Flip Icon</label>
        </BsCombobox>
        <BsCombobox v-model="iconRotation" :data-source="iconRotationSrc" filled floating-label>
          <label>Rotate Icon</label>
        </BsCombobox>

        <BsRadioGroup v-model="iconPosition" :items="iconPositions" column="2">
          <div class="col-form-label select-none">Icon Position:</div>
        </BsRadioGroup>
      </template>

      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg">
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
