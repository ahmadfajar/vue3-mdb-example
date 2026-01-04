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
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'p-3 p-md-5'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Styles</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="badgeType" :data-source="typeVariantSrc" filled floating-label>
          <label>Variant:</label>
        </BsCombobox>
        <div>
          <BsSwitch
            v-model="outlined"
            :value="true"
            checked-icon
            inset-outlined
            label-class="flex-fill"
            label-position="left"
          >
            Outlined
          </BsSwitch>
          <BsSwitch
            v-model="customColor"
            :value="true"
            checked-icon
            inset-outlined
            label-class="flex-fill"
            label-position="left"
          >
            Custom color examples
          </BsSwitch>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div v-if="customColor" class="flex flex-wrap md-gap-x-1 md-gap-y-2">
            <BsBadge :outlined="outlined" :type="badgeType" color="gray"> gray </BsBadge>
            <BsBadge :outlined="outlined" :type="badgeType" color="blue"> blue </BsBadge>
            <BsBadge :outlined="outlined" :type="badgeType" color="indigo"> indigo </BsBadge>
            <BsBadge :outlined="outlined" :type="badgeType" color="deep-purple">
              deep-purple
            </BsBadge>
            <BsBadge :outlined="outlined" :type="badgeType" color="purple"> purple </BsBadge>
            <BsBadge :outlined="outlined" :type="badgeType" color="red"> red </BsBadge>
            <BsBadge :outlined="outlined" :type="badgeType" color="pink"> pink </BsBadge>
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
