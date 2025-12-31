<script setup lang="ts">
import {
  changeButtonElevated,
  changeButtonShape,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  changeIconPosition,
  dsButtonShapes,
  dsButtonSizes,
  dsButtonVariants,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  changeComponentColor,
  dsComponentStates,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, type Ref, ref, watch, watchEffect } from 'vue';
import { type TButtonColor, type TButtonSize, type TIconPosition } from 'vue-mdbootstrap';
import Example from '../examples/ButtonExample1.vue?raw';

const fmtVueTpl = ref<string>();
const iconName = 'settings';
const tabIndex = ref(0);
const btnColor = ref<TButtonColor>('default');
const btnVariant = ref<string | undefined>('filled');
const btnShape = ref<string | undefined>('pill');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string | undefined>();
const btnElevated = ref(false);
const showIcon = ref(false);
const btnIcon = ref<string>();
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();
const rawTemplate = parseVueTemplateTag(Example);

function changeIconSize(data?: string): string | undefined {
  if (showIcon.value) {
    const tmp = data?.replace('{$icon}', `icon="${btnIcon.value}"`);

    switch (btnSize.value) {
      case 'xs':
      case 'sm':
      case 'lg':
        return tmp?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
      default:
        return tmp;
    }
  }

  return data;
}

function stopAnimation() {
  hasAnimation.value = false;
  iconAnimation.value = undefined;
}

useWatcherDefaultValue(
  { refObj: btnVariant, default: 'filled' },
  { refObj: btnColor, default: 'default' },
  { refObj: btnShape, default: 'pill' }
);

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

  if (!value) {
    await nextTick(() => {
      btnSize.value = 'md';
    });
  }

  if (showIcon.value) {
    btnIcon.value = undefined;
    await nextTick(() => {
      btnIcon.value = iconName;
    });
  }
});

watchEffect(() => {
  let rawCode: string | undefined;

  btnIcon.value = showIcon.value ? iconName : undefined;
  iconAnimation.value = showIcon.value ? iconAnimation.value : undefined;
  hasAnimation.value = !!iconAnimation.value;

  rawCode = changeButtonVariant(btnVariant, rawTemplate);
  if (btnColor.value !== 'default') {
    rawCode = changeComponentColor(btnColor, rawCode!);
  }

  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonSize(btnSize as Ref<TButtonSize | undefined>, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);
  rawCode = changeIconSize(rawCode);
  rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode);

  if (showIcon.value) {
    rawCode = changeIconPosition(iconPosition, rawCode);
  }
  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnColors = dsContextColors();
const btnVariants = dsButtonVariants();
const btnShapes = dsButtonShapes();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStates();

onBeforeUnmount(() => {
  btnColors.proxy.destroy();
  btnVariants.proxy.destroy();
  btnShapes.proxy.destroy();
  btnSizes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <div class="min-h-124">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="md3">
            <BsTab label="General">
              <div class="flex flex-col gap-y-4">
                <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
                  <label>Variant:</label>
                </BsCombobox>
                <BsCombobox v-model="btnShape" :data-source="btnShapes" filled floating-label>
                  <label>Shape:</label>
                </BsCombobox>
                <BsCombobox v-model="btnColor" :data-source="btnColors" filled floating-label>
                  <label>Color:</label>
                </BsCombobox>
                <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
                  <label>Size:</label>
                </BsCombobox>
                <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
                  <label>State:</label>
                </BsCombobox>
              </div>
            </BsTab>
            <BsTab label="Others">
              <div class="ps-2">
                <div class="flex flex-col gap-y-1">
                  <BsCheckbox
                    v-model="btnElevated"
                    :disabled="btnState === 'readonly' || btnState === 'disabled'"
                    :value="true"
                  >
                    Elevated
                  </BsCheckbox>
                  <BsCheckbox v-model="showIcon" :value="true">Show Icon</BsCheckbox>
                </div>

                <div class="mt-3 mb-1 select-none font-weight-medium">Icon Position:</div>
                <div class="row row-cols-2">
                  <div class="col">
                    <BsRadio v-model="iconPosition" value="left"> Left </BsRadio>
                  </div>
                  <div class="col">
                    <BsRadio v-model="iconPosition" value="right"> Right </BsRadio>
                  </div>
                </div>

                <div class="mt-3 mb-1 select-none font-weight-medium">Animation:</div>
                <div class="row row-cols-2">
                  <div class="col">
                    <BsRadio v-model="iconAnimation" :disabled="!showIcon" value="spin">
                      Spin
                    </BsRadio>
                  </div>
                  <div class="col">
                    <BsRadio v-model="iconAnimation" :disabled="!showIcon" value="pulse">
                      Pulse
                    </BsRadio>
                  </div>
                </div>
              </div>
              <div class="grid mt-5">
                <BsButton :disabled="!hasAnimation" @click="stopAnimation()">
                  Stop Animation
                </BsButton>
              </div>
            </BsTab>
          </BsTabs>
        </div>
      </template>

      <template #content>
        <div
          :class="[
            'h-full min-h-40 flex items-center justify-center px-6 py-8 md:rounded-lg',
            btnColor === 'light' && btnVariant !== 'filled' && btnState !== 'disabled'
              ? 'bg-gray-800'
              : '',
          ]"
        >
          <BsButton
            :active="btnState === 'active'"
            :color="btnColor"
            :disabled="btnState === 'disabled'"
            :flat="btnVariant === 'flat'"
            :icon="btnIcon"
            :icon-position="iconPosition"
            :icon-pulse="iconAnimation === 'pulse'"
            :icon-size="iconSize"
            :icon-spin="iconAnimation === 'spin'"
            :outlined="btnVariant === 'outlined'"
            :pill-off="btnShape === 'pill-off'"
            :raised="btnElevated"
            :readonly="btnState === 'readonly'"
            :rounded="btnShape === 'rounded'"
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
