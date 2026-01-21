<script setup lang="ts">
import {
  changeCardStyles,
  enableCardShadow,
  showCardFooter,
  showCardHeader,
} from '@shares/cardApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { dsContextColors } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import Example1 from '../examples/CardExample1.vue?raw';
import Example2 from '../examples/CardExample2.vue?raw';

const fmtVueTpl = ref<string>();
const rawTemplate = ref<string>();
const shadow = ref(false);
const showHeader = ref(false);
const showFooter = ref(false);
const backgroundColor = ref<string>();
const borderColor = ref<string>();

watchEffect(() => {
  if (showHeader.value || showFooter.value || backgroundColor.value) {
    rawTemplate.value = parseVueTemplateTag(Example2);
  } else {
    rawTemplate.value = parseVueTemplateTag(Example1);
  }

  let rawCode: string | undefined;

  rawCode = changeCardStyles(backgroundColor, borderColor, rawTemplate.value);
  rawCode = enableCardShadow(shadow.value, rawCode);
  rawCode = showCardHeader(showHeader.value, rawCode);
  rawCode = showCardFooter(showFooter.value, rawCode);

  fmtVueTpl.value = stripAndBeautifyTemplate(
    rawCode,
    !!(backgroundColor.value || showFooter.value || showHeader.value)
  );
});

const cardColorSrc = dsContextColors(['dark', 'light']);
const cardBorderSrc = dsContextColors(['dark', 'light']);

onBeforeUnmount(() => {
  cardColorSrc.proxy.destroy();
  cardBorderSrc.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="backgroundColor" :data-source="cardColorSrc" filled floating-label>
          <label>Background Color:</label>
        </BsCombobox>
        <BsCombobox v-model="borderColor" :data-source="cardBorderSrc" filled floating-label>
          <label>Border Color:</label>
        </BsCombobox>
        <div class="flex flex-col md-gap-y-2 ps-2">
          <BsCheckbox v-model="shadow" :value="true"> Enable shadow</BsCheckbox>
          <BsCheckbox v-model="showHeader" :value="true"> Show Header</BsCheckbox>
          <BsCheckbox v-model="showFooter" :value="true"> Show Footer</BsCheckbox>
        </div>
      </template>

      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center py-8 px-3 lg:px-8">
          <BsCard
            :class="{
              [`text-bg-${backgroundColor}`]: backgroundColor,
              [`border border-${borderColor}`]: borderColor,
            }"
            :shadow="shadow"
          >
            <BsCardHeader v-if="showHeader">Card Header</BsCardHeader>
            <BsCardBody>
              <BsCardContent type="title"> Card Title </BsCardContent>
              <BsCardContent class="mb-3" type="subtitle"> Some quick subtitle </BsCardContent>
              <BsCardContent>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </BsCardContent>
              <BsCardContent v-if="!showFooter && !showHeader && !backgroundColor" class="mt-2">
                <small class="text-subtle-secondary">Last updated 3 mins ago</small>
              </BsCardContent>
              <div
                v-if="!showFooter && !showHeader && !backgroundColor"
                class="flex md-gap-x-2 mt-4"
              >
                <BsButton color="primary">Action 1</BsButton>
                <BsButton color="primary" outlined>Action 2</BsButton>
              </div>
            </BsCardBody>
            <BsCardFooter v-if="showFooter">Card Footer</BsCardFooter>
          </BsCard>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
