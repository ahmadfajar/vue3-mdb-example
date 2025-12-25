<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import { useRefDebounced } from '@shares/debounceRef.ts';
import {
  changeFieldHelpText,
  changeFieldIcon,
  changeFieldPlaceholder,
  disableFieldPersistentHelpText,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableFieldClearable,
} from '@shares/fieldApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  changeComponentVariant,
  dsComponentStatesRD,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/TextFieldExample1.vue?raw';

const fmtVueTpl = ref<string>();
const tabIndex = ref(0);
const variant = ref('default');
const state = ref<string>();
const showIcon = ref(false);
const iconName = ref('person');
const deferredIcon = useRefDebounced(iconName, 800);
const iconPlacement = ref('prepend-icon');
const placeholder = ref<string>();
const helpText = ref<string>();
const persistentHelpOff = ref(false);
const clearable = ref(false);
const rawTemplate = parseVueTemplateTag(Example);

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
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
  rawCode = enableFieldClearable(clearable.value, rawCode, true);
  rawCode = changeFieldPlaceholder(placeholder.value, rawCode, true);
  rawCode = changeFieldHelpText(helpText.value, rawCode, true);
  rawCode = disableFieldPersistentHelpText(persistentHelpOff.value, rawCode, true);

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants();
const iconPlacementSrc = dsFieldIconPlacements();
const stateSrc = dsComponentStatesRD();
const contentCls = ['h-full min-h-40 flex flex-col justify-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  variantSrc.proxy.destroy();
  stateSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <div class="min-h-110">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="-mx-3 mt-2" variant="md3">
            <BsTab label="General">
              <div class="flex flex-col gap-y-4">
                <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
                  <label>Style Variant:</label>
                </BsCombobox>
                <BsCombobox v-model="state" :data-source="stateSrc" filled floating-label>
                  <label>Field State:</label>
                </BsCombobox>
                <BsTextField v-model="placeholder" filled floating-label>
                  <label>Enter placeholder text</label>
                </BsTextField>
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
            <BsTextField
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :clear-button="clearable"
              :disabled="state === 'disabled'"
              :filled="variant?.startsWith('filled')"
              :help-text="helpText"
              :outlined="variant?.startsWith('outlined')"
              :persistent-help-off="persistentHelpOff"
              :placeholder="placeholder"
              :prepend-icon="
                showIcon && iconPlacement === 'prepend-icon' ? deferredIcon : undefined
              "
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? deferredIcon : undefined
              "
              :readonly="state === 'readonly'"
              :rounded="variant?.endsWith('rounded')"
            >
              <label class="col-sm-4 col-md-3 col-form-label">Classic Field</label>
            </BsTextField>
          </div>
          <BsDivider />
          <div class="mt-4">
            <BsTextField
              :append-icon="showIcon && iconPlacement === 'append-icon' ? deferredIcon : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? deferredIcon : undefined
              "
              :clear-button="clearable"
              :disabled="state === 'disabled'"
              :filled="variant?.startsWith('filled')"
              :help-text="helpText"
              :outlined="variant?.startsWith('outlined')"
              :persistent-help-off="persistentHelpOff"
              :placeholder="placeholder"
              :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName : undefined"
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? iconName : undefined
              "
              :readonly="state === 'readonly'"
              :rounded="variant?.endsWith('rounded')"
              floating-label
            >
              <label>Floating Label</label>
            </BsTextField>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
