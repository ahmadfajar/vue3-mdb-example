<script setup lang="ts">
import { changeBadgeTypes, dsBadgeTypes, enableBadgeOutlined } from '@shares/badgeApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { contextColorsLight } from '@shares/themeColors.ts';
import { ref, watchEffect } from 'vue';
import { StringHelper, type TBadgeType } from 'vue-mdbootstrap';

import Example1 from '../examples/BadgeExample2.vue?raw';
import Example2 from '../examples/BadgeExample3.vue?raw';

const fmtVueTpl = ref<string>();
const rawTemplate = ref<string>();
const badgeType = ref<TBadgeType>();
const outlined = ref(false);
const customColor = ref(false);

watchEffect(() => {
  let rawCode: string | undefined;

  if (customColor.value) {
    rawTemplate.value = parseVueTemplateTag(Example2);
  } else {
    rawTemplate.value = parseVueTemplateTag(Example1);
  }

  rawCode = changeBadgeTypes(badgeType, rawTemplate.value, true);
  rawCode = enableBadgeOutlined(outlined.value, rawCode, true);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode, false)
      ?.replace(/(Badge)\s{2,}/g, 'Badge ')
      .replace(/(outlined)\s{2,}/g, 'outlined ');
  }
});

const typeVariantSrc = dsBadgeTypes();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Styles</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="badgeType" :data-source="typeVariantSrc" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <div class="flex flex-col ps-2">
          <BsSwitch
            v-model="outlined"
            :value="true"
            checked-icon
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Outlined
          </BsSwitch>
          <BsSwitch
            v-model="customColor"
            :value="true"
            checked-icon
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Custom color examples
          </BsSwitch>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div v-if="customColor" class="flex flex-wrap md-gap-x-1 md-gap-y-2">
            <BsBadge
              :color="outlined ? 'text-gray-800' : 'bg-gray-800'"
              :outlined="outlined"
              :type="badgeType"
            >
              gray-800
            </BsBadge>
            <BsBadge
              :color="outlined ? 'text-slate-600' : 'bg-slate-600'"
              :outlined="outlined"
              :type="badgeType"
            >
              slate-600
            </BsBadge>
            <BsBadge
              :color="outlined ? 'text-violet-800' : 'bg-violet-800'"
              :outlined="outlined"
              :type="badgeType"
            >
              violet-800
            </BsBadge>
            <BsBadge
              :color="outlined ? 'text-purple-600' : 'bg-purple-600'"
              :outlined="outlined"
              :type="badgeType"
            >
              purple-600
            </BsBadge>
            <BsBadge
              :color="outlined ? 'text-fuchsia-600' : 'bg-fuchsia-600'"
              :outlined="outlined"
              :type="badgeType"
            >
              fuchsia-600
            </BsBadge>
            <BsBadge
              :color="outlined ? 'text-pink-600' : 'bg-pink-600'"
              :outlined="outlined"
              :type="badgeType"
            >
              pink-600
            </BsBadge>
            <BsBadge
              :color="outlined ? 'text-red-700' : 'bg-red-700'"
              :outlined="outlined"
              :type="badgeType"
            >
              red-700
            </BsBadge>
          </div>
          <div v-else class="flex flex-wrap md-gap-x-1 md-gap-y-2">
            <template v-for="(_color, name) in contextColorsLight" :key="_color">
              <BsBadge :outlined="outlined" :type="badgeType" :variant="name">
                {{ StringHelper.titleCase(name) }}
              </BsBadge>
            </template>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
