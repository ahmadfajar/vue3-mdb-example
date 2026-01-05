<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  useWatcherDefaultValue,
  etsyMixtapeText,
  foodTruckText,
  rawDenimText,
} from '@shares/showcaseDataApi.ts';
import {
  changeTabIconLabel,
  changeTabsAlignment,
  changeTabsIconPosition,
  changeTabsPosition,
  changeTabsVariant,
  dsTabAlignments,
  dsTabIconAndLabel,
  dsTabPositions,
  dsTabVariants,
} from '@shares/tabsApi.ts';
import { computed, onBeforeUnmount, ref, watchEffect } from 'vue';
import type { TAlignment, TPlacementPosition, TTabsVariant } from 'vue-mdbootstrap';
import Example1 from '../examples/TabsExample1.vue?raw';
import Example2 from '../examples/TabsExample2.vue?raw';

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const activeTab = ref(0);
const tabVariant = ref<TTabsVariant>('tabs');
const tabAlignment = ref<TAlignment>('start');
const tabPlacement = ref<TPlacementPosition>('top');
const iconPosition = ref<TPlacementPosition>('left');
const iconLabel = ref<string>('both');

const innerClass = computed(() => {
  if (['tabs', 'pills'].includes(tabVariant.value) && tabPlacement.value === 'top') {
    return ['md-card-header'];
  } else if (['tabs', 'pills'].includes(tabVariant.value) && tabPlacement.value === 'bottom') {
    return ['md-card-footer'];
  }

  return undefined;
});

useWatcherDefaultValue(
  { refObj: tabVariant, default: 'tabs' },
  { refObj: tabAlignment, default: 'start' },
  { refObj: tabPlacement, default: 'top' },
  { refObj: iconPosition, default: 'left' },
  { refObj: iconLabel, default: 'both' }
);

watchEffect(() => {
  let rawCode: string | undefined;

  if (tabVariant.value === 'material' || tabVariant.value === 'modern') {
    rawTemplate.value = parseVueTemplateTag(Example2);
    fmtVueTsc.value = parseVueScriptTag(Example2);
  } else {
    rawTemplate.value = parseVueTemplateTag(Example1);
    fmtVueTsc.value = parseVueScriptTag(Example1);
  }

  rawCode = changeTabsVariant(tabVariant, rawTemplate.value);
  rawCode = changeTabsAlignment(tabAlignment, rawCode);
  rawCode = changeTabsPosition(tabPlacement, tabVariant, rawCode);
  rawCode = changeTabsIconPosition(iconPosition, rawCode);
  rawCode = changeTabIconLabel(iconLabel, rawCode);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const tabsVariantSrc = dsTabVariants();
const tabsAlignmentSrc = dsTabAlignments();
const tabsPlacementSrc = dsTabPositions();
const tabsIconPositionSrc = dsTabPositions();
const tabsIconAndLabelSrc = dsTabIconAndLabel();
const contentCls = ['h-full min-h-40 flex items-center', 'p-3 p-md-4'];

onBeforeUnmount(() => {
  tabsVariantSrc.proxy.destroy();
  tabsAlignmentSrc.proxy.destroy();
  tabsPlacementSrc.proxy.destroy();
  tabsIconPositionSrc.proxy.destroy();
  tabsIconAndLabelSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="tabVariant" :data-source="tabsVariantSrc" filled floating-label>
          <label>Style Variant:</label>
        </BsCombobox>
        <BsCombobox v-model="tabAlignment" :data-source="tabsAlignmentSrc" filled floating-label>
          <label>Alignment:</label>
        </BsCombobox>
        <BsCombobox v-model="tabPlacement" :data-source="tabsPlacementSrc" filled floating-label>
          <label>Position:</label>
        </BsCombobox>
        <BsCombobox v-model="iconPosition" :data-source="tabsIconPositionSrc" filled floating-label>
          <label>Icon Position:</label>
        </BsCombobox>
        <BsCombobox
          v-model="iconLabel"
          :data-source="tabsIconAndLabelSrc"
          class="mb-3"
          filled
          floating-label
        >
          <label>Icon & Label:</label>
        </BsCombobox>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsCard v-if="['modern', 'material'].includes(tabVariant)" class="shadow">
            <BsApp style="min-height: 380px">
              <BsAppbar class="bg-indigo-600">
                <BsButton color="light" flat icon="menu" mode="icon" />
                <BsAppbarTitle class="text-white" title="Page Title" />
                <BsSpacer />
                <BsButton color="light" flat icon="more_vert" mode="icon" />
              </BsAppbar>
              <BsTabs
                v-model="activeTab"
                :alignment="tabAlignment"
                :icon-position="iconPosition"
                :inner-class="innerClass"
                :tab-position="tabPlacement"
                :variant="tabVariant"
                color="bg-indigo-600"
                content-class="flex-grow"
              >
                <BsTab
                  :icon="['both', 'icon'].includes(iconLabel) ? 'home_rounded' : undefined"
                  :label="['both', 'label'].includes(iconLabel) ? 'Home' : undefined"
                >
                  {{ rawDenimText }}
                </BsTab>
                <BsTab
                  :icon="['both', 'icon'].includes(iconLabel) ? 'person' : undefined"
                  :label="['both', 'label'].includes(iconLabel) ? 'Profile' : undefined"
                >
                  {{ foodTruckText }}
                </BsTab>
                <BsTab
                  :icon="['both', 'icon'].includes(iconLabel) ? 'text_snippet' : undefined"
                  :label="['both', 'label'].includes(iconLabel) ? 'Story' : undefined"
                >
                  {{ etsyMixtapeText }}
                </BsTab>
              </BsTabs>
            </BsApp>
          </BsCard>
          <BsCard v-else shadow>
            <BsTabs
              v-model="activeTab"
              :alignment="tabAlignment"
              :icon-position="iconPosition"
              :inner-class="innerClass"
              :tab-position="tabPlacement"
              :variant="tabVariant"
              content-class="flex-grow"
            >
              <BsTab
                :icon="['both', 'icon'].includes(iconLabel) ? 'home_rounded' : undefined"
                :label="['both', 'label'].includes(iconLabel) ? 'Home' : undefined"
              >
                {{ rawDenimText }}
              </BsTab>
              <BsTab
                :icon="['both', 'icon'].includes(iconLabel) ? 'person' : undefined"
                :label="['both', 'label'].includes(iconLabel) ? 'Profile' : undefined"
              >
                {{ foodTruckText }}
              </BsTab>
              <BsTab
                :icon="['both', 'icon'].includes(iconLabel) ? 'text_snippet' : undefined"
                :label="['both', 'label'].includes(iconLabel) ? 'Story' : undefined"
              >
                {{ etsyMixtapeText }}
              </BsTab>
            </BsTabs>
          </BsCard>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
