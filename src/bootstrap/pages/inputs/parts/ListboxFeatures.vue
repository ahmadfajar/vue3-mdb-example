<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import {
  changeListboxCheckboxColor,
  changeListboxCheckboxPosition,
  changeListboxImageShape,
  changeListboxImageSize,
  changeListboxSelectionMode,
  dsCountrySrc,
  dsListboxCheckboxPositions,
  dsListboxImageShapes,
  dsPeopleSrc,
  enableListboxCheckbox,
} from '@shares/fieldApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  dsComponentStatesRD,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import { Helper, type TCheckboxPosition, type TContextColor } from 'vue-mdbootstrap';
import Example1 from '../examples/ListboxExample1.vue?raw';
import Example2 from '../examples/ListboxExample2.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fieldValue1 = ref();
const fieldValue2 = ref<number>();
const state = ref<string>();
const multipleMode = ref(false);
const checkboxEnabled = ref(false);
const checkboxColor = ref<TContextColor>('default');
const checkboxPosition = ref<TCheckboxPosition>('left');
const imageShape = ref('circle-image');
const imageSize = ref(48);
const countrySrc1 = dsCountrySrc();

let rawTemplate: string;

if (props.section === 'image-support') {
  rawTemplate = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else {
  const rawScript = parseVueScriptTag(Example1);
  rawTemplate = parseVueTemplateTag(Example1);
  fmtVueTsc.value = rawScript;
  countrySrc1.proxy.filters = [{ property: 'country', value: 'CA', operator: 'eq' }];

  useWatcherDefaultValue(
    { refObj: checkboxColor, default: 'default' },
    { refObj: checkboxPosition, default: 'left' }
  );

  watch(multipleMode, async (value) => {
    if (!value) {
      checkboxEnabled.value = false;
      checkboxColor.value = 'default';

      if (Helper.isArray(fieldValue1.value)) {
        fieldValue1.value = '';
      }
    } else {
      if (!Helper.isArray(fieldValue1.value)) {
        fieldValue1.value = [];
      }
    }

    fmtVueTsc.value = changeListboxSelectionMode(value, rawScript, true);
    await countrySrc1.proxy.load();
  });
}

watchEffect(() => {
  let rawCode = rawTemplate;

  if (props.section === 'image-support') {
    rawCode = changeListboxImageShape(imageShape.value, rawCode);
    rawCode = changeListboxImageSize(imageSize.value, rawCode);
  } else {
    rawCode = changeButtonState(state, rawCode) as string;
    rawCode = changeListboxSelectionMode(multipleMode.value, rawCode, false);
    rawCode = enableListboxCheckbox(checkboxEnabled.value, rawCode);

    if (multipleMode.value && checkboxEnabled.value) {
      rawCode = changeListboxCheckboxColor(checkboxColor.value, rawCode);
      rawCode = changeListboxCheckboxPosition(checkboxPosition.value, rawCode);
    }
  }

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const checkboxColorSrc = dsContextColors(['dark', 'light']);
const checkboxPositionSrc = dsListboxCheckboxPositions();
const imageShapeSrc = dsListboxImageShapes();
const fieldStateSrc = dsComponentStatesRD();
const peopleSrc = dsPeopleSrc();
const contentCls = ['h-full min-h-40', 'p-3 p-md-5'];

onBeforeUnmount(() => {
  fieldStateSrc.proxy.destroy();
  imageShapeSrc.proxy.destroy();
  checkboxColorSrc.proxy.destroy();
  checkboxPositionSrc.proxy.destroy();
  countrySrc1.proxy.destroy();
  peopleSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>{{ section === 'image-support' ? 'Image Support' : 'Overview' }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <template v-if="section === 'image-support'">
          <BsCombobox v-model="imageShape" :data-source="imageShapeSrc" filled floating-label>
            <label>Image Shape:</label>
          </BsCombobox>
          <BsNumericField
            v-model="imageSize"
            filled
            floating-label
            max-value="100"
            min-value="24"
            suffix="px"
          >
            <label>Enter image size</label>
          </BsNumericField>
        </template>
        <template v-else>
          <div class="ps-2">
            <BsSwitch
              v-model="multipleMode"
              :value="true"
              checked-icon
              inset-outlined
              label-class="flex-fill"
              label-position="left"
            >
              Enable Multi Select
            </BsSwitch>
            <BsSwitch
              v-model="checkboxEnabled"
              :disabled="!multipleMode"
              :value="true"
              checked-icon
              inset-outlined
              label-class="flex-fill"
              label-position="left"
            >
              Enable Checkbox
            </BsSwitch>
          </div>
          <BsCombobox
            v-model="checkboxColor"
            :data-source="checkboxColorSrc"
            :disabled="!multipleMode"
            filled
            floating-label
          >
            <label>Checkbox Color:</label>
          </BsCombobox>
          <BsCombobox
            v-model="checkboxPosition"
            :data-source="checkboxPositionSrc"
            :disabled="!multipleMode"
            filled
            floating-label
          >
            <label>Checkbox Position:</label>
          </BsCombobox>
          <BsCombobox v-model="state" :data-source="fieldStateSrc" filled floating-label>
            <label>Field State:</label>
          </BsCombobox>
        </template>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsListbox
            v-if="section === 'image-support'"
            v-model="fieldValue2"
            :circle-image="imageShape === 'circle-image'"
            :data-source="peopleSrc"
            :image-size="imageSize"
            :rounded-image="imageShape === 'rounded-image'"
            show-image
          />
          <BsListbox
            v-else
            v-model="fieldValue1"
            :checkbox-color="checkboxColor"
            :checkbox-position="checkboxPosition"
            :data-source="countrySrc1"
            :disabled="state === 'disabled'"
            :multiple="multipleMode"
            :readonly="state === 'readonly'"
            :use-checkbox="checkboxEnabled"
          />
          <p class="mt-2 mb-0">
            Selected {{ multipleMode ? 'values' : 'value' }}:
            <span class="font-weight-semibold">
              {{ section === 'image-support' ? fieldValue2 : fieldValue1 }}
            </span>
          </p>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
