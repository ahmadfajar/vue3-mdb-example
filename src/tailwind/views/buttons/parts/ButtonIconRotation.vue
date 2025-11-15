<script setup lang="ts">
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  buttonIconPositions,
  buttonSizes,
  buttonVariants,
  iconFlips,
  iconRotations,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import type { TButtonSize, TIconFlip, TIconPosition, TIconRotation } from 'vue-mdbootstrap';

const example = await import('../examples/ButtonExample1.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);

const iconName = 'shopping_cart';
const btnVariant = ref();
const btnSize = ref('md');
const btnIcon = ref<string>();
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const iconFlip = ref<TIconFlip>();
const iconRotation = ref<TIconRotation>();

function changeButtonVariant(data?: string): string | undefined {
  switch (btnVariant.value) {
    case 'tonal':
    case 'outlined':
    case 'flat':
      return data?.replace('{$variants}', btnVariant.value);
    default:
      return data;
  }
}

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

function changeIconFlip(data?: string): string | undefined {
  switch (iconFlip.value) {
    case 'horizontal':
    case 'vertical':
    case 'both':
      return data?.replace('{$iconFlip}', `icon-flip="${iconFlip.value}"`);
    default:
      return data;
  }
}

function changeIconRotation(data?: string): string | undefined {
  switch (iconRotation.value) {
    case '90':
    case '180':
    case '270':
      return data?.replace('{$iconRotation}', `icon-rotation="${iconRotation.value}"`);
    default:
      return data;
  }
}

function changeIconPosition(data?: string): string | undefined {
  return iconPosition.value === 'right'
    ? data?.replace('{$iconPosition}', `icon-position="right"`)
    : data;
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(rawTemplate.value);
  rawCode = changeButtonSize(rawCode);
  rawCode = changeIconFlip(rawCode);
  rawCode = changeIconRotation(rawCode);
  rawCode = changeIconPosition(rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

watch(
  () => btnSize.value,
  async (value) => {
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
  }
);

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
