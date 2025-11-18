<script setup lang="ts">
import {
  buttonColors,
  buttonIconPositions,
  changeButtonShape,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  changeIconFlip,
  changeIconName,
  changeIconPosition,
  changeIconRotation,
  iconAnimationVariants,
  iconFlips,
  iconRotations,
} from '@shares/buttonApi.ts';
import {
  changeChipActiveClass,
  changeChipAvatar,
  changeChipAvatarShape,
  changeChipColor,
  chipSizes,
  removeAvatarPadding,
} from '@shares/chipApi.ts';
import { componentStates } from '@shares/showcaseDataApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import {
  Helper,
  type TChipSize,
  type TContextColorSecondary,
  type TIconFlip,
  type TIconPosition,
  type TIconRotation,
} from 'vue-mdbootstrap';

const props = defineProps<{ showIcon?: boolean; showAvatar?: boolean }>();

let example;

if (props.showIcon || props.showAvatar) {
  example = await import('../examples/ChipExample2.vue?raw');
} else {
  example = await import('../examples/ChipExample1.vue?raw');
}

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();

rawTemplate.value = parseVueTemplateTag(example.default);

const iconName = 'local_shipping';
const avatarUrl = 'https://ahmadfajar.github.io/img/2.jpg';
const chipColor = ref<TContextColorSecondary>('secondary');
const chipVariant = ref<string>();
const chipShape = ref<string | undefined>();
const chipSize = ref<string | undefined>('md');
const chipState = ref<string | undefined>();
const chipIcon = ref<string>();
const activeClass = ref<string>();
const avatar = ref<string>();
const avatarRounded = ref(false);
const avatarPaddingOff = ref(false);
const iconPosition = ref<TIconPosition>('left');
const hasAnimation = ref(false);
const iconAnimation = ref<string>();
const iconFlip = ref<TIconFlip>();
const iconRotation = ref<TIconRotation>();

