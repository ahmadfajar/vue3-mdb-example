<script setup lang="ts">
import {
  dsFavoriteDrinks,
  dsFavoriteDrinksWithIcon,
  setupToggleButtonMultiSelect,
} from '@shares/buttonApi.ts';
import { ref } from 'vue';
import Example1 from '../examples/ToggleButtonExample5.vue?raw';
import Example2 from '../examples/ToggleButtonExample6.vue?raw';
import Example3 from '../examples/ToggleButtonExample7.vue?raw';
import Example4 from '../examples/ToggleButtonExample8.vue?raw';

const {
  fmtVueTpl,
  fmtVueTsc,
  btnVariant,
  btnShape,
  btnColor,
  btnState,
  btnElevated,
  useCheckedMark,
  showIcon,
  iconPosition,
  btnVariantSrc,
  btnShapeSrc,
  btnColorSrc,
  btnStateSrc,
  iconPositionSrc,
} = setupToggleButtonMultiSelect(Example1, Example2, Example3, Example4);

const selectedDrinks = ref<string[]>([]);
const drinkSrc1 = dsFavoriteDrinks();
const drinkSrc2 = dsFavoriteDrinksWithIcon();
const contentCls = ['h-full min-h-40', 'flex items-center', 'py-4 py-md-5 px-3 px-md-4'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Multi Select</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="btnVariant" :data-source="btnVariantSrc" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="btnColor" :data-source="btnColorSrc" filled floating-label>
          <label>Color:</label>
        </BsCombobox>
        <BsCombobox v-model="btnShape" :data-source="btnShapeSrc" filled floating-label>
          <label>Shape:</label>
        </BsCombobox>
        <BsCombobox v-model="btnState" :data-source="btnStateSrc" filled floating-label>
          <label>State:</label>
        </BsCombobox>

        <div class="w-full ps-2">
          <div class="flex flex-col md-gap-x-3">
            <BsCheckbox v-model="useCheckedMark" :value="true"> Use Check Mark </BsCheckbox>
            <BsCheckbox v-model="showIcon" :value="true"> Show Icon </BsCheckbox>
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
        <div :class="contentCls">
          <div class="w-full row gy-2">
            <div class="col-md-3 col-xl-4 pt-2 font-weight-medium">Favorite Drinks</div>
            <div class="col-md-9 col-xl-8">
              <BsToggleButton
                v-model="selectedDrinks"
                :color="btnColor"
                :disabled="btnState === 'disabled'"
                :icon-position="iconPosition"
                :items="showIcon ? drinkSrc2 : drinkSrc1"
                :outlined="btnVariant === 'outlined'"
                :pill-off="btnShape === 'pill-off'"
                :raised="btnElevated"
                :readonly="btnState === 'readonly'"
                :rounded="btnShape === 'rounded'"
                :tonal="btnVariant === 'tonal'"
                multiple
              >
                <template v-if="showIcon && useCheckedMark" #icon="item">
                  <BsSvgIcon
                    :icon="selectedDrinks.includes(item?.value as string) ? 'check' : item?.icon!"
                  />
                </template>
                <template v-else-if="!showIcon && useCheckedMark" #icon="item">
                  <BsSvgIcon v-if="selectedDrinks.includes(item?.value as string)" icon="check" />
                </template>
              </BsToggleButton>
            </div>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
