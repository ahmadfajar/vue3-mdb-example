<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import { useRefDebounced } from '@shares/debounceRef.ts';
import {
  changeComboboxSelectionMode,
  changeFieldChipColor,
  changeFieldHelpText,
  changeFieldIcon,
  changeFieldPlaceholder,
  disableFieldPersistentHelpText,
  dsListboxCheckboxPositions,
  dsCountrySrc,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableComboboxChipMode,
  enableFieldChipOutlined,
  enableFieldChipRoundedPill,
  enableFieldClearable,
  changeListboxCheckboxColor,
  changeListboxCheckboxPosition,
} from '@shares/fieldApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  changeComponentVariant,
  dsComponentStatesRD,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import { Helper, type TCheckboxPosition, type TContextColor } from 'vue-mdbootstrap';
import Example from '../examples/ComboboxExample1.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fieldValue1 = ref();
const fieldValue2 = ref();
const tabIndex = ref(0);
const variant = ref('default');
const state = ref<string>();
const showIcon = ref(false);
const iconName = ref('place');
const deferredIcon = useRefDebounced(iconName, 800);
const iconPlacement = ref('prepend-icon');
const placeholder = ref<string>();
const helpText = ref<string>();
const persistentHelpOff = ref(false);
const clearable = ref(false);
const multipleMode = ref(false);
const chipMode = ref(false);
const chipColor = ref<TContextColor>('secondary');
const chipOutlined = ref(false);
const chipPill = ref(false);
const checkboxColor = ref<TContextColor>('default');
const checkboxPosition = ref<TCheckboxPosition>('left');
const countrySrc1 = dsCountrySrc();
const countrySrc2 = dsCountrySrc();

const rawTemplate = parseVueTemplateTag(Example);
const rawScript = parseVueScriptTag(Example);
countrySrc1.proxy.filters = [{ property: 'country', value: 'CA', operator: 'eq' }];
countrySrc2.proxy.filters = [{ property: 'country', value: 'CA', operator: 'eq' }];
fmtVueTsc.value = rawScript;

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
  { refObj: chipColor, default: 'secondary' },
  { refObj: checkboxColor, default: 'default' },
  { refObj: checkboxPosition, default: 'left' },
  { refObj: iconPlacement, default: 'prepend-icon' }
);

watch(multipleMode, async (value) => {
  if (!value) {
    chipMode.value = false;
    chipOutlined.value = false;
    chipPill.value = false;
    chipColor.value = 'secondary';
    checkboxColor.value = 'default';
    countrySrc1.proxy.filters = [{ property: 'country', value: 'CA', operator: 'eq' }];
    countrySrc2.proxy.filters = [{ property: 'country', value: 'CA', operator: 'eq' }];

    if (Helper.isArray(fieldValue1.value)) {
      fieldValue1.value = '';
    }
    if (Helper.isArray(fieldValue2.value)) {
      fieldValue2.value = '';
    }
  } else {
    countrySrc1.proxy.filters = [{ property: 'country', value: 'US', operator: 'eq' }];
    countrySrc2.proxy.filters = [{ property: 'country', value: 'US', operator: 'eq' }];

    if (!Helper.isArray(fieldValue1.value)) {
      fieldValue1.value = [];
    }
    if (!Helper.isArray(fieldValue2.value)) {
      fieldValue2.value = [];
    }
  }

  fmtVueTsc.value = changeComboboxSelectionMode(value, rawScript, true);
  await countrySrc1.proxy.load();
  await countrySrc2.proxy.load();
});

