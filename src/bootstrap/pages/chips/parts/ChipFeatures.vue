<script setup lang="ts">
import {
  buttonIconPositions,
  changeButtonSize,
  changeButtonState,
  changeButtonVariant,
  changeIconAnimation,
  changeIconFlip,
  changeIconName,
  changeIconPosition,
  changeIconRotation,
  dsIconFlips,
  dsIconRotations,
  iconAnimationVariants,
} from '@shares/buttonApi.ts';
import {
  changeChipActiveClass,
  changeChipAvatar,
  changeChipColor,
  changeChipShape,
  dsChipSizes,
  enableRoundedChipAvatar,
  removeAvatarPadding,
} from '@shares/chipApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import {
  dsComponentStates,
  dsContextColors,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, type Ref, ref, watchEffect } from 'vue';
import {
  Helper,
  type TButtonSize,
  type TChipSize,
  type TExtendedContextColor,
  type TIconFlip,
  type TIconPosition,
  type TIconRotation,
} from 'vue-mdbootstrap';
import Example1 from '../examples/ChipExample1.vue?raw';
import Example2 from '../examples/ChipExample2.vue?raw';

const props = defineProps<{ showIcon?: boolean; showAvatar?: boolean }>();

const fmtVueTpl = ref<string | null | undefined>();
const rawTemplate = ref<string>();

if (props.showIcon || props.showAvatar) {
  rawTemplate.value = parseVueTemplateTag(Example2);
} else {
  rawTemplate.value = parseVueTemplateTag(Example1);
}

const iconName = 'local_shipping';
const avatarUrl = 'https://ahmadfajar.github.io/img/2.jpg';
const chipColor = ref<TExtendedContextColor>('secondary');
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

useWatcherDefaultValue(
  { refObj: chipColor, default: 'secondary' },
  { refObj: chipSize, default: 'md' }
);

watchEffect(() => {
  let rawCode: string | undefined;

  iconAnimation.value = hasAnimation.value ? iconAnimation.value : undefined;
  chipIcon.value = hasAnimation.value ? 'assistant_navigation' : iconName;

  rawCode = changeChipColor(chipColor, rawTemplate.value, true);
  rawCode = changeButtonVariant(chipVariant, rawCode, true);
  rawCode = changeChipShape(chipShape, rawCode, true);
  rawCode = changeButtonSize(chipSize as Ref<TButtonSize>, rawCode, true);
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
    rawCode = enableRoundedChipAvatar(avatarRounded, rawCode, true);
    rawCode = removeAvatarPadding(avatarPaddingOff, rawCode, true);
  }

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const chipColorSrc = dsContextColors(['dark']);
const chipSizeSrc = dsChipSizes();
const chipStateSrc = dsComponentStates();
const iconFlipSrc = dsIconFlips();
const iconRotationSrc = dsIconRotations();
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
    <div class="section-content mb-4">
      <h2>
        {{ showIcon ? 'Icon Features' : showAvatar ? 'Avatar Support' : 'Overview' }}
      </h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="chipColor" :data-source="chipColorSrc" filled floating-label>
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

        <div v-if="!showAvatar" class="flex justify-between ps-2">
          <BsCheckbox v-model="chipVariant" value="outlined"> Outlined</BsCheckbox>
          <BsCheckbox v-model="chipShape" value="pill"> Rounded Pill</BsCheckbox>
        </div>

        <BsRadioGroup
          v-if="showIcon"
          v-model="iconPosition"
          :items="iconPositions"
          class="ps-2"
          column="2"
          style="margin-top: -10px"
        >
          <div class="col-form-label select-none">Icon Position:</div>
        </BsRadioGroup>

        <div v-if="showIcon" class="ps-2" style="margin-top: -10px">
          <BsCheckbox v-model="hasAnimation" :value="true"> Animation </BsCheckbox>
          <BsRadioGroup
            v-model="iconAnimation"
            :disabled="!hasAnimation"
            :items="iconAnimations"
            column="2"
          />
        </div>
        <div v-else-if="showAvatar" class="flex flex-col md-gap-y-1 ps-2">
          <BsCheckbox v-model="chipVariant" value="outlined"> Outlined</BsCheckbox>
          <BsCheckbox v-model="chipShape" value="pill"> Rounded Pill</BsCheckbox>
          <BsCheckbox v-model="avatarRounded" :disabled="chipShape === 'pill'" :value="true">
            Rounded Avatar
          </BsCheckbox>
          <BsCheckbox v-model="avatarPaddingOff" :value="true"> Remove avatar padding </BsCheckbox>
        </div>
      </template>

      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center py-4 px-3">
          <div v-if="showIcon" class="flex flex-col gap-y-4 items-center">
            <BsChip
              :active="chipState === 'active'"
              :color="chipColor"
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
              size="sm"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :color="chipColor"
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
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :color="chipColor"
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
              size="lg"
            >
              Chip Example
            </BsChip>
          </div>
          <div v-else-if="showAvatar" class="flex flex-col gap-y-4 items-center">
            <BsChip
              :active="chipState === 'active'"
              :color="chipColor"
              :disabled="chipState === 'disabled'"
              :img-circle="avatarRounded"
              :img-padding-off="avatarPaddingOff"
              :img-src="avatar"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
              size="sm"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :color="chipColor"
              :disabled="chipState === 'disabled'"
              :img-circle="avatarRounded"
              :img-padding-off="avatarPaddingOff"
              :img-src="avatar"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
            >
              Chip Example
            </BsChip>
            <BsChip
              :active="chipState === 'active'"
              :color="chipColor"
              :disabled="chipState === 'disabled'"
              :img-circle="avatarRounded"
              :img-padding-off="avatarPaddingOff"
              :img-src="avatar"
              :outlined="chipVariant === 'outlined'"
              :pill="chipShape === 'pill'"
              :readonly="chipState === 'readonly'"
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
