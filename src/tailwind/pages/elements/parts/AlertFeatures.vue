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
  changeComponentColor,
  changeComponentVariant,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import { Helper, type TIconVariant } from 'vue-mdbootstrap';

const example = await import('../examples/AlertExample1.vue?raw');

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string>();

rawTemplate.value = parseVueTemplateTag(example.default);

const color = ref<string | undefined>('default');
const variant = ref<string>();
const alertIcon = ref<string>();
const debouncedIcon = useRefDebounced(alertIcon, 800);
const iconVariant = ref<TIconVariant>();
const closable = ref(false);

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeComponentColor(color, rawTemplate.value!);
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
const contentCls = [
  'h-full flex items-center justify-center min-h-40',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];

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
          help-text="Ex: verified, notifications"
          placeholder="Enter icon name"
        >
          <label>Show icon</label>
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
          <BsCheckbox v-model="closable" :value="true">Dismissible</BsCheckbox>
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
          >
            <p>
              Aww yeah, you successfully read this alert message. This is an example how to
              construct <b>Contextual Alert</b> with additional contents.
            </p>
            <hr class="my-3" />
            <ul class="list-disc ms-4">
              <li>
                Satu
                <a class="alert-link" href="#" title="barisan berani">persatu barisan</a>
                berguguran.
              </li>
              <li>
                Satu
                <a class="alert-link" href="#" title="barisan berani">persatu barisan</a>
                berguguran.
              </li>
              <li>
                Satu
                <a class="alert-link" href="#" title="barisan berani">persatu barisan</a>
                berguguran.
              </li>
              <li>
                Satu
                <a class="alert-link" href="#" title="barisan berani">persatu barisan</a>
                berguguran.
              </li>
            </ul>
          </BsAlert>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
