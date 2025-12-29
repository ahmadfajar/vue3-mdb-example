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
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import type { TIconPosition } from 'vue-mdbootstrap';
import Example1 from '../examples/ToggleFieldExample5.vue?raw';
import Example2 from '../examples/ToggleFieldExample6.vue?raw';
import Example3 from '../examples/ToggleFieldExample7.vue?raw';
import Example4 from '../examples/ToggleFieldExample8.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const rawTemplate = ref<string>();
const btnVariant = ref<string | undefined>('filled');
const btnShape = ref<string | undefined>('pill');
const btnState = ref<string>();
const btnElevated = ref(false);
const showIcon = ref(false);
const useCheckedMark = ref(false);
const iconPosition = ref<TIconPosition>('left');
const selectedDrinks = ref<string[]>([]);

useWatcherDefaultValue(
  { refObj: btnVariant, default: 'filled' },
  { refObj: btnShape, default: 'pill' }
);

watchEffect(() => {
  if (showIcon.value && useCheckedMark.value) {
    parseExampleSourceCode(Example4, rawTemplate, fmtVueTsc);
  } else if (!showIcon.value && useCheckedMark.value) {
    parseExampleSourceCode(Example3, rawTemplate, fmtVueTsc);
  } else if (showIcon.value && !useCheckedMark.value) {
    parseExampleSourceCode(Example2, rawTemplate, fmtVueTsc);
  } else {
    parseExampleSourceCode(Example1, rawTemplate, fmtVueTsc);
  }

  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);

  if (showIcon.value) {
    rawCode = changeIconPosition(iconPosition, rawCode);
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

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnShapes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Multi Select</h2>
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
          <div class="flex flex-col md-gap-x-3">
            <BsCheckbox v-model="useCheckedMark" :value="true"> Use Check Mark </BsCheckbox>
            <BsCheckbox v-model="showIcon" :value="true"> Show Icon </BsCheckbox>
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
            v-model="selectedDrinks"
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

            <div class="sm:w-36 col-form-label font-weight-medium">Favorite Drinks</div>
          </BsToggleField>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
