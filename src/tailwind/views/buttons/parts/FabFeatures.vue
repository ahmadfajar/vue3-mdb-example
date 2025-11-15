<script setup lang="ts">
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  buttonSizes,
  buttonStates,
  fabButtonVariants,
  iconAnimationVariants,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue';
import { type TButtonSize } from 'vue-mdbootstrap';

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

const btnVariant = ref();
const btnSize = ref('md');
const btnState = ref<string>('default');
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

function changeButtonSize(data?: string): string | undefined {
  switch (btnSize.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      return data?.replace('{$sizes}', `size="${btnSize.value}"`);
    default:
      return data;
  }
}

function changeButtonState(data?: string): string | undefined {
  switch (btnState.value) {
    case 'disabled':
    case 'readonly':
    case 'active':
      return data?.replace('{$states}', btnState.value);
    default:
      return data;
  }
}

function changeButtonIcon(data?: string): string | undefined {
  const tmp = data?.replace('{$icon}', `icon="${btnIcon.value}"`);

  return tmp?.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
}

function changeIconAnimation(data?: string): string | undefined {
  if (hasAnimation.value && iconAnimation.value) {
    return data?.replace('{$iconAnimation}', `icon-${iconAnimation.value}`);
  }

  return data;
}

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeButtonVariant(rawTemplate.value);
  rawCode = changeButtonSize(rawCode);
  rawCode = changeButtonState(rawCode);
  rawCode = changeButtonIcon(rawCode);
  rawCode = changeIconAnimation(rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

watch(
  () => btnSize.value,
  async (value) => {
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
    });
  }
);

watch(
  () => btnVariant.value,
  async (value) => {
    btnIcon.value = undefined;
    await nextTick(() => {
      btnIcon.value = `${iconName}_${value}`;
    });
  }
);

watch(
  () => hasAnimation.value,
  (value) => {
    iconAnimation.value = value ? iconAnimation.value : undefined;
  }
);

const btnVariants = fabButtonVariants();
const btnSizes = buttonSizes();
const btnStates = buttonStates();
const iconAnimations = iconAnimationVariants();

onMounted(() => {
  // trigger reactivity on first load
  btnVariant.value = 'filled';
  btnIcon.value = `${iconName}_${btnVariant.value}`;
});

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnSizes.proxy.destroy();
  btnStates.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ extended ? 'Extended ' : '' }}FAB Button</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
          <label>Size:</label>
        </BsCombobox>
        <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
          <label>State:</label>
        </BsCombobox>

        <div class="flex flex-col">
          <BsCheckbox v-model="hasAnimation" :value="true"> Icon Animation</BsCheckbox>
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
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8">
          <BsButton
            v-if="extended"
            :active="btnState === 'active'"
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
