<script setup lang="ts">
import {
  changeButtonSize,
  changeButtonState,
  changeIconAnimation,
  dsButtonSizes,
  dsFabButtonVariants,
  iconAnimationVariants,
} from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  changeComponentColor,
  dsComponentStates,
  dsContextColors,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import { type TButtonColor, type TButtonSize } from 'vue-mdbootstrap';

const props = defineProps<{ extended?: boolean }>();

let example, iconName: string | undefined;

if (props.extended) {
  example = await import('../examples/ButtonExample4.vue?raw');
  iconName = 'navigation';
} else {
  example = await import('../examples/ButtonExample3.vue?raw');
  iconName = 'shopping_cart';
}

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);

const btnVariant = ref<string>();
const btnColor = ref<TButtonColor | undefined>('default');
const btnSize = ref<string | undefined>('md');
const btnState = ref<string | undefined>();
const btnIcon = ref<string>();
const iconSize = ref(28);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();

function changeButtonVariant(data?: string): string | undefined {
  if (btnVariant.value === 'outlined') {
    return data?.replace('{$variants}', 'outlined');
  } else {
    return data;
  }
}

function changeButtonIcon(data?: string): string | undefined {
  const tmp = data?.replace('{$icon}', `icon="${btnIcon.value}"`);

  return tmp?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(rawTemplate.value);
  rawCode = changeComponentColor(btnColor, rawCode!);
  rawCode = changeButtonSize(btnSize, rawCode);
  rawCode = changeButtonState(btnState, rawCode);
  rawCode = changeButtonIcon(rawCode);
  rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

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

watch(hasAnimation, (value) => {
  iconAnimation.value = value ? iconAnimation.value : undefined;
});

const btnVariants = dsFabButtonVariants();
const btnColors = dsContextColors();
const btnSizes = dsButtonSizes();
const btnStates = dsComponentStates();
const iconAnimations = iconAnimationVariants();
const contentCls = ['h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg'];

onMounted(() => {
  // trigger reactivity on first load
  btnVariant.value = 'filled';
  btnIcon.value = `${iconName}_${btnVariant.value}`;
});

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

        <div class="flex flex-col ps-2">
          <BsCheckbox v-model="hasAnimation" :value="true"> Icon Animation </BsCheckbox>
          <BsRadioGroup
            v-model="iconAnimation"
            :disabled="!hasAnimation"
            :items="iconAnimations"
            class="mt-2"
            column="2"
          />
        </div>
      </template>

      <template #content>
        <div
          :class="[
            ...contentCls,
            btnColor === 'light' && btnState !== 'disabled' ? 'bg-gray-800' : '',
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
