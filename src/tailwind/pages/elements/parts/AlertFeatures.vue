<script setup lang="ts">
import {
  changeIconVariant,
  dsAlertVariants,
  dsIconVariants,
  enableAlertDismissible,
} from '@shares/alertApi.ts';
import { changeIconName } from '@shares/buttonApi';
import { useRefDebounced } from '@shares/debounceRef.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  useWatcherDefaultValue,
  changeComponentColor,
  changeComponentVariant,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import { Helper, type TIconVariant } from 'vue-mdbootstrap';
import Example from '../examples/AlertExample1.vue?raw';

const fmtVueTpl = ref<string>();
const variant = ref<string>();
const closable = ref(false);
const alertIcon = ref<string>();
const debouncedIcon = useRefDebounced(alertIcon, 800);
const iconVariant = ref<TIconVariant | undefined>('outlined');
const color = ref<string | undefined>('default');
const rawTemplate = parseVueTemplateTag(Example);

useWatcherDefaultValue(
  { refObj: color, default: 'default' },
  { refObj: iconVariant, default: 'outlined' }
);

watchEffect(() => {
  let rawCode: string | undefined = rawTemplate;

  if (color.value && color.value !== 'default') {
    rawCode = changeComponentColor(color, rawTemplate);
  }

  rawCode = changeComponentVariant(variant, rawCode);
  rawCode = changeIconName(alertIcon, rawCode);
  rawCode = changeIconVariant(iconVariant, rawCode);
  rawCode = enableAlertDismissible(closable.value, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const alertColorSrc = dsContextColors(['dark']);
const alertVariantSrc = dsAlertVariants();
const iconVariantSrc = dsIconVariants();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];

onBeforeUnmount(() => {
  alertColorSrc.proxy.destroy();
  alertVariantSrc.proxy.destroy();
  iconVariantSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="color" :data-source="alertColorSrc" filled floating-label>
          <label>Color:</label>
        </BsCombobox>
        <BsCombobox v-model="variant" :data-source="alertVariantSrc" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <BsTextField
          v-model="alertIcon"
          filled
          floating-label
          placeholder="Ex: verified, notifications"
        >
          <label>Enter icon name</label>
        </BsTextField>
        <BsCombobox
          v-model="iconVariant"
          :data-source="iconVariantSrc"
          :disabled="Helper.isEmpty(alertIcon)"
          filled
          floating-label
        >
          <label>Icon Variant:</label>
        </BsCombobox>

        <div class="ps-2">
          <BsSwitch
            v-model="closable"
            :value="true"
            checked-icon
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Dismissible
          </BsSwitch>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsAlert
            :color="color"
            :dismissible="closable"
            :filled="variant === 'filled'"
            :icon="debouncedIcon"
            :icon-variant="iconVariant"
            :outlined="variant === 'outlined'"
            class="mt-4"
          >
            This is just an example of simple alert.
          </BsAlert>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
