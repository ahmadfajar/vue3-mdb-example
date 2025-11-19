<script setup lang="ts">
import {
  buttonColors,
  changeButtonShape,
  changeButtonSize,
  changeButtonVariant,
} from '@shares/buttonApi.ts';
import {
  changeChipActiveClass,
  enableRoundedChipAvatar,
  changeChipColor,
  enableChipGroupMultiRows,
  dsChipSizes,
  removeAvatarPadding,
  dsChipDemoItems,
  enableChipGroupFilters,
  enableChipGroupSliders,
} from '@shares/chipApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import {
  Helper,
  type TChipOptionItem,
  type TChipSize,
  type TChipValue,
  type TContextColorSecondary,
} from 'vue-mdbootstrap';

const props = defineProps<{ showFilters?: boolean; showSlider?: boolean }>();

const example1 = await import('../examples/ChipGroupExample1.vue?raw');
const example2 = await import('../examples/ChipGroupExample2.vue?raw');
const example3 = await import('../examples/ChipGroupExample3.vue?raw');
const example4 = await import('../examples/ChipGroupExample4.vue?raw');
const example5 = await import('../examples/ChipGroupExample5.vue?raw');
const example6 = await import('../examples/ChipGroupExample6.vue?raw');

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

function parseSource(multiselection: boolean) {
  if (multiselection) {
    rawTemplate.value = parseVueTemplateTag(example4.default);
    fmtVueTsc.value = parseVueScriptTag(example4.default);
  } else {
    rawTemplate.value = parseVueTemplateTag(example1.default);
    fmtVueTsc.value = parseVueScriptTag(example1.default);
  }
}

function parseSourceWithIcon(multiselection: boolean) {
  if (multiselection) {
    rawTemplate.value = parseVueTemplateTag(example5.default);
    fmtVueTsc.value = parseVueScriptTag(example5.default);
  } else {
    rawTemplate.value = parseVueTemplateTag(example2.default);
    fmtVueTsc.value = parseVueScriptTag(example2.default);
  }
}

function parseSourceWithAvatar(multiselection: boolean) {
  if (multiselection) {
    rawTemplate.value = parseVueTemplateTag(example6.default);
    fmtVueTsc.value = parseVueScriptTag(example6.default);
  } else {
    rawTemplate.value = parseVueTemplateTag(example3.default);
    fmtVueTsc.value = parseVueScriptTag(example3.default);
  }
}

const tabIndex = ref(0);
const chipColor = ref<TContextColorSecondary>('secondary');
const chipSize = ref<string | undefined>('md');
const chipVariant = ref<string>();
const chipShape = ref<string>();
const activeClass = ref<string>();
const multiRows = ref(false);
const multiSelection = ref(false);
const showIcon = ref(false);
const showAvatar = ref(false);
const avatarRounded = ref(false);
const avatarPaddingOff = ref(false);
const selectedChip = ref<TChipValue>();
const selectedChips = ref<TChipValue[]>([]);
const chipSources = ref<TChipOptionItem[]>(dsChipDemoItems());

watch(chipSize, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    const oldVal1 = selectedChip.value;
    const oldVal2 = selectedChips.value;

    selectedChip.value = undefined;
    selectedChips.value = [];

    window.requestAnimationFrame(() => {
      if (multiSelection.value) {
        selectedChips.value = oldVal2;
      } else {
        selectedChip.value = oldVal1;
      }
    });
  }
});

