<script setup lang="ts">
import {
  buttonIconPositions,
  changeButtonElevated,
  changeButtonShape,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  dsButtonShapes,
  dsButtonSizes,
  dsToggleButtonVariants,
} from '@shares/buttonApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  addWatcherForDefaultValue,
  dsComponentStatesRD,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import type { TButtonSize, TIconPosition, TInputOptionItem } from 'vue-mdbootstrap';

const example1 = await import('../examples/ToggleButtonExample1.vue?raw');
const example2 = await import('../examples/ToggleButtonExample2.vue?raw');
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();
const btnVariant = ref<string | undefined>('filled');
const btnShape = ref<string | undefined>('pill');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string>();
const btnElevated = ref(false);
const showIcon = ref(false);
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const selectedDrink = ref<string>();
const drinkSrc2Ref = ref<TInputOptionItem[]>([]);

function parseSourceWithoutIcon() {
  rawTemplate.value = parseVueTemplateTag(example1.default);
  fmtVueTsc.value = parseVueScriptTag(example1.default);
}

function parseSourceWithIcon() {
  rawTemplate.value = parseVueTemplateTag(example2.default);
  fmtVueTsc.value = parseVueScriptTag(example2.default);
}

function changeIconSize(data?: string): string | undefined {
  if (showIcon.value) {
    switch (btnSize.value) {
      case 'xs':
      case 'sm':
      case 'lg':
        return data?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
      default:
        return data;
    }
  }

  return data;
}

function changeIconPosition(data?: string): string | undefined {
  if (showIcon.value && iconPosition.value) {
    return iconPosition.value === 'right'
      ? data?.replace('{$iconPosition}', `icon-position="right"`)
      : data;
  }

  return data;
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonSize(btnSize, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);
  rawCode = changeIconSize(rawCode);
  rawCode = changeIconPosition(rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

watch(showIcon, (value) => {
  if (value) {
    parseSourceWithIcon();
  } else {
    parseSourceWithoutIcon();
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

  if (!value) {
    await nextTick(() => {
      btnSize.value = 'md';
    });
  }
  if (showIcon.value) {
    drinkSrc2Ref.value = [];
    await nextTick(() => {
      drinkSrc2Ref.value = drinkSrc2;
    });
  }
});

addWatcherForDefaultValue(
  { refObj: btnVariant, default: 'filled' },
  { refObj: btnShape, default: 'pill' }
);

const btnColors = dsContextColors();
const btnVariants = dsToggleButtonVariants();
const btnShapes = dsButtonShapes();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStatesRD();
const iconPositions = buttonIconPositions();
const drinkSrc1: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
const drinkSrc2: TInputOptionItem[] = [
  { value: 'Tea', icon: 'glass_cup' },
  { value: 'Coffee', icon: 'coffee' },
  { value: 'Beer', icon: 'liquor' },
];
drinkSrc2Ref.value = drinkSrc2;

parseSourceWithoutIcon();

// onMounted(() => {
//   // trigger reactivity on first load
//   btnVariant.value = 'filled';
// });

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
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
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

        <div class="w-full ps-2">
          <div class="flex md-gap-x-3">
            <BsCheckbox
              v-model="btnElevated"
              :disabled="btnState === 'readonly' || btnState === 'disabled'"
              :value="true"
            >
              Elevated
            </BsCheckbox>
            <BsCheckbox v-model="showIcon" :value="true"> Show Icon</BsCheckbox>
          </div>
          <BsRadioGroup
            v-model="iconPosition"
            :disabled="!showIcon"
            :items="iconPositions"
            column="2"
          >
            <div class="col-form-label select-none">Icon Position:</div>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div
          :class="[
            'h-full flex items-center justify-center min-h-40  md:rounded-lg py-8',
            showIcon ? 'px-3 lg:px-6' : 'px-8',
          ]"
        >
          <div class="row gy-2">
            <div class="sm:w-33 pt-2 font-weight-medium">Favorite Drink</div>
            <div class="col-sm">
              <BsToggleButton
                v-if="showIcon"
                v-model="selectedDrink"
                :disabled="btnState === 'disabled'"
                :icon-position="iconPosition"
                :icon-size="iconSize"
                :items="drinkSrc2Ref"
                :outlined="btnVariant === 'outlined'"
                :pill-off="btnShape === 'pill-off'"
                :raised="btnElevated"
                :readonly="btnState === 'readonly'"
                :rounded="btnShape === 'rounded'"
                :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
                :tonal="btnVariant === 'tonal'"
              />
              <BsToggleButton
                v-else
                v-model="selectedDrink"
                :disabled="btnState === 'disabled'"
                :icon-position="iconPosition"
                :icon-size="iconSize"
                :items="drinkSrc1"
                :outlined="btnVariant === 'outlined'"
                :pill-off="btnShape === 'pill-off'"
                :raised="btnElevated"
                :readonly="btnState === 'readonly'"
                :rounded="btnShape === 'rounded'"
                :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
                :tonal="btnVariant === 'tonal'"
              />
            </div>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
