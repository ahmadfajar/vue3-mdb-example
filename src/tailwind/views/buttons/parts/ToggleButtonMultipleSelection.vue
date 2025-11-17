<script setup lang="ts">
import {
  buttonIconPositions,
  buttonShapes,
  changeButtonElevated,
  changeButtonShape,
  changeButtonState,
  changeButtonVariant,
  toggleButtonVariants,
} from '@shares/buttonApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { componentStatesRD } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import type { TIconPosition, TInputOptionItem } from 'vue-mdbootstrap';

const example1 = await import('../examples/ToggleButtonExample5.vue?raw');
const example2 = await import('../examples/ToggleButtonExample6.vue?raw');
const example3 = await import('../examples/ToggleButtonExample7.vue?raw');
const example4 = await import('../examples/ToggleButtonExample8.vue?raw');

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();
const btnVariant = ref<string>();
const btnShape = ref<string | undefined>('pill');
const btnState = ref<string>();
const btnElevated = ref(false);
const showIcon = ref(false);
const useCheckedMark = ref(false);
const iconPosition = ref<TIconPosition>('left');
const selectedDrinks = ref<string[]>([]);

function parseSource() {
  rawTemplate.value = parseVueTemplateTag(example1.default);
  fmtVueTsc.value = parseVueScriptTag(example1.default);
}

function parseSourceWithIcon() {
  rawTemplate.value = parseVueTemplateTag(example2.default);
  fmtVueTsc.value = parseVueScriptTag(example2.default);
}

function parseSourceWithCheckedMark() {
  rawTemplate.value = parseVueTemplateTag(example3.default);
  fmtVueTsc.value = parseVueScriptTag(example3.default);
}

function parseSourceWithCheckedIcon() {
  rawTemplate.value = parseVueTemplateTag(example4.default);
  fmtVueTsc.value = parseVueScriptTag(example4.default);
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
  if (showIcon.value && useCheckedMark.value) {
    parseSourceWithCheckedIcon();
  } else if (!showIcon.value && useCheckedMark.value) {
    parseSourceWithCheckedMark();
  } else if (showIcon.value && !useCheckedMark.value) {
    parseSourceWithIcon();
  } else {
    parseSource();
  }

  let rawCode: string | undefined;

  rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  rawCode = changeButtonShape(btnShape, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonElevated(btnElevated, rawCode);
  rawCode = changeIconPosition(rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnVariants = toggleButtonVariants();
const btnShapes = buttonShapes();
const btnStates = componentStatesRD();
const iconPositions = buttonIconPositions();
const drinkSrc1: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
const drinkSrc2: TInputOptionItem[] = [
  { value: 'Tea', icon: 'glass_cup' },
  { value: 'Coffee', icon: 'coffee' },
  { value: 'Beer', icon: 'liquor' },
];

onMounted(() => {
  // trigger reactivity on first load
  btnVariant.value = 'filled';
});

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnShapes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Multiple Selection</h2>
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

        <div class="w-full">
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
        <div
          :class="[
            'h-full flex items-center justify-center min-h-40 md:rounded-lg py-8',
            showIcon ? 'px-3 lg:px-6' : 'px-8',
          ]"
        >
          <div class="row gy-2">
            <div class="sm:w-36 pt-2 font-medium">Favorite Drinks</div>
            <div class="col-sm">
              <BsToggleButton
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
              </BsToggleButton>
            </div>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
