<script setup lang="ts">
import {
  buttonIconPositions,
  buttonShapes,
  buttonSizes,
  buttonStates,
  buttonVariants,
  iconAnimationVariants,
} from '@shares/showcaseDataApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import { type TButtonSize, type TIconPosition } from 'vue-mdbootstrap';

const example = await import('./examples/ButtonExample1.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const iconName = 'settings';
const btnVariant = ref();
const btnShape = ref('pill');
const btnSize = ref('md');
const btnState = ref<string>('default');
const btnElevated = ref(false);
const hasIcon = ref(false);
const btnIcon = ref<string>();
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();

function changeButtonVariant(data?: string): string | undefined {
  switch (btnVariant.value) {
    case 'tonal':
      return data?.replace('{$variants}', 'tonal');
    case 'outlined':
      return data?.replace('{$variants}', 'outlined');
    case 'flat':
      return data?.replace('{$variants}', 'flat');
    default:
      return data;
  }
}

function changeButtonShape(data?: string): string | undefined {
  switch (btnShape.value) {
    case 'rounded':
    case 'pill-off':
      return data?.replace('{$shapes}', btnShape.value);
    default:
      return data;
  }
}

function changeButtonSize(data?: string): string | undefined {
  switch (btnSize.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      return data?.replace('{$sizes}', `size="${btnSize.value}"`);
    default:
      return data;
  }
}

function changeButtonState(data?: string): string | undefined {
  switch (btnState.value) {
    case 'disabled':
    case 'readonly':
    case 'active':
      return data?.replace('{$states}', btnState.value);
    default:
      return data;
  }
}

function changeButtonElevated(data?: string): string | undefined {
  if (btnElevated.value) {
    return data?.replace('{$raised}', 'raised');
  }

  return data;
}

function changeButtonIcon(data?: string): string | undefined {
  if (hasIcon.value) {
    const tmp = data?.replace('{$iconName}', `icon="${iconName}"`);

    switch (btnSize.value) {
      case 'xs':
        return tmp?.replace('{$iconSize}', `icon-size="16"`);
      case 'sm':
        return tmp?.replace('{$iconSize}', `icon-size="20"`);
      case 'lg':
        return tmp?.replace('{$iconSize}', `icon-size="30"`);
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

function changeIconAnimation(data?: string): string | undefined {
  if (hasAnimation.value && iconAnimation.value) {
    return data?.replace('{$iconAnimation}', `icon-${iconAnimation.value}`);
  }

  return data;
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(rawTemplate.value);
  rawCode = changeButtonShape(rawCode);
  rawCode = changeButtonSize(rawCode);
  rawCode = changeButtonState(rawCode);
  rawCode = changeButtonElevated(rawCode);
  rawCode = changeButtonIcon(rawCode);
  rawCode = changeIconPosition(rawCode);
  rawCode = changeIconAnimation(rawCode);

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

    if (hasIcon.value) {
      btnIcon.value = undefined;
      await nextTick(() => {
        btnIcon.value = iconName;
      });
    }
  }
);

watch(
  () => hasIcon.value,
  (value) => {
    btnIcon.value = value ? iconName : undefined;
    iconAnimation.value = value ? iconAnimation.value : undefined;
  }
);
watch(
  () => hasAnimation.value,
  (value) => {
    iconAnimation.value = value ? iconAnimation.value : undefined;
  }
);

const btnVariants = buttonVariants();
const btnShapes = buttonShapes();
const btnSizes = buttonSizes();
const btnStates = buttonStates();
const iconPositions = buttonIconPositions();
const iconAnimations = iconAnimationVariants();

onMounted(() => {
  // trigger reactivity on first load
  btnVariant.value = 'filled';
});

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnShapes.proxy.destroy();
  btnSizes.proxy.destroy();
});
</script>

<template>
  <div class="docs-body">
    <div class="section-demo">
      <ShowcaseBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
        <template #side-panel>
          <h5 class="mt-2">Configuration Options:</h5>

          <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
            <label>Variant:</label>
          </BsCombobox>
          <BsCombobox v-model="btnShape" :data-source="btnShapes" filled floating-label>
            <label>Shape:</label>
          </BsCombobox>
          <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
            <label>Size:</label>
          </BsCombobox>
          <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
            <label>State:</label>
          </BsCombobox>

          <div class="flex md-gap-x-2">
            <BsCheckbox
              v-model="btnElevated"
              :disabled="btnState === 'readonly' || btnState === 'disabled'"
              :value="true"
            >
              Elevated
            </BsCheckbox>
            <BsCheckbox v-model="hasIcon" :value="true"> Icon </BsCheckbox>
          </div>
          <BsRadioGroup
            v-model="iconPosition"
            :disabled="!hasIcon"
            :items="iconPositions"
            column="2"
          >
            <div class="col-form-label select-none">Icon Position:</div>
          </BsRadioGroup>
          <div>
            <BsCheckbox v-model="hasAnimation" :disabled="!hasIcon" :value="true">
              Icon Animation
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
          <div class="h-full flex flex-col items-center justify-center">
            <BsButton
              :active="btnState === 'active'"
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
      </ShowcaseBox>
    </div>
  </div>
</template>
