<script setup lang="ts">
import {
  changeButtonElevated,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  dsButtonSizes,
  dsButtonVariants,
  iconAnimationVariants,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { addWatcherForDefaultValue, dsComponentStates } from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import type { TButtonSize } from 'vue-mdbootstrap';

const example = await import('../examples/ButtonExample2.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);

const iconName = 'settings';
const btnVariant = ref<string | undefined>('filled');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string | undefined>();
const btnElevated = ref(false);
const btnIcon = ref<string | undefined>(iconName);
const iconSize = ref(24);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();

function changeButtonIcon(data?: string): string | undefined {
  const tmp = data?.replace('{$icon}', `icon="${iconName}"`);

  switch (btnSize.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      return tmp?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
    default:
      return tmp;
  }
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonSize(btnSize, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);
  rawCode = changeButtonIcon(rawCode);
  rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

addWatcherForDefaultValue({ refObj: btnVariant, default: 'filled' });

watch(btnSize, async (value) => {
  if (value === 'lg') {
    iconSize.value = 32;
  } else if (value === 'sm') {
    iconSize.value = 22;
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

watch(hasAnimation, (value) => {
  iconAnimation.value = value ? iconAnimation.value : undefined;
});

const btnVariants = dsButtonVariants();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStates();
const iconAnimations = iconAnimationVariants();

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnSizes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Icon Button</h2>
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
        <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
          <label>State:</label>
        </BsCombobox>

        <div class="flex flex-col ps-2">
          <BsCheckbox
            v-model="btnElevated"
            :disabled="btnState === 'readonly' || btnState === 'disabled'"
            :value="true"
          >
            Elevated
          </BsCheckbox>
          <BsCheckbox v-model="hasAnimation" :value="true" class="mt-3"> Icon Animation</BsCheckbox>
          <BsRadioGroup
            v-model="iconAnimation"
            :disabled="!hasAnimation"
            :items="iconAnimations"
            class="mt-2"
            column="2"
          />
        </div>
      </template>

      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8">
          <BsButton
            :active="btnState === 'active'"
            :disabled="btnState === 'disabled'"
            :flat="btnVariant === 'flat'"
            :icon="btnIcon"
            :icon-pulse="iconAnimation === 'pulse'"
            :icon-size="iconSize"
            :icon-spin="iconAnimation === 'spin'"
            :outlined="btnVariant === 'outlined'"
            :raised="btnElevated"
            :readonly="btnState === 'readonly'"
            :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
            :tonal="btnVariant === 'tonal'"
            mode="icon"
            aria-label="Icon Button"
          />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