watchEffect(() => {
  let rawCode: string | undefined;

  if (showIcon.value) {
    showAvatar.value = false;
    parseSourceWithIcon(multiSelection.value);
  } else if (showAvatar.value) {
    showIcon.value = false;
    parseSourceWithAvatar(multiSelection.value);
  } else {
    parseSource(multiSelection.value);
  }

  // Reset sources when configuration changes.
  // Specially when chip size change, the icons or avatars
  // sometime doesn't change. This procedure fixed it.
  chipSources.value = dsChipDemoItems();
  window.requestAnimationFrame(() => {
    if (showIcon.value) {
      chipSources.value = dsChipDemoItems('icon');
    } else if (showAvatar.value) {
      chipSources.value = dsChipDemoItems('avatar');
    }
  });
  // end of procedure

  if (multiSelection.value) {
    selectedChip.value = undefined;
  } else {
    selectedChips.value = [];
  }

  rawCode = changeChipColor(chipColor, rawTemplate.value);
  rawCode = changeButtonVariant(chipVariant, rawCode);
  rawCode = changeButtonShape(chipShape, rawCode);
  rawCode = changeButtonSize(chipSize, rawCode);
  rawCode = changeChipActiveClass(activeClass, rawCode);
  rawCode = enableChipGroupMultiRows(multiRows, rawCode);

  if (showAvatar.value) {
    rawCode = enableRoundedChipAvatar(avatarRounded, rawCode);
    rawCode = removeAvatarPadding(avatarPaddingOff, rawCode);
  }
  if (props.showFilters) {
    rawCode = enableChipGroupFilters(props.showFilters, rawCode);
  } else if (props.showSlider) {
    rawCode = enableChipGroupSliders(props.showSlider, rawCode);
  }

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const chipColorSrc = buttonColors(['dark']);
const chipSizeSrc = dsChipSizes();

onBeforeUnmount(() => {
  chipColorSrc.proxy.destroy();
  chipSizeSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="min-h-121">
          <h5 class="mt-2">Configuration Options:</h5>

          <BsTabs v-model="tabIndex" class="mx-[-12px]" variant="material">
            <BsTab label="General">
              <div class="flex flex-col gap-y-4">
                <BsCombobox v-model="chipColor" :data-source="chipColorSrc" filled floating-label>
                  <label>Color:</label>
                </BsCombobox>
                <BsCombobox v-model="chipSize" :data-source="chipSizeSrc" filled floating-label>
                  <label>Size:</label>
                </BsCombobox>
                <BsTextField
                  v-model="activeClass"
                  filled
                  floating-label
                  help-text="Ex: chip-success active, bg-info"
                >
                  <label>Custom active class</label>
                </BsTextField>
              </div>
            </BsTab>
            <BsTab label="Other">
              <div class="flex flex-col gap-2">
                <BsCheckbox v-model="chipVariant" value="outlined"> Outlined </BsCheckbox>
                <BsCheckbox v-model="chipShape" value="pill"> Rounded Pill </BsCheckbox>
                <BsCheckbox v-if="!showSlider" v-model="multiRows" :value="true">
                  Multi Rows
                </BsCheckbox>
                <BsCheckbox v-model="multiSelection" :value="true"> Multiple Selection </BsCheckbox>
                <BsCheckbox v-model="showIcon" :disabled="showAvatar" :value="true">
                  Show Icon
                </BsCheckbox>
                <BsCheckbox v-model="showAvatar" :disabled="showIcon" :value="true">
                  Show Avatar
                </BsCheckbox>
                <BsCheckbox
                  v-model="avatarRounded"
                  :disabled="chipShape === 'pill' || showIcon || !showAvatar"
                  :value="true"
                >
                  Rounded Avatar
                </BsCheckbox>
                <BsCheckbox
                  v-if="!showFilters"
                  v-model="avatarPaddingOff"
                  :disabled="showIcon || !showAvatar"
                  :value="true"
                >
                  Remove avatar padding
                </BsCheckbox>
              </div>
            </BsTab>
          </BsTabs>
        </div>
      </template>

      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 py-6 px-3 md:rounded-lg">
          <BsChipGroup
            v-if="multiSelection"
            v-model="selectedChips"
            :active-class="!Helper.isEmpty(activeClass) ? activeClass : undefined"
            :checked-icon="showFilters"
            :color="chipColor"
            :column="multiRows"
            :img-circle="avatarRounded"
            :img-padding-off="avatarPaddingOff"
            :items="chipSources"
            :outlined="chipVariant === 'outlined'"
            :pill="chipShape === 'pill'"
            :size="chipSize !== 'md' ? (chipSize as TChipSize) : undefined"
            :slider-button="showSlider"
            multiple
          />
          <BsChipGroup
            v-else
            v-model="selectedChip"
            :active-class="!Helper.isEmpty(activeClass) ? activeClass : undefined"
            :checked-icon="showFilters"
            :color="chipColor"
            :column="multiRows"
            :img-circle="avatarRounded"
            :img-padding-off="avatarPaddingOff"
            :items="chipSources"
            :outlined="chipVariant === 'outlined'"
            :pill="chipShape === 'pill'"
            :size="chipSize !== 'md' ? (chipSize as TChipSize) : undefined"
            :slider-button="showSlider"
          />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
