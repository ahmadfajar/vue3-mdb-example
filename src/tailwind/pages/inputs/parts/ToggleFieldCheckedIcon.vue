<script setup lang="ts">
import {
  buttonIconPositions,
  changeButtonElevated,
  changeButtonShape,
  changeButtonState,
  changeButtonVariant,
  changeIconPosition,
  dsButtonShapes,
  dsFavoriteDrinks,
  dsFavoriteDrinksWithIcon,
  dsToggleButtonVariants,
  parseExampleSourceCode,
} from '@shares/buttonApi.ts';
import { stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { dsComponentStatesRD, useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, type Ref, ref, watch, watchEffect } from 'vue';
import type { TIconPosition } from 'vue-mdbootstrap';
import Example1 from '../examples/ToggleFieldExample3.vue?raw';
import Example2 from '../examples/ToggleFieldExample4.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const rawTemplate = ref<string>();
const btnVariant = ref<string | undefined>('filled');
const btnShape = ref<string | undefined>('pill');
const btnState = ref<string>();
const btnElevated = ref(false);
const showIcon = ref(false);
const iconPosition = ref<TIconPosition>('left');
const selectedDrink = ref<string>();

useWatcherDefaultValue(
  { refObj: btnVariant, default: 'filled' },
  { refObj: btnShape, default: 'pill' }
);

watch(showIcon, (value) => {
  if (value) {
    parseExampleSourceCode(Example2, rawTemplate, fmtVueTsc);
  } else {
    parseExampleSourceCode(Example1, rawTemplate, fmtVueTsc);
  }
});

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);

  if (showIcon.value) {
    rawCode = changeIconPosition(iconPosition as Ref<TIconPosition | undefined>, rawCode);
  }

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnVariants = dsToggleButtonVariants();
const btnShapes = dsButtonShapes();
const btnStates = dsComponentStatesRD();
const iconPositions = buttonIconPositions();
const drinkSrc1 = dsFavoriteDrinks();
const drinkSrc2 = dsFavoriteDrinksWithIcon();
const contentCls = ['h-full min-h-40', 'flex items-center', 'py-8'];

parseExampleSourceCode(Example1, rawTemplate, fmtVueTsc);

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnShapes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Checked Icon</h2>
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
        <div :class="showIcon ? contentCls.concat('px-3 lg:px-6') : contentCls.concat('px-8')">
          <BsToggleField
            v-model="selectedDrink"
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
            <div class="sm:w-33 col-form-label font-weight-medium">Favorite Drink</div>
          </BsToggleField>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