watchEffect(() => {
  let rawCode = rawTemplate;

  if (variant.value !== 'default') {
    rawCode = changeComponentVariant(variant, rawCode, true);
  }
  if (showIcon.value) {
    rawCode = changeFieldIcon(iconPlacement.value, iconName.value, rawCode, true);
  }

  rawCode = changeButtonState(state, rawCode, true) as string;
  rawCode = changeComboboxSelectionMode(multipleMode.value, rawCode, false, true);
  rawCode = enableComboboxChipMode(chipMode.value, rawCode, true);
  rawCode = changeListboxCheckboxColor(checkboxColor.value, rawCode, true);
  rawCode = changeListboxCheckboxPosition(checkboxPosition.value, rawCode, true);

  if (chipMode.value) {
    rawCode = changeFieldChipColor(chipColor.value, rawCode, true);
    rawCode = enableFieldChipOutlined(chipOutlined.value, rawCode, true);
    rawCode = enableFieldChipRoundedPill(chipPill.value, rawCode, true);
  }

  rawCode = enableFieldClearable(clearable.value, rawCode, true);
  rawCode = changeFieldPlaceholder(placeholder.value, rawCode, true);
  rawCode = changeFieldHelpText(helpText.value, rawCode, true);
  rawCode = disableFieldPersistentHelpText(persistentHelpOff.value, rawCode, true);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants(['filled rounded', 'outlined rounded']);
const chipColorSrc = dsContextColors(['dark', 'light']);
const checkboxColorSrc = dsContextColors(['dark', 'light']);
const checkboxPositionSrc = dsListboxCheckboxPositions();
const iconPlacementSrc = dsFieldIconPlacements();
const fieldStateSrc = dsComponentStatesRD();
const contentCls = ['h-full min-h-40 flex flex-col justify-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  variantSrc.proxy.destroy();
  chipColorSrc.proxy.destroy();
  fieldStateSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
  checkboxColorSrc.proxy.destroy();
  checkboxPositionSrc.proxy.destroy();
  countrySrc1.proxy.destroy();
  countrySrc2.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="min-h-134">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="mt-2" style="margin-inline: -16px" variant="md3">
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
              <div class="mb-3">
                <BsTextField v-model="placeholder" filled floating-label>
                  <label>Enter placeholder text</label>
                </BsTextField>
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
            <BsTab label="Selection">
              <div class="mb-4 ps-2">
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
                  v-model="chipMode"
                  :disabled="!multipleMode"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Enable Chip Mode
                </BsSwitch>
                <BsSwitch
                  v-model="chipOutlined"
                  :disabled="!chipMode"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Outlined Chips
                </BsSwitch>
                <BsSwitch
                  v-model="chipPill"
                  :disabled="!chipMode"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Rounded Pill Chips
                </BsSwitch>
              </div>
              <div class="mb-4">
                <BsCombobox
                  v-model="chipColor"
                  :data-source="chipColorSrc"
                  :disabled="!chipMode"
                  filled
                  floating-label
                >
                  <label>Chip Color:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox
                  v-model="checkboxColor"
                  :data-source="checkboxColorSrc"
                  :disabled="!multipleMode"
                  filled
                  floating-label
                >
                  <label>Checkbox Color:</label>
                </BsCombobox>
              </div>
              <div>
                <BsCombobox
                  v-model="checkboxPosition"
                  :data-source="checkboxPositionSrc"
                  :disabled="!multipleMode"
                  filled
                  floating-label
                >
                  <label>Checkbox Position:</label>
                </BsCombobox>
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
          <div class="mb-4">
            <BsCombobox
              v-model="fieldValue1"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :checkbox-color="checkboxColor"
              :checkbox-position="checkboxPosition"
              :chip-color="chipColor"
              :chip-enabled="chipMode"
              :chip-outlined="chipOutlined"
              :chip-pill="chipPill"
              :clear-button="clearable"
              :data-source="countrySrc1"
              :disabled="state === 'disabled'"
              :filled="variant === 'filled'"
              :help-text="helpText"
              :multiple="multipleMode"
              :outlined="variant === 'outlined'"
              :persistent-help-off="persistentHelpOff"
              :placeholder="placeholder"
              :prepend-icon="
                showIcon && iconPlacement === 'prepend-icon' ? deferredIcon : undefined
              "
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? deferredIcon : undefined
              "
              :readonly="state === 'readonly'"
            >
              <label class="sm:w-30 col-form-label">Classic Field</label>
            </BsCombobox>
          </div>
          <BsDivider />
          <div class="mt-4">
            <BsCombobox
              v-model="fieldValue2"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :checkbox-color="checkboxColor"
              :checkbox-position="checkboxPosition"
              :chip-color="chipColor"
              :chip-enabled="chipMode"
              :chip-outlined="chipOutlined"
              :chip-pill="chipPill"
              :clear-button="clearable"
              :data-source="countrySrc2"
              :disabled="state === 'disabled'"
              :filled="variant === 'filled'"
              :help-text="helpText"
              :multiple="multipleMode"
              :outlined="variant === 'outlined'"
              :persistent-help-off="persistentHelpOff"
              :placeholder="placeholder"
              :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName : undefined"
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? iconName : undefined
              "
              :readonly="state === 'readonly'"
              floating-label
            >
              <label>Floating Label</label>
            </BsCombobox>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
