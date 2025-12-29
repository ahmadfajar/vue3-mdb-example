<script setup lang="ts">
import {
  buttonIconPositions,
  changeButtonElevated,
  changeButtonIconSize,
  changeButtonShape,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconPosition,
  dsButtonShapes,
  dsButtonSizes,
  dsFavoriteDrinks,
  dsFavoriteDrinksWithIcon,
  dsToggleButtonVariants,
  parseExampleSourceCode,
} from '@shares/buttonApi.ts';
import { changeFieldHelpText, disableFieldPersistentHelpText } from '@shares/fieldApi.ts';
import { stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  dsComponentStatesRD,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, type Ref, ref, watch, watchEffect } from 'vue';
import type { TButtonSize, TIconPosition, TInputOptionItem } from 'vue-mdbootstrap';
import Example1 from '../examples/ToggleFieldExample1.vue?raw';
import Example2 from '../examples/ToggleFieldExample2.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const rawTemplate = ref<string>();
const tabIndex = ref(0);
const btnVariant = ref<string | undefined>('filled');
const btnShape = ref<string | undefined>('pill');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string>();
const btnElevated = ref(false);
const showIcon = ref(false);
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const helpText = ref<string>('Select one of the options above as your favorite drink');
const showHelpText = ref(false);
const disablePersistentHelpText = ref(false);
const selectedDrink = ref<string>();
const drinkSrc2Ref = ref<TInputOptionItem[]>([]);
const drinkSrc1 = dsFavoriteDrinks();
const drinkSrc2 = dsFavoriteDrinksWithIcon();

useWatcherDefaultValue(
  { refObj: btnVariant, default: 'filled' },
  { refObj: btnShape, default: 'pill' },
  { refObj: iconPosition, default: 'left' }
);

watch(showIcon, (value) => {
  if (value) {
    parseExampleSourceCode(Example2, rawTemplate, fmtVueTsc);
  } else {
    parseExampleSourceCode(Example1, rawTemplate, fmtVueTsc);
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

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonSize(btnSize as Ref<TButtonSize | undefined>, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);

  if (showIcon.value) {
    rawCode = changeButtonIconSize(iconSize, btnSize as Ref<TButtonSize | undefined>, rawCode);
    rawCode = changeIconPosition(iconPosition as Ref<TIconPosition | undefined>, rawCode);
  }
  if (showHelpText.value && rawCode) {
    rawCode = changeFieldHelpText(helpText.value, rawCode);
    rawCode = disableFieldPersistentHelpText(disablePersistentHelpText.value, rawCode);
  } else {
    disablePersistentHelpText.value = false;
  }

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnColors = dsContextColors();
const btnVariants = dsToggleButtonVariants();
const btnShapes = dsButtonShapes();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStatesRD();
const iconPositions = buttonIconPositions();
const contentCls = ['h-full min-h-40', 'flex items-center', 'py-8'];

drinkSrc2Ref.value = drinkSrc2;
parseExampleSourceCode(Example1, rawTemplate, fmtVueTsc);

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
        <div class="min-h-116">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="md3">
            <BsTab label="General">
              <div class="mb-4">
                <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
                  <label>Variant:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="btnShape" :data-source="btnShapes" filled floating-label>
                  <label>Shape:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
                  <label>Size:</label>
                </BsCombobox>
              </div>
              <div class="mb-3">
                <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
                  <label>State:</label>
                </BsCombobox>
              </div>
              <div class="ps-2">
                <BsSwitch
                  v-model="btnElevated"
                  :disabled="btnState === 'readonly' || btnState === 'disabled'"
                  :value="true"
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Elevated
                </BsSwitch>
              </div>
            </BsTab>
            <BsTab label="Others">
              <div class="mb-3">
                <BsTextField v-model="helpText" filled floating-label>
                  <label>Enter Help Text</label>
                </BsTextField>
              </div>
              <div class="mb-4 flex flex-col ps-2">
                <BsCheckbox v-model="showHelpText" :value="true"> Show Help Text</BsCheckbox>
                <BsCheckbox
                  v-model="disablePersistentHelpText"
                  :disabled="!showHelpText"
                  :value="true"
                >
                  Disable Persistent Help Text
                </BsCheckbox>
                <BsCheckbox v-model="showIcon" :value="true"> Show Icon</BsCheckbox>
                <BsRadioGroup
                  v-model="iconPosition"
                  :disabled="!showIcon"
                  :items="iconPositions"
                  column="2"
                >
                  <div class="col-form-label select-none">Icon Position:</div>
                </BsRadioGroup>
              </div>
            </BsTab>
          </BsTabs>
        </div>
      </template>

      <template #content>
        <div :class="showIcon ? contentCls.concat('px-3 lg:px-6') : contentCls.concat('px-8')">
          <BsToggleField
            v-if="showIcon"
            v-model="selectedDrink"
            :disabled="btnState === 'disabled'"
            :help-text="showHelpText && !!helpText ? helpText : undefined"
            :icon-position="iconPosition"
            :icon-size="iconSize"
            :items="drinkSrc2Ref"
            :outlined="btnVariant === 'outlined'"
            :persistent-help-off="disablePersistentHelpText"
            :pill-off="btnShape === 'pill-off'"
            :raised="btnElevated"
            :readonly="btnState === 'readonly'"
            :rounded="btnShape === 'rounded'"
            :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
            :tonal="btnVariant === 'tonal'"
          >
            <div class="sm:w-33 col-form-label font-weight-medium">Favorite Drink</div>
          </BsToggleField>
          <BsToggleField
            v-else
            v-model="selectedDrink"
            :disabled="btnState === 'disabled'"
            :help-text="showHelpText && !!helpText ? helpText : undefined"
            :icon-position="iconPosition"
            :icon-size="iconSize"
            :items="drinkSrc1"
            :outlined="btnVariant === 'outlined'"
            :persistent-help-off="disablePersistentHelpText"
            :pill-off="btnShape === 'pill-off'"
            :raised="btnElevated"
            :readonly="btnState === 'readonly'"
            :rounded="btnShape === 'rounded'"
            :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
            :tonal="btnVariant === 'tonal'"
          >
            <div class="sm:w-33 col-form-label font-weight-medium">Favorite Drink</div>
          </BsToggleField>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
