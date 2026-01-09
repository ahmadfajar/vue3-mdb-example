<script setup lang="ts">
import {
  changeFieldIcon,
  dsFieldIconPlacements,
  dsFieldStyleVariants,
  enableFieldClearable,
} from '@shares/fieldApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { changeComponentVariant, useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example1 from '../examples/TextFieldExample2.vue?raw';
import Example2 from '../examples/TextFieldExample4.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
const variant = ref('default');
const showIcon = ref(false);
const iconName1 = ref(props.section === 'prefix-suffix' ? 'public' : 'person_filled');
const iconName2 = ref(props.section === 'prefix-suffix' ? 'email' : 'email_filled');
const iconPlacement = ref('prepend-icon');
const clearable = ref(false);
const rawTemplate = parseVueTemplateTag(props.section === 'prefix-suffix' ? Example2 : Example1);

useWatcherDefaultValue(
  { refObj: variant, default: 'default' },
  { refObj: iconPlacement, default: 'prepend-icon' }
);

watchEffect(() => {
  let rawCode = rawTemplate;

  if (variant.value !== 'default') {
    rawCode = changeComponentVariant(variant, rawCode, true);
  }
  if (showIcon.value) {
    rawCode = changeFieldIcon(iconPlacement.value, iconName1.value, rawCode, true);
  }

  rawCode = enableFieldClearable(clearable.value, rawCode, true);
  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const variantSrc = dsFieldStyleVariants();
const iconPlacementSrc = dsFieldIconPlacements();
const contentCls = ['h-full min-h-40 flex flex-col md-gap-4 justify-center', 'p-3 p-md-5'];

onBeforeUnmount(() => {
  variantSrc.proxy.destroy();
  iconPlacementSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2 v-if="section === 'prefix-suffix'">Prefix and Suffix</h2>
      <h2 v-else>Browser Autocomplete</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
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
        <div v-if="section === 'prefix-suffix'" :class="contentCls">
          <BsTextField
            :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName1 : undefined"
            :append-icon-outer="
              showIcon && iconPlacement === 'append-icon-outer' ? iconName1 : undefined
            "
            :clear-button="clearable"
            :filled="variant?.startsWith('filled')"
            :outlined="variant?.startsWith('outlined')"
            :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName1 : undefined"
            :prepend-icon-outer="
              showIcon && iconPlacement === 'prepend-icon-outer' ? iconName1 : undefined
            "
            :rounded="variant?.endsWith('rounded')"
            floating-label
            prefix="www."
          >
            <label>Website</label>
          </BsTextField>
          <BsTextField
            :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName2 : undefined"
            :append-icon-outer="
              showIcon && iconPlacement === 'append-icon-outer' ? iconName2 : undefined
            "
            :clear-button="clearable"
            :filled="variant?.startsWith('filled')"
            :outlined="variant?.startsWith('outlined')"
            :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName2 : undefined"
            :prepend-icon-outer="
              showIcon && iconPlacement === 'prepend-icon-outer' ? iconName2 : undefined
            "
            :rounded="variant?.endsWith('rounded')"
            floating-label
            suffix="@example.com"
          >
            <label>Email Address</label>
          </BsTextField>
        </div>
        <div v-else :class="contentCls">
          <BsTextField
            :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName1 : undefined"
            :append-icon-outer="
              showIcon && iconPlacement === 'append-icon-outer' ? iconName1 : undefined
            "
            :clear-button="clearable"
            :filled="variant?.startsWith('filled')"
            :outlined="variant?.startsWith('outlined')"
            :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName1 : undefined"
            :prepend-icon-outer="
              showIcon && iconPlacement === 'prepend-icon-outer' ? iconName1 : undefined
            "
            :rounded="variant?.endsWith('rounded')"
            action-icon-variant="filled"
            autocomplete="name"
            floating-label
          >
            <label>Full Name</label>
          </BsTextField>
          <BsTextField
            :append-icon="showIcon && iconPlacement === 'append-icon' ? iconName2 : undefined"
            :append-icon-outer="
              showIcon && iconPlacement === 'append-icon-outer' ? iconName2 : undefined
            "
            :clear-button="clearable"
            :filled="variant?.startsWith('filled')"
            :outlined="variant?.startsWith('outlined')"
            :prepend-icon="showIcon && iconPlacement === 'prepend-icon' ? iconName2 : undefined"
            :prepend-icon-outer="
              showIcon && iconPlacement === 'prepend-icon-outer' ? iconName2 : undefined
            "
            :rounded="variant?.endsWith('rounded')"
            action-icon-variant="filled"
            autocomplete="email"
            floating-label
            type="email"
          >
            <label>Email Address</label>
          </BsTextField>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
