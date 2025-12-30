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
  btnSizeSrc,
  btnStateSrc,
} = setupToggleButtonOverview('ToggleField', Example1, Example2);

const tabIndex = ref(0);
const selectedDrink = ref<string>();
const drinkSrc1 = dsFavoriteDrinks();
const iconPositionSrc = buttonIconPositions();
const contentCls = ['h-full min-h-40', 'flex items-center', 'py-8'];
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
                <BsCombobox v-model="btnVariant" :data-source="btnVariantSrc" filled floating-label>
                  <label>Variant:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="btnShape" :data-source="btnShapeSrc" filled floating-label>
                  <label>Shape:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="btnSize" :data-source="btnSizeSrc" filled floating-label>
                  <label>Size:</label>
                </BsCombobox>
              </div>
              <div class="mb-3">
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
