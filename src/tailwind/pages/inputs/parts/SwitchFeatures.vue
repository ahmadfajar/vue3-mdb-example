<script setup lang="ts">
import { changeButtonState } from '@shares/buttonApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  changeComponentColor,
  changeComponentVariant,
  dsComponentStatesRD,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { dsSwitchVariants, enableSwitchThumbIcon } from '@shares/switchApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example from '../examples/SwitchExample1.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const variant = ref<string>('default');
const color = ref<string>('default');
const state = ref<string>();
const switch1 = ref<string>();
const thumbIcon = ref(false);

const rawTemplate = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
  { refObj: color, default: 'default' }
);

watchEffect(() => {
  let rawCode: string = rawTemplate;

  if (variant.value === 'default') {
    thumbIcon.value = false;
  } else {
    rawCode = changeComponentVariant(variant, rawCode);
  }

  rawCode = enableSwitchThumbIcon(thumbIcon, variant, rawCode);
  rawCode = changeComponentColor(color, rawCode);
  rawCode = changeButtonState(state, rawCode) as string;

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsSwitchVariants();
const colorSrc = dsContextColors(['dark', 'light']);
const stateSrc = dsComponentStatesRD();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-4 md:px-8'];

onBeforeUnmount(() => {
  variantSrc.proxy.destroy();
  colorSrc.proxy.destroy();
  stateSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Features Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="variant" :data-source="variantSrc" filled floating-label>
          <label>Style Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="color" :data-source="colorSrc" filled floating-label>
          <label>Color Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="state" :data-source="stateSrc" filled floating-label>
          <label>State:</label>
        </BsCombobox>
        <div class="ps-2">
          <BsSwitch
            v-model="thumbIcon"
            :disabled="variant === 'default'"
            :value="true"
            checked-icon
            inset-outlined
            label-class="flex-fill"
            label-position="left"
          >
            Show thumb icon
          </BsSwitch>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div class="w-full max-w-60">
            <BsSwitch
              v-if="variant === 'inset-outlined'"
              v-model="switch1"
              :checked-icon="thumbIcon"
              :checkoff-icon="thumbIcon"
              :color="color"
              :disabled="state === 'disabled'"
              :readonly="state === 'readonly'"
              inset-outlined
              value="on"
            >
              Power meter: <b>{{ switch1 ?? 'off' }}</b>
            </BsSwitch>
            <BsSwitch
              v-else-if="variant === 'inset'"
              v-model="switch1"
              :checked-icon="thumbIcon"
              :checkoff-icon="thumbIcon"
              :color="color"
              :disabled="state === 'disabled'"
              :readonly="state === 'readonly'"
              inset-mode
              value="on"
            >
              Power meter: <b>{{ switch1 ?? 'off' }}</b>
            </BsSwitch>
            <BsSwitch
              v-else
              v-model="switch1"
              :color="color"
              :disabled="state === 'disabled'"
              :readonly="state === 'readonly'"
              value="on"
            >
              Power meter: <b>{{ switch1 ?? 'off' }}</b>
            </BsSwitch>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
