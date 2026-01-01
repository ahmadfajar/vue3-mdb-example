<script setup lang="ts">
import {
  changeFieldIcon,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableFieldClearable,
} from '@shares/fieldApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { changeComponentVariant, useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/TextAreaExample2.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fieldValue = ref<string>();
const variant = ref('default');
const showIcon = ref(false);
const iconName = ref('place');
const iconPlacement = ref('prepend-icon');
const clearable = ref(false);

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

  rawCode = enableFieldClearable(clearable.value, rawCode);
  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants(['filled rounded', 'outlined rounded']);
const iconPlacementSrc = dsFieldIconPlacements();
const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  variantSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Browser Autocomplete</h2>
    </div>

    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
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
          <BsTextArea
            v-model="fieldValue"
            :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName : undefined"
            :append-icon-outer="
              showIcon && iconPlacement === 'append-icon-outer' ? iconName : undefined
            "
            :clear-button="clearable"
            :filled="variant === 'filled'"
            :outlined="variant === 'outlined'"
            :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName : undefined"
            :prepend-icon-outer="
              showIcon && iconPlacement === 'prepend-icon-outer' ? iconName : undefined
            "
            action-icon-variant="filled"
            autocomplete="address"
            class="flex-fill"
            floating-label
          >
            <label>Address</label>
          </BsTextArea>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
