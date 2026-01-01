<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import { useRefDebounced } from '@shares/debounceRef.ts';
import {
  changeFieldHelpText,
  changeFieldIcon,
  changeListboxImageShape,
  changeListboxImageSize,
  disableFieldPersistentHelpText,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  dsListboxImageShapes,
  dsPeopleSrc,
  enableFieldClearable,
} from '@shares/fieldApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  changeComponentVariant,
  dsComponentStatesRD,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/ComboboxExample2.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fieldValue1 = ref<number>();
const tabIndex = ref(0);
const variant = ref('default');
const state = ref<string>();
const showIcon = ref(false);
const iconName = ref('person');
const deferredIcon = useRefDebounced(iconName, 800);
const iconPlacement = ref('prepend-icon');
const helpText = ref<string>();
const persistentHelpOff = ref(false);
const clearable = ref(false);
const imageSize = ref(48);
const imageShape = ref('circle-image');

const rawTemplate = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
  { refObj: iconPlacement, default: 'prepend-icon' }
);

watchEffect(() => {
  let rawCode = rawTemplate;

  if (variant.value !== 'default') {
    rawCode = changeComponentVariant(variant, rawCode);
  }
  if (showIcon.value) {
    rawCode = changeFieldIcon(iconPlacement.value, iconName.value, rawCode);
  }

  rawCode = changeButtonState(state, rawCode) as string;
  rawCode = changeListboxImageShape(imageShape.value, rawCode);
  rawCode = changeListboxImageSize(imageSize.value, rawCode);
  rawCode = enableFieldClearable(clearable.value, rawCode);
  rawCode = changeFieldHelpText(helpText.value, rawCode);
  rawCode = disableFieldPersistentHelpText(persistentHelpOff.value, rawCode);
  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants(['filled rounded', 'outlined rounded']);
const imageShapeSrc = dsListboxImageShapes();
const iconPlacementSrc = dsFieldIconPlacements();
const fieldStateSrc = dsComponentStatesRD();
const peopleSrc = dsPeopleSrc();
const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  peopleSrc.proxy.destroy();
  variantSrc.proxy.destroy();
  fieldStateSrc.proxy.destroy();
  imageShapeSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Image Support</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="min-h-116">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="md3">
            <BsTab label="General">
              <div class="mb-4">
                <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
                  <label>Style Variant:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="state" :data-source="fieldStateSrc" filled floating-label>
                  <label>Field State:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="imageShape" :data-source="imageShapeSrc" filled floating-label>
                  <label>Image Shape:</label>
                </BsCombobox>
              </div>
              <div class="mb-3">
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
              </div>

              <div class="ps-2">
                <BsSwitch
                  v-model="clearable"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Clearable
                </BsSwitch>
              </div>
            </BsTab>
            <BsTab label="Others">
              <div class="mb-4">
                <BsTextField v-model="helpText" filled floating-label>
                  <label>Enter help text</label>
                </BsTextField>
              </div>
              <div class="ps-2 mb-2">
                <BsCheckbox v-model="persistentHelpOff" :value="true">
                  Disable persistent help text
                </BsCheckbox>
              </div>
              <BsDivider class="-mx-3" />
              <div class="ps-2 mt-2 mb-4">
                <BsCheckbox v-model="showIcon" :value="true">Show Icon</BsCheckbox>
              </div>
              <div class="mb-4">
                <BsTextField v-model="iconName" filled floating-label>
                  <label>Enter icon name</label>
                </BsTextField>
              </div>
              <BsCombobox
                v-model="iconPlacement"
                :data-source="iconPlacementSrc"
                filled
                floating-label
              >
                <label>Icon Placement:</label>
              </BsCombobox>
            </BsTab>
          </BsTabs>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div class="w-full">
            <BsCombobox
              v-model="fieldValue1"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :circle-image="imageShape === 'circle-image'"
              :clear-button="clearable"
              :data-source="peopleSrc"
              :disabled="state === 'disabled'"
              :filled="variant === 'filled'"
              :help-text="helpText"
              :image-size="imageSize"
              :outlined="variant === 'outlined'"
              :persistent-help-off="persistentHelpOff"
              :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName : undefined"
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? iconName : undefined
              "
              :readonly="state === 'readonly'"
              :rounded-image="imageShape === 'rounded-image'"
              floating-label
              show-image
            >
              <label>Select Employee</label>
            </BsCombobox>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
