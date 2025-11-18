<script setup lang="ts">
import {
  buttonColors,
  buttonIconPositions,
  buttonShapes,
  buttonSizes,
  buttonVariants,
  changeButtonColor,
  changeButtonElevated,
  changeButtonShape,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  iconAnimationVariants,
} from '@shares/buttonApi.ts';
import { componentStates } from '@shares/showcaseDataApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import { type TButtonColor, type TButtonSize, type TIconPosition } from 'vue-mdbootstrap';

const props = defineProps<{ showColor?: boolean }>();

const example = await import('../examples/ButtonExample1.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);

let iconName = 'settings';
if (props.showColor) {
  iconName = 'favorite_filled';
}

const btnColor = ref<TButtonColor>('default');
const btnVariant = ref<string>();
const btnShape = ref<string | undefined>('pill');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string | undefined>();
const btnElevated = ref(false);
const hasIcon = ref(false);
const btnIcon = ref<string>();
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();

function changeIconSize(data?: string): string | undefined {
  if (hasIcon.value) {
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

function changeIconPosition(data?: string): string | undefined {
  if (hasIcon.value && iconPosition.value) {
    return iconPosition.value === 'right'
      ? data?.replace('{$iconPosition}', `icon-position="right"`)
      : data;
  }

  return data;
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);

  if (props.showColor) {
    rawCode = changeButtonColor(btnColor, rawCode);
  }

  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonSize(btnSize, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);
  rawCode = changeIconSize(rawCode);
  rawCode = changeIconPosition(rawCode);

  if (!props.showColor) {
    rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode);
  }

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

  if (hasIcon.value) {
    btnIcon.value = undefined;
    await nextTick(() => {
      btnIcon.value = iconName;
    });
  }
});

watch(hasIcon, (value) => {
  btnIcon.value = value ? iconName : undefined;
  iconAnimation.value = value ? iconAnimation.value : undefined;
});

watch(hasAnimation, (value) => {
  iconAnimation.value = value ? iconAnimation.value : undefined;
});

const btnColors = buttonColors();
const btnVariants = buttonVariants();
const btnShapes = buttonShapes();
const btnSizes = buttonSizes();
const btnStates = componentStates();
const iconPositions = buttonIconPositions();
const iconAnimations = iconAnimationVariants();

onMounted(() => {
  // trigger reactivity on first load
  btnVariant.value = 'filled';
});

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
      <h2>{{ showColor ? 'Color Variants' : 'Overview' }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox
          v-if="showColor"
          v-model="btnColor"
          :data-source="btnColors"
          filled
          floating-label
        >
          <label>Color:</label>
        </BsCombobox>
        <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <BsCombobox
          v-if="!showColor"
          v-model="btnShape"
          :data-source="btnShapes"
          filled
          floating-label
        >
          <label>Shape:</label>
        </BsCombobox>
        <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
          <label>Size:</label>
        </BsCombobox>
        <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
          <label>State:</label>
        </BsCombobox>

        <div class="w-full">
          <div class="flex md-gap-x-3">
            <BsCheckbox
              v-model="btnElevated"
              :disabled="btnState === 'readonly' || btnState === 'disabled'"
              :value="true"
            >
              Elevated
            </BsCheckbox>
            <BsCheckbox v-model="hasIcon" :value="true"> Icon</BsCheckbox>
          </div>
          <BsRadioGroup
            v-model="iconPosition"
            :disabled="!hasIcon"
            :items="iconPositions"
            column="2"
          >
            <div class="col-form-label select-none">Icon Position:</div>
          </BsRadioGroup>
        </div>

        <div v-if="!showColor">
          <BsCheckbox v-model="hasAnimation" :disabled="!hasIcon" :value="true">
            Animation
          </BsCheckbox>
          <BsRadioGroup
            v-model="iconAnimation"
            :disabled="!hasIcon || !hasAnimation"
            :items="iconAnimations"
            column="2"
          />
        </div>
      </template>

      <template #content>
        <div
          :class="[
            'h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg',
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
