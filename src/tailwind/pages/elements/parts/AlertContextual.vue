<script setup lang="ts">
import {
  changeAlertContext,
  changeIconVariant,
  dsAlertContextual,
  dsAlertVariants,
  dsIconVariants,
} from '@shares/alertApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { useWatcherDefaultValue, changeComponentVariant } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import { type TAlertVariant, type TIconVariant } from 'vue-mdbootstrap';

const example = await import('../examples/AlertExample2.vue?raw');

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string>();

rawTemplate.value = parseVueTemplateTag(example.default);

const contextVariant = ref<TAlertVariant | undefined>('success');
const alertVariant = ref<string>();
const iconVariant = ref<TIconVariant | undefined>('outlined');

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeAlertContext(contextVariant, rawTemplate.value);
  rawCode = changeComponentVariant(alertVariant, rawCode!);
  rawCode = changeIconVariant(iconVariant, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

useWatcherDefaultValue(
  { refObj: contextVariant, default: 'success' },
  { refObj: iconVariant, default: 'outlined' }
);

const alertContextSrc = dsAlertContextual();
const alertVariantSrc = dsAlertVariants();
const iconVariantSrc = dsIconVariants();

const contentCls = [
  'h-full flex items-center justify-center min-h-40',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];

onBeforeUnmount(() => {
  alertContextSrc.proxy.destroy();
  alertVariantSrc.proxy.destroy();
  iconVariantSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Contextual Alerts</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="contextVariant" :data-source="alertContextSrc" filled floating-label>
          <label>Context Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="alertVariant" :data-source="alertVariantSrc" filled floating-label>
          <label>Alert Variant:</label>
        </BsCombobox>
        <BsCombobox
          v-model="iconVariant"
          :data-source="iconVariantSrc"
          class="mb-4"
          filled
          floating-label
        >
          <label>Icon Variant:</label>
        </BsCombobox>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsAlert
            :filled="alertVariant === 'filled'"
            :icon-variant="iconVariant"
            :outlined="alertVariant === 'outlined'"
            :variant="contextVariant"
            class="mt-4"
          >
            Aww yeah, you successfully read this alert message. This is an example how to construct
            a predefined contextual alert.
          </BsAlert>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
