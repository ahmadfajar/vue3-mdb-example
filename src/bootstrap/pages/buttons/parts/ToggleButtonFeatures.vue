<script setup lang="ts">
import {
  buttonIconPositions,
  dsFavoriteDrinks,
  setupToggleButtonOverview,
} from '@shares/buttonApi.ts';
import { ref } from 'vue';
import type { TButtonSize } from 'vue-mdbootstrap';
import Example1 from '../examples/ToggleButtonExample1.vue?raw';
import Example2 from '../examples/ToggleButtonExample2.vue?raw';

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
  drinkSrc2Ref,
  btnVariantSrc,
  btnShapeSrc,
  btnSizeSrc,
  btnStateSrc,
} = setupToggleButtonOverview('ToggleButton', Example1, Example2);

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
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="btnVariant" :data-source="btnVariantSrc" filled floating-label>
          <label>Variant:</label>
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
            :items="iconPositionSrc"
            column="2"
          >
            <div class="col-form-label select-none">Icon Position:</div>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div :class="showIcon ? contentCls.concat('px-3 lg:px-6') : contentCls.concat('px-8')">
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
