<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';
import {
  BsArrayStore,
  type TButtonSize,
  type TDataListSchema,
  type TDataSource,
  type TIconPosition,
  type TRadioInputProps,
} from 'vue-mdbootstrap';

const iconName = 'settings';
const btnVariant = ref('filled');
const btnShape = ref('pill');
const btnSize = ref('md');
const btnState = ref<string>('default');
const btnElevated = ref(false);
const hasIcon = ref(false);
const btnIcon = ref<string>();
const iconPosition = ref<TIconPosition>('left');
const iconSize = ref(24);
const hasAnimation = ref(false);
const iconAnimation = ref<string>();
const schemaConfigDefinition: TDataListSchema = { displayField: 'label', valueField: 'value' };

watch(
  () => btnSize.value,
  async (value) => {
    if (value === 'lg') {
      iconSize.value = 30;
    } else if (value === 'sm') {
      iconSize.value = 20;
    } else if (value === 'xs') {
      iconSize.value = 16;
    } else {
      iconSize.value = 24;
    }

    if (hasIcon.value) {
      btnIcon.value = undefined;
      await nextTick(() => {
        btnIcon.value = iconName;
      });
    }
  }
);
watch(
  () => hasIcon.value,
  (value) => {
    btnIcon.value = value ? iconName : undefined;
    iconAnimation.value = value ? iconAnimation.value : undefined;
  }
);
watch(
  () => hasAnimation.value,
  (value) => {
    iconAnimation.value = value ? iconAnimation.value : undefined;
  }
);

const btnVariants: TDataSource = {
  proxy: new BsArrayStore(
    [
      { value: 'filled', label: 'Filled (Default)' },
      { value: 'tonal', label: 'Tonal' },
      { value: 'outlined', label: 'Outlined' },
      { value: 'flat', label: 'Flat' },
    ],
    {
      idProperty: 'value',
    }
  ),
  schema: schemaConfigDefinition,
};

const btnShapes: TDataSource = {
  proxy: new BsArrayStore(
    [
      { value: 'pill', label: 'Pill (Default)' },
      { value: 'rounded', label: 'Rounded' },
      { value: 'pill-off', label: 'Rectangle' },
    ],
    {
      idProperty: 'value',
    }
  ),
  schema: schemaConfigDefinition,
};

const btnSizes: TDataSource = {
  proxy: new BsArrayStore(
    [
      { value: 'md', label: 'Default' },
      { value: 'lg', label: 'Large' },
      { value: 'sm', label: 'Small' },
      { value: 'xs', label: 'Extra Small' },
    ],
    {
      idProperty: 'value',
    }
  ),
  schema: schemaConfigDefinition,
};

const btnStates: TDataSource = {
  proxy: new BsArrayStore(
    [
      { value: 'default', label: 'Default' },
      { value: 'active', label: 'Active' },
      { value: 'readonly', label: 'Readonly' },
      { value: 'disabled', label: 'Disabled' },
    ],
    {
      idProperty: 'value',
    }
  ),
  schema: schemaConfigDefinition,
};

const iconPositions = [
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
] satisfies TRadioInputProps[];

const iconAnimations = [
  { value: 'spin', label: 'Spin' },
  { value: 'pulse', label: 'Pulse' },
] satisfies TRadioInputProps[];

onBeforeUnmount(() => {
  btnVariants.proxy.destroy();
  btnShapes.proxy.destroy();
  btnSizes.proxy.destroy();
});
</script>

<template>
  <div class="docs-body">
    <div class="section-content">
      <h2>Display list of icons for demos</h2>
    </div>
    <div class="section-demo mt-4">
      <ShowcaseBox>
        <template #side-panel>
          <h5 class="mt-2">Configuration Options:</h5>

          <BsCombobox v-model="btnVariant" :data-source="btnVariants" filled floating-label>
            <label>Variant:</label>
          </BsCombobox>
          <BsCombobox v-model="btnShape" :data-source="btnShapes" filled floating-label>
            <label>Shape:</label>
          </BsCombobox>
          <BsCombobox v-model="btnSize" :data-source="btnSizes" filled floating-label>
            <label>Size:</label>
          </BsCombobox>
          <BsCombobox v-model="btnState" :data-source="btnStates" filled floating-label>
            <label>State:</label>
          </BsCombobox>

          <div class="flex md-gap-x-2">
            <BsCheckbox v-model="btnElevated" :value="true"> Elevated </BsCheckbox>
            <BsCheckbox v-model="hasIcon" :value="true"> Icon </BsCheckbox>
          </div>
          <BsRadioGroup
            v-model="iconPosition"
            :disabled="!hasIcon"
            :items="iconPositions"
            column="2"
          >
            <div class="col-form-label select-none">Icon Position:</div>
          </BsRadioGroup>
          <div>
            <BsCheckbox v-model="hasAnimation" :disabled="!hasIcon" :value="true">
              Icon Animation
            </BsCheckbox>
            <BsRadioGroup
              v-model="iconAnimation"
              :disabled="!hasIcon || !hasAnimation"
              :items="iconAnimations"
              column="2"
            />
          </div>
        </template>

        <template #content>
          <div class="h-full flex flex-col items-center justify-center">
            <BsButton
              :active="btnState === 'active'"
              :disabled="btnState === 'disabled'"
              :flat="btnVariant === 'flat'"
              :icon="btnIcon"
              :icon-position="iconPosition"
              :icon-pulse="iconAnimation === 'pulse'"
              :icon-size="iconSize"
              :icon-spin="iconAnimation === 'spin'"
              :outlined="btnVariant === 'outlined'"
              :pill-off="btnShape === 'pill-off'"
              :raised="btnElevated"
              :readonly="btnState === 'readonly'"
              :rounded="btnShape === 'rounded'"
              :size="btnSize !== 'md' ? (btnSize as TButtonSize) : undefined"
              :tonal="btnVariant === 'tonal'"
            >
              Button
            </BsButton>
          </div>
        </template>
      </ShowcaseBox>
    </div>
  </div>
</template>
