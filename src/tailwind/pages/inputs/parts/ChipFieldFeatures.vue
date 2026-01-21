<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import { useRefDebounced } from '@shares/debounceRef.ts';
import {
  changeFieldChipColor,
  changeFieldHelpText,
  changeFieldIcon,
  changeFieldPlaceholder,
  disableFieldPersistentHelpText,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableFieldChipDeletable,
  enableFieldChipOutlined,
  enableFieldChipRoundedPill,
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
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import type { TContextColor } from 'vue-mdbootstrap';
import Example from '../examples/ChipFieldExample1.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fieldValue1 = ref<string[]>([]);
const fieldValue2 = ref<string[]>([]);
const tabIndex = ref(0);
const variant = ref('default');
const state = ref<string>();
const showIcon = ref(false);
const iconName = ref('bookmarks');
const deferredIcon = useRefDebounced(iconName, 800);
const iconPlacement = ref('prepend-icon');
const placeholder = ref<string | undefined>('Add tags...');
const helpText = ref<string>();
const persistentHelpOff = ref(false);
const clearable = ref(false);
const chipColor = ref<TContextColor>('secondary');
const chipDeletable = ref(false);
const chipOutlined = ref(false);
const chipPill = ref(false);

const rawTemplate = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
  { refObj: chipColor, default: 'secondary' },
  { refObj: iconPlacement, default: 'prepend-icon' }
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
  rawCode = changeFieldChipColor(chipColor.value, rawCode, true);
  rawCode = enableFieldChipDeletable(chipDeletable.value, rawCode, true);
  rawCode = enableFieldChipOutlined(chipOutlined.value, rawCode, true);
  rawCode = enableFieldChipRoundedPill(chipPill.value, rawCode, true);
  rawCode = enableFieldClearable(clearable.value, rawCode, true);
  rawCode = changeFieldPlaceholder(placeholder.value, rawCode, true);
  rawCode = changeFieldHelpText(helpText.value, rawCode, true);
  rawCode = disableFieldPersistentHelpText(persistentHelpOff.value, rawCode, true);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants(['filled rounded', 'outlined rounded']);
const chipColorSrc = dsContextColors(['dark']);
const iconPlacementSrc = dsFieldIconPlacements();
const stateSrc = dsComponentStatesRD();
const contentCls = ['h-full min-h-40 flex flex-col justify-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  stateSrc.proxy.destroy();
  variantSrc.proxy.destroy();
  chipColorSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Features Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="min-h-110">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="md3">
            <BsTab label="General">
              <div class="mb-4">
                <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
                  <label>Style Variant:</label>
                </BsCombobox>
              </div>
              <div class="mb-4">
                <BsCombobox v-model="state" :data-source="stateSrc" filled floating-label>
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
            <BsTab label="Chips">
              <div class="mb-3">
                <BsCombobox v-model="chipColor" :data-source="chipColorSrc" filled floating-label>
                  <label>Color Variant:</label>
                </BsCombobox>
              </div>
              <div class="ps-2">
                <BsSwitch
                  v-model="chipOutlined"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Outlined
                </BsSwitch>
                <BsSwitch
                  v-model="chipPill"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Rounded Pill
                </BsSwitch>
                <BsSwitch
                  v-model="chipDeletable"
                  :value="true"
                  checked-icon
                  inset-outlined
                  label-class="flex-fill"
                  label-position="left"
                >
                  Deletable
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
          <div class="mb-4">
            <BsChipField
              v-model="fieldValue1"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :chip-color="chipColor"
              :chip-deletable="chipDeletable"
              :chip-outlined="chipOutlined"
              :chip-pill="chipPill"
              :clear-button="clearable"
              :disabled="state === 'disabled'"
              :filled="variant === 'filled'"
              :help-text="helpText"
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
              <label
                :class="[
                  'sm:w-30',
                  'col-form-label',
                  variant === 'filled' ? 'pt-3' : variant === 'outlined' ? 'pt-4' : '',
                ]"
              >
                Classic Field
              </label>
            </BsChipField>
          </div>
          <BsDivider />
          <div class="mt-4">
            <BsChipField
              v-model="fieldValue2"
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :chip-color="chipColor"
              :chip-deletable="chipDeletable"
              :chip-outlined="chipOutlined"
              :chip-pill="chipPill"
              :clear-button="clearable"
              :disabled="state === 'disabled'"
              :filled="variant === 'filled'"
              :help-text="helpText"
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
            </BsChipField>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
