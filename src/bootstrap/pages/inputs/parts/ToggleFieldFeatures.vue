<script setup lang="ts">
import {
  buttonIconPositions,
  dsFavoriteDrinks,
  setupToggleButtonOverview,
} from '@shares/buttonApi.ts';
import { ref } from 'vue';
import type { TButtonSize } from 'vue-mdbootstrap';
import Example1 from '../examples/ToggleFieldExample1.vue?raw';
import Example2 from '../examples/ToggleFieldExample2.vue?raw';

const {
  fmtVueTpl,
  fmtVueTsc,
  btnVariant,
  btnShape,
  btnColor,
  btnSize,
  btnState,
  btnElevated,
  showIcon,
  iconPosition,
  iconSize,
  helpText,
  showHelpText,
  disablePersistentHelpText,
  drinkSrc2Ref,
  btnVariantSrc,
  btnShapeSrc,
  btnColorSrc,
  btnSizeSrc,
  btnStateSrc,
} = setupToggleButtonOverview('ToggleField', Example1, Example2);

const tabIndex = ref(0);
const selectedDrink = ref<string>();
const drinkSrc1 = dsFavoriteDrinks();
const iconPositionSrc = buttonIconPositions();
const contentCls = ['h-full min-h-40', 'flex items-center', 'py-4 py-md-5 px-3'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div style="min-height: 460px">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="mt-2" style="margin-inline: -16px" variant="md3">
            <BsTab label="General">
              <div class="flex flex-col md-gap-y-4">
                <BsCombobox v-model="btnVariant" :data-source="btnVariantSrc" filled floating-label>
                  <label>Variant:</label>
                </BsCombobox>
                <BsCombobox v-model="btnColor" :data-source="btnColorSrc" filled floating-label>
                  <label>Color:</label>
                </BsCombobox>
                <BsCombobox v-model="btnShape" :data-source="btnShapeSrc" filled floating-label>
                  <label>Shape:</label>
                </BsCombobox>
                <BsCombobox v-model="btnSize" :data-source="btnSizeSrc" filled floating-label>
                  <label>Size:</label>
                </BsCombobox>
                <BsCombobox v-model="btnState" :data-source="btnStateSrc" filled floating-label>
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
              <div class="mb-3 flex flex-col ps-2">
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
                  :items="iconPositionSrc"
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
        <div :class="contentCls">
          <BsToggleField
            v-if="showIcon"
            v-model="selectedDrink"
            :color="btnColor"
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
            class="w-full ms-sm-0"
          >
            <div class="col-sm-3 col-form-label font-weight-medium">Favorite Drink</div>
          </BsToggleField>
          <BsToggleField
            v-else
            v-model="selectedDrink"
            :color="btnColor"
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
            class="w-full ms-sm-0"
          >
            <div class="col-sm-3 col-form-label font-weight-medium">Favorite Drink</div>
          </BsToggleField>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
