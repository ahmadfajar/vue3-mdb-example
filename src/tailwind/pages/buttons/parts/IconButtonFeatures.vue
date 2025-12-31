<script setup lang="ts">
import {
  changeButtonElevated,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  dsButtonSizes,
  dsButtonVariants,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { dsComponentStates, useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, type Ref, ref, watch, watchEffect } from 'vue';
import type { TButtonSize } from 'vue-mdbootstrap';
import Example from '../examples/ButtonExample2.vue?raw';

const fmtVueTpl = ref<string | null | undefined>();
const iconName = 'settings';
const btnVariant = ref<string | undefined>('filled');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string | undefined>();
const btnElevated = ref(false);
const btnIcon = ref<string | undefined>(iconName);
const iconSize = ref(24);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();
const rawTemplate = parseVueTemplateTag(Example);

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

function stopAnimation() {
  hasAnimation.value = false;
  iconAnimation.value = undefined;
}

useWatcherDefaultValue({ refObj: btnVariant, default: 'filled' });

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

watchEffect(() => {
  let rawCode: string | undefined;

  hasAnimation.value = !!iconAnimation.value;
  rawCode = changeButtonVariant(btnVariant, rawTemplate);
  rawCode = changeButtonSize(btnSize as Ref<TButtonSize>, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);
  rawCode = changeButtonIcon(rawCode);
  rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnVariants = dsButtonVariants();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStates();

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
          <div class="mt-3 mb-1 select-none font-weight-medium">Animation:</div>
          <div class="row row-cols-2">
            <div class="col">
              <BsRadio v-model="iconAnimation" value="spin"> Spin </BsRadio>
            </div>
            <div class="col">
              <BsRadio v-model="iconAnimation" value="pulse"> Pulse </BsRadio>
            </div>
          </div>
        </div>
        <div class="grid mb-4">
          <BsButton :disabled="!hasAnimation" @click="stopAnimation()"> Stop Animation </BsButton>
        </div>
      </template>

      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center px-6 py-8">
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
