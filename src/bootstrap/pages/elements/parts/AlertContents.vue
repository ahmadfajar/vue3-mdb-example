<script setup lang="ts">
import { changeIconVariant, dsAlertVariants, dsIconVariants } from '@shares/alertApi.ts';
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
import Example from '../examples/AlertExample3.vue?raw';

const fmtVueTpl = ref<string>();
const color = ref<string | undefined>('default');
const variant = ref<string>();
const alertIcon = ref<string>();
const debouncedIcon = useRefDebounced(alertIcon, 800);
const iconVariant = ref<TIconVariant | undefined>('outlined');
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
    <div class="section-content mb-4">
      <h2>Additional Contents</h2>
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
            :color="color"
            :filled="variant === 'filled'"
            :icon="debouncedIcon"
            :icon-variant="iconVariant"
            :outlined="variant === 'outlined'"
            class="mt-4"
          >
            <p>
              Aww yeah, you successfully read this alert message. This is an example how to
              construct <b>Alert</b> with additional contents.
            </p>
            <hr class="my-3" />
            <ul class="list-disc ms-4">
              <li>This is just example bullet list.</li>
              <li>
                This is
                <a class="alert-link" href="#" title="hyperlink example">hyperlink</a>
                example within an alert.
              </li>
              <li>This is just example bullet list.</li>
            </ul>
          </BsAlert>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
