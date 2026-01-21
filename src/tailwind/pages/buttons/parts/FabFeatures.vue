<script setup lang="ts">
import {
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  dsButtonSizes,
  dsFabButtonVariants,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  changeComponentColor,
  dsComponentStates,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, type Ref, ref, watch, watchEffect } from 'vue';
import { type TButtonColor, type TButtonSize } from 'vue-mdbootstrap';
import Example1 from '../examples/ButtonExample3.vue?raw';
import Example2 from '../examples/ButtonExample4.vue?raw';

const props = defineProps<{ extended?: boolean }>();

let iconName: string | undefined;
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

if (props.extended) {
  rawTemplate.value = parseVueTemplateTag(Example2);
  iconName = 'navigation';
} else {
  rawTemplate.value = parseVueTemplateTag(Example1);
  iconName = 'shopping_cart';
}

const btnVariant = ref<string | undefined>('filled');
const btnColor = ref<TButtonColor | undefined>('default');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string | undefined>();
const btnIcon = ref<string | undefined>(`${iconName}_${btnVariant.value}`);
const iconSize = ref(28);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();

function changeButtonIcon(data?: string): string | undefined {
  const tmp = data?.replace('{$icon}', `icon="${btnIcon.value}"`);

  return tmp?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
}

function stopAnimation() {
  hasAnimation.value = false;
  iconAnimation.value = undefined;
}

watch(btnSize, async (value) => {
  if (value === 'lg') {
    iconSize.value = 38;
  } else if (value === 'sm') {
    iconSize.value = 24;
  } else if (value === 'xs') {
    iconSize.value = 18;
  } else {
    iconSize.value = 28;
  }

  btnIcon.value = undefined;
  await nextTick(() => {
    btnIcon.value = `${iconName}_${btnVariant.value}`;
    if (!value) {
      btnSize.value = 'md';
    }
  });
});

watch(btnVariant, async (value) => {
  btnIcon.value = undefined;

  await nextTick(() => {
    if (!value) {
      btnVariant.value = 'filled';
    }
    btnIcon.value = `${iconName}_${btnVariant.value}`;
  });
});

watchEffect(() => {
  let rawCode = rawTemplate.value;

  btnColor.value = !btnColor.value ? 'default' : btnColor.value;
  hasAnimation.value = !!iconAnimation.value;

  if (btnVariant.value === 'outlined') {
    rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
  }
  if (btnColor.value !== 'default') {
    rawCode = changeComponentColor(btnColor, rawCode!);
  }

  rawCode = changeButtonSize(btnSize as Ref<TButtonSize>, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonIcon(rawCode);
  rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const btnVariants = dsFabButtonVariants();
const btnColors = dsContextColors();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStates();
const contentCls = ['h-full min-h-40 flex items-center justify-center px-6 py-8 md:rounded-lg'];

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnColors.proxy.destroy();
  btnSizes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ extended ? 'Extended FAB' : 'FAB' }} Button</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="btnColor" :data-source="btnColors" filled floating-label>
          <label>Color:</label>
        </BsCombobox>
        <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
          <label>Size:</label>
        </BsCombobox>
        <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
          <label>State:</label>
        </BsCombobox>

        <div class="ps-2">
          <div class="mt-3 mb-1 select-none font-weight-medium">Animation:</div>
          <div class="row row-cols-2">
            <div class="col">
              <BsRadio v-model="iconAnimation" value="spin"> Spin </BsRadio>
            </div>
            <div class="col">
              <BsRadio v-model="iconAnimation" value="pulse"> Pulse </BsRadio>
            </div>
          </div>
        </div>
        <div class="grid mb-4">
          <BsButton :disabled="!hasAnimation" @click="stopAnimation()"> Stop Animation </BsButton>
        </div>
      </template>

      <template #content>
        <div
          :class="[
            ...contentCls,
            btnColor === 'light' && btnState !== 'disabled'
              ? 'bg-gray-800 dark:bg-neutral-900'
              : '',
          ]"
        >
          <BsButton
            v-if="extended"
            :active="btnState === 'active'"
            :color="btnColor"
            :disabled="btnState === 'disabled'"
            :icon="btnIcon"
            :icon-pulse="iconAnimation === 'pulse'"
            :icon-size="iconSize"
            :icon-spin="iconAnimation === 'spin'"
            :outlined="btnVariant === 'outlined'"
            :readonly="btnState === 'readonly'"
            :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
            mode="fab"
            aria-label="FAB Button"
          >
            Navigate
          </BsButton>
          <BsButton
            v-else
            :active="btnState === 'active'"
            :color="btnColor"
            :disabled="btnState === 'disabled'"
            :icon="btnIcon"
            :icon-pulse="iconAnimation === 'pulse'"
            :icon-size="iconSize"
            :icon-spin="iconAnimation === 'spin'"
            :outlined="btnVariant === 'outlined'"
            :readonly="btnState === 'readonly'"
            :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
            mode="fab"
            aria-label="FAB Button"
          />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
