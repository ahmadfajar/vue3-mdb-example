<script setup lang="ts">
import {
  dsFavoriteDrinks,
  dsFavoriteDrinksWithIcon,
  setupToggleButtonCheckedIcon,
} from '@shares/buttonApi.ts';
import { ref } from 'vue';
import Example1 from '../examples/ToggleButtonExample3.vue?raw';
import Example2 from '../examples/ToggleButtonExample4.vue?raw';

const {
  fmtVueTpl,
  fmtVueTsc,
  btnVariant,
  btnShape,
  btnColor,
  btnState,
  btnElevated,
  showIcon,
  iconPosition,
  btnVariantSrc,
  btnShapeSrc,
  btnColorSrc,
  btnStateSrc,
  iconPositionSrc,
} = setupToggleButtonCheckedIcon(Example1, Example2);

const selectedDrink = ref<string>();
const drinkSrc1 = dsFavoriteDrinks();
const drinkSrc2 = dsFavoriteDrinksWithIcon();
const contentCls = ['h-full min-h-40', 'flex items-center', 'py-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Checked Icon</h2>
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
        <BsCombobox v-model="btnColor" :data-source="btnColorSrc" filled floating-label>
          <label>Color:</label>
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
            <div class="sm:w-36 pt-2 font-weight-medium">Favorite Drink</div>
            <div class="col-sm">
              <BsToggleButton
                v-model="selectedDrink"
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
              >
                <template v-if="showIcon" #icon="item">
                  <BsSvgIcon :icon="item?.value === selectedDrink ? 'check' : item?.icon!" />
                </template>
                <template v-else #icon="item">
                  <BsSvgIcon v-if="item?.value === selectedDrink" icon="check" />
                </template>
              </BsToggleButton>
            </div>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
