<script setup lang="ts">
import {
  changeFieldIcon,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableFieldClearable,
} from '@shares/fieldApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { changeComponentVariant, useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/NumericFieldExample2.vue?raw';

const fmtVueTpl = ref<string>();
const variant = ref('default');
const showIcon = ref(false);
const iconName1 = ref('wallet');
const iconName2 = ref('bug_report');
const iconPlacement = ref('prepend-icon');
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
    rawCode = changeFieldIcon(iconPlacement.value, iconName1.value, rawCode, true);
  }

  rawCode = enableFieldClearable(clearable.value, rawCode, true);
  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants();
const iconPlacementSrc = dsFieldIconPlacements();
const contentCls = ['h-full min-h-40 flex flex-col justify-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  variantSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Prefix and Suffix</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
          <label>Style Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="iconPlacement" :data-source="iconPlacementSrc" filled floating-label>
          <label>Icon Placement:</label>
        </BsCombobox>
        <div class="ps-2">
          <BsSwitch
            v-model="showIcon"
            :value="true"
            checked-icon
            inset-outlined
            label-class="flex-fill"
            label-position="left"
          >
            Show Icon
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
      </template>

      <template #content>
        <div :class="contentCls">
          <div class="mb-4">
            <BsNumericField
              :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName1 : undefined"
              :append-icon-outer="
                showIcon && iconPlacement === 'append-icon-outer' ? iconName1 : undefined
              "
              :clear-button="clearable"
              :filled="variant?.startsWith('filled')"
              :outlined="variant?.startsWith('outlined')"
              :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName1 : undefined"
              :prepend-icon-outer="
                showIcon && iconPlacement === 'prepend-icon-outer' ? iconName1 : undefined
              "
              :rounded="variant?.endsWith('rounded')"
              floating-label
              prefix="Rp."
            >
              <label>Unit Price</label>
            </BsNumericField>
          </div>
          <BsNumericField
            :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName2 : undefined"
            :append-icon-outer="
              showIcon && iconPlacement === 'append-icon-outer' ? iconName2 : undefined
            "
            :clear-button="clearable"
            :filled="variant?.startsWith('filled')"
            :outlined="variant?.startsWith('outlined')"
            :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName2 : undefined"
            :prepend-icon-outer="
              showIcon && iconPlacement === 'prepend-icon-outer' ? iconName2 : undefined
            "
            :rounded="variant?.endsWith('rounded')"
            floating-label
            suffix="Kg"
          >
            <label>Unit Weight</label>
          </BsNumericField>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
