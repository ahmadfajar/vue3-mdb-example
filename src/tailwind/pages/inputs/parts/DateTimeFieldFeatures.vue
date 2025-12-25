<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import { useRefDebounced } from '@shares/debounceRef.ts';
import {
  changeDateFieldPickerMode,
  changeFieldHelpText,
  changeFieldIcon,
  changeFieldPlaceholder,
  disableFieldPersistentHelpText,
  dsDateFieldModes,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableDateFieldLandscapeMode,
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
import { nextTick, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import type { TDateTimePickerMode } from 'vue-mdbootstrap';
import Example from '../examples/DateTimeFieldExample1.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fieldValue1 = ref<string>();
const fieldValue2 = ref<string>();
const displayFormat = ref('DDD');
const valueFormat = ref('yyyy-MM-dd');
const tabIndex = ref(0);
const variant = ref('default');
const state = ref<string>();
const pickerMode = ref<TDateTimePickerMode>('date');
const landscape = ref(false);
const showIcon = ref(false);
const iconName = ref('event');
const deferredIcon = useRefDebounced(iconName, 800);
const iconPlacement = ref('prepend-icon');
const placeholder = ref<string>();
const helpText = ref<string>();
const persistentHelpOff = ref(false);
const clearable = ref(false);

const rawTemplate = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
  { refObj: iconPlacement, default: 'prepend-icon' }
);

watch(
  pickerMode,
  async (newValue, oldValue) => {
    if (!newValue) {
      await nextTick(() => {
        pickerMode.value = 'date';
      });
    }

    if (newValue !== oldValue) {
      fieldValue1.value = undefined;
      fieldValue2.value = undefined;
    }

    switch (newValue) {
      case 'datetime':
        displayFormat.value = 'DDD HH:mm:ss';
        valueFormat.value = 'yyyy-MM-dd HH:mm:ss';
        break;
      case 'month':
        displayFormat.value = 'MMMM yyyy';
        valueFormat.value = 'yyyy-MM';
        break;
      case 'year':
        displayFormat.value = 'yyyy';
        valueFormat.value = 'yyyy';
        break;
      case 'time':
        displayFormat.value = 'HH:mm:ss';
        valueFormat.value = 'HH:mm:ss';
        break;
      default:
        displayFormat.value = 'DDD';
        valueFormat.value = 'yyyy-MM-dd';
        break;
    }
  },
  { immediate: true }
);

watchEffect(() => {
  let rawCode = rawTemplate;

  if (variant.value !== 'default') {
    rawCode = changeComponentVariant(variant, rawCode, true);
  }
  if (showIcon.value) {
    rawCode = changeFieldIcon(iconPlacement.value, iconName.value, rawCode, true);
  }

  rawCode = changeButtonState(state, rawCode, true) as string;
  rawCode = enableDateFieldLandscapeMode(landscape.value, rawCode, true);
  rawCode = changeDateFieldPickerMode(pickerMode.value, rawCode, true);
  rawCode = enableFieldClearable(clearable.value, rawCode, true);
  rawCode = changeFieldPlaceholder(placeholder.value, rawCode, true);
  rawCode = changeFieldHelpText(helpText.value, rawCode, true);
  rawCode = disableFieldPersistentHelpText(persistentHelpOff.value, rawCode, true);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants(['filled rounded', 'outlined rounded']);
const pickerModeSrc = dsDateFieldModes();
const iconPlacementSrc = dsFieldIconPlacements();
const stateSrc = dsComponentStatesRD();
const contentCls = ['h-full min-h-40 flex flex-col justify-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  stateSrc.proxy.destroy();
  variantSrc.proxy.destroy();
  pickerModeSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="min-h-128">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="md3">
            <BsTab label="General">
              <div class="flex flex-col gap-y-4">
                <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
                  <label>Style Variant:</label>
                </BsCombobox>
                <BsCombobox v-model="pickerMode" :data-source="pickerModeSrc" filled floating-label>
                  <label>Picker Mode:</label>
                </BsCombobox>
                <BsCombobox v-model="state" :data-source="stateSrc" filled floating-label>
                  <label>Field State:</label>
                </BsCombobox>

                <div class="ps-2">
                  <BsSwitch
                    v-model="landscape"
                    :value="true"
                    checked-icon
                    inset-outlined
                    label-class="flex-fill"
                    label-position="left"
                  >
                    Landscape Orientation
                  </BsSwitch>
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
              </div>
            </BsTab>
            <BsTab label="Others">
              <div class="mb-4">
                <BsTextField v-model="placeholder" filled floating-label>
                  <label>Enter placeholder text</label>
                </BsTextField>
              </div>
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
          <div class="mb-4">
            <BsDateTimeField
              v-model="fieldValue1"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :clear-button="clearable"
              :disabled="state === 'disabled'"
              :display-format="displayFormat"
              :filled="variant === 'filled'"
              :help-text="helpText"
              :landscape-mode="landscape"
              :outlined="variant === 'outlined'"
              :persistent-help-off="persistentHelpOff"
              :picker-mode="pickerMode"
              :placeholder="placeholder"
              :prepend-icon="
                showIcon && iconPlacement === 'prepend-icon' ? deferredIcon : undefined
              "
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? deferredIcon : undefined
              "
              :readonly="state === 'readonly'"
              :value-format="valueFormat"
            >
              <label class="col-sm-4 col-md-3 col-form-label">Classic Field</label>
            </BsDateTimeField>
          </div>
          <BsDivider />
          <div class="mt-4">
            <BsDateTimeField
              v-model="fieldValue2"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :clear-button="clearable"
              :disabled="state === 'disabled'"
              :display-format="displayFormat"
              :filled="variant === 'filled'"
              :help-text="helpText"
              :landscape-mode="landscape"
              :outlined="variant === 'outlined'"
              :persistent-help-off="persistentHelpOff"
              :picker-mode="pickerMode"
              :placeholder="placeholder"
              :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName : undefined"
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? iconName : undefined
              "
              :readonly="state === 'readonly'"
              :value-format="valueFormat"
              floating-label
            >
              <label>Floating Label</label>
            </BsDateTimeField>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