watchEffect(() => {
  let rawCode: string | undefined;

  iconAnimation.value = hasAnimation.value ? iconAnimation.value : undefined;
  chipIcon.value = hasAnimation.value ? 'assistant_navigation' : iconName;

  rawCode = changeChipColor(chipColor, rawTemplate.value, true);
  rawCode = changeButtonVariant(chipVariant, rawCode, true);
  rawCode = changeButtonShape(chipShape, rawCode, true);
  rawCode = changeButtonSize(chipSize, rawCode, true);
  rawCode = changeChipActiveClass(activeClass, rawCode);
  rawCode = changeButtonState(chipState, rawCode, true);

  if (props.showIcon) {
    rawCode = changeIconName(chipIcon, rawCode, true);
    rawCode = changeIconAnimation(iconAnimation, hasAnimation.value, rawCode, true);
    rawCode = changeIconPosition(iconPosition, rawCode, true);
    rawCode = changeIconFlip(iconFlip, rawCode, true);
    rawCode = changeIconRotation(iconRotation, rawCode, true);
  } else if (props.showAvatar) {
    rawCode = changeChipAvatar(avatar, rawCode, true);
    rawCode = changeChipAvatarShape(avatarRounded, rawCode, true);
    rawCode = removeAvatarPadding(avatarPaddingOff, rawCode, true);
  }

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const chipColorSrc = buttonColors(['dark']);
const chipSizeSrc = chipSizes();
const chipStateSrc = componentStates();
const iconFlipSrc = iconFlips();
const iconRotationSrc = iconRotations();
const iconPositions = buttonIconPositions();
const iconAnimations = iconAnimationVariants();

if (props.showIcon) {
  chipIcon.value = iconName;
} else if (props.showAvatar) {
  avatar.value = avatarUrl;
}

onBeforeUnmount(() => {
  chipColorSrc.proxy.destroy();
  chipSizeSrc.proxy.destroy();
  chipStateSrc.proxy.destroy();
  iconFlipSrc.proxy.destroy();
  iconRotationSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="showIcon">Icon Features</h2>
      <h2 v-else-if="showAvatar">Avatar Support</h2>
      <h2 v-else>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox
          v-if="!showIcon && !showAvatar"
          v-model="chipColor"
          :data-source="chipColorSrc"
          filled
          floating-label
        >
          <label>Color:</label>
        </BsCombobox>
        <BsCombobox
          v-if="!showIcon && !showAvatar"
          v-model="chipSize"
          :data-source="chipSizeSrc"
          filled
          floating-label
        >
          <label>Size:</label>
        </BsCombobox>
        <BsCombobox v-model="chipState" :data-source="chipStateSrc" filled floating-label>
          <label>State:</label>
        </BsCombobox>
        <BsTextField
          v-if="!showAvatar && !showIcon"
          v-model="activeClass"
          filled
          floating-label
          help-text="Ex: chip-success active, bg-info"
        >
          <label>Custom active class</label>
        </BsTextField>

        <template v-if="showIcon">
          <BsCombobox v-model="iconFlip" :data-source="iconFlipSrc" filled floating-label>
            <label>Flip Icon</label>
          </BsCombobox>
          <BsCombobox v-model="iconRotation" :data-source="iconRotationSrc" filled floating-label>
            <label>Rotate Icon</label>
          </BsCombobox>
        </template>

        <div v-if="!showAvatar" class="flex justify-between">
          <BsCheckbox v-model="chipVariant" value="outlined"> Outlined</BsCheckbox>
          <BsCheckbox v-model="chipShape" value="pill"> Rounded Pill</BsCheckbox>
        </div>

        <BsRadioGroup
          v-if="showIcon"
          v-model="iconPosition"
          :items="iconPositions"
          class="mt-[-10px]"
          column="2"
        >
          <div class="col-form-label select-none">Icon Position:</div>
        </BsRadioGroup>

        <div v-if="showIcon" class="mt-[-10px]">
          <BsCheckbox v-model="hasAnimation" :value="true"> Animation </BsCheckbox>
          <BsRadioGroup
            v-model="iconAnimation"
            :disabled="!hasAnimation"
            :items="iconAnimations"
            column="2"
          />
        </div>
        <div v-else-if="showAvatar" class="flex flex-col gap-y-1">
          <BsCheckbox v-model="chipVariant" value="outlined"> Outlined</BsCheckbox>
          <BsCheckbox v-model="chipShape" value="pill"> Rounded Pill</BsCheckbox>
          <BsCheckbox v-model="avatarRounded" :disabled="chipShape === 'pill'" :value="true">
            Rounded Avatar
          </BsCheckbox>
          <BsCheckbox v-model="avatarPaddingOff" :value="true"> Remove avatar padding </BsCheckbox>
        </div>
      </template>

      <template #content>
        <div
          :class="[
            'h-full flex items-center justify-center min-h-40 py-6 px-3 md:rounded-lg',
            chipColor === 'light' &&
            (chipState === 'active' || (chipVariant === 'outlined' && chipState !== 'disabled'))
              ? 'bg-gray-800'
              : '',
          ]"
        >
          <div v-if="showIcon" class="flex flex-col gap-y-4 items-center">
            <BsChip
              :active="chipState === 'active'"
              :disabled="chipState === 'disabled'"
              :icon="chipIcon"
              :icon-flip="iconFlip"
              :icon-position="iconPosition"
              :icon-pulse="iconAnimation === 'pulse'"
              :icon-rotation="iconRotation"
              :icon-spin="iconAnimation === 'spin'"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              color="default"
              size="sm"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :disabled="chipState === 'disabled'"
              :icon="chipIcon"
              :icon-flip="iconFlip"
              :icon-position="iconPosition"
              :icon-pulse="iconAnimation === 'pulse'"
              :icon-rotation="iconRotation"
              :icon-spin="iconAnimation === 'spin'"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              color="primary"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :disabled="chipState === 'disabled'"
              :icon="chipIcon"
              :icon-flip="iconFlip"
              :icon-position="iconPosition"
              :icon-pulse="iconAnimation === 'pulse'"
              :icon-rotation="iconRotation"
              :icon-spin="iconAnimation === 'spin'"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              color="danger"
              size="lg"
            >
              Chip Example
            </BsChip>
          </div>
          <div v-else-if="showAvatar" class="flex flex-col gap-y-4 items-center">
            <BsChip
              :active="chipState === 'active'"
              :disabled="chipState === 'disabled'"
              :img-circle="avatarRounded"
              :img-padding-off="avatarPaddingOff"
              :img-src="avatar"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              color="default"
              size="sm"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :disabled="chipState === 'disabled'"
              :img-circle="avatarRounded"
              :img-padding-off="avatarPaddingOff"
              :img-src="avatar"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              color="primary"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :disabled="chipState === 'disabled'"
              :img-circle="avatarRounded"
              :img-padding-off="avatarPaddingOff"
              :img-src="avatar"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              color="danger"
              size="lg"
            >
              Chip Example
            </BsChip>
          </div>
          <BsChip
            v-else
            :active="chipState === 'active'"
            :active-class="!Helper.isEmpty(activeClass) ? activeClass : undefined"
            :color="chipColor"
            :disabled="chipState === 'disabled'"
            :outlined="chipVariant === 'outlined'"
            :pill="chipShape === 'pill'"
            :readonly="chipState === 'readonly'"
            :size="chipSize !== 'md' ? (chipSize as TChipSize) : undefined"
          >
            Chip Example
          </BsChip>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
