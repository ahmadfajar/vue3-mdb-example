<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { addWatcherForDefaultValue } from '@shares/showcaseDataApi.ts';
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

const example1 = await import('../examples/TabsExample1.vue?raw');
const example2 = await import('../examples/TabsExample2.vue?raw');

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

addWatcherForDefaultValue(
  { refObj: tabVariant, default: 'tabs' },
  { refObj: tabAlignment, default: 'start' },
  { refObj: tabPlacement, default: 'top' },
  { refObj: iconPosition, default: 'left' },
  { refObj: iconLabel, default: 'both' }
);

watchEffect(() => {
  let rawCode: string | undefined;

  if (tabVariant.value === 'material' || tabVariant.value === 'modern') {
    rawTemplate.value = parseVueTemplateTag(example2.default);
    fmtVueTsc.value = parseVueScriptTag(example2.default);
  } else {
    rawTemplate.value = parseVueTemplateTag(example1.default);
    fmtVueTsc.value = parseVueScriptTag(example1.default);
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

// prettier-ignore
const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
// prettier-ignore
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
// prettier-ignore
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
const contentCls = ['h-full min-h-40', 'py-8 px-3 lg:px-8 md:rounded-lg'];

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
    <div class="section-content mb-5">
      <h2>Features</h2>
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
        <BsCombobox v-model="iconLabel" :data-source="tabsIconAndLabelSrc" filled floating-label>
          <label>Icon & Label:</label>
        </BsCombobox>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsCard v-if="['modern', 'material'].includes(tabVariant)" shadow>
            <BsApp style="min-height: 380px">
              <BsAppbar class="bg-violet-800">
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
                color="bg-violet-800"
                content-class="flex-grow"
              >
                <BsTab
                  :icon="['both', 'icon'].includes(iconLabel) ? 'home_rounded' : undefined"
                  :label="['both', 'label'].includes(iconLabel) ? 'Home' : undefined"
                >
                  {{ homeTab }}
                </BsTab>
                <BsTab
                  :icon="['both', 'icon'].includes(iconLabel) ? 'person' : undefined"
                  :label="['both', 'label'].includes(iconLabel) ? 'Profile' : undefined"
                >
                  {{ profileTab }}
                </BsTab>
                <BsTab
                  :icon="['both', 'icon'].includes(iconLabel) ? 'text_snippet' : undefined"
                  :label="['both', 'label'].includes(iconLabel) ? 'Story' : undefined"
                >
                  {{ storyTab }}
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
                {{ homeTab }}
              </BsTab>
              <BsTab
                :icon="['both', 'icon'].includes(iconLabel) ? 'person' : undefined"
                :label="['both', 'label'].includes(iconLabel) ? 'Profile' : undefined"
              >
                {{ profileTab }}
              </BsTab>
              <BsTab
                :icon="['both', 'icon'].includes(iconLabel) ? 'text_snippet' : undefined"
                :label="['both', 'label'].includes(iconLabel) ? 'Story' : undefined"
              >
                {{ storyTab }}
              </BsTab>
            </BsTabs>
          </BsCard>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
