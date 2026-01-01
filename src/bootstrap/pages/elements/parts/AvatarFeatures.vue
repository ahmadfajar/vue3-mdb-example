<script setup lang="ts">
import {
  changeAvatarBorderColor,
  changeAvatarBorderThickness,
  changeAvatarFontSize,
  changeAvatarShape,
  changeAvatarSize,
  dsAvatarShapes,
} from '@shares/avatarApi.ts';
import { useRefDebounced } from '@shares/debounceRef.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { dsContextColors } from '@shares/showcaseDataApi.ts';
import { ref, watchEffect } from 'vue';
import Example from '../examples/AvatarExample1.vue?raw';

const fmtVueTpl = ref<string>();
const shape = ref<string>();
const border = ref<number>();
const borderColor = ref<string>();
const size = ref<string>();
const fontSize = ref<number>(100);
const sizeDebounced = useRefDebounced(size, 800);
const rawTemplate = parseVueTemplateTag(Example);

watchEffect(() => {
  let rawCode: string | undefined;

  rawCode = changeAvatarShape(shape, rawTemplate, true);
  rawCode = changeAvatarBorderThickness(border, rawCode, true);
  rawCode = changeAvatarBorderColor(borderColor, rawCode, true);
  rawCode = changeAvatarSize(size, rawCode, true);
  rawCode = changeAvatarFontSize(fontSize, rawCode, true);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const shapeVariantSrc = dsAvatarShapes();
const borderColorSrc = dsContextColors(['light']);
const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-6 max-sm:flex-col gap-3',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Overview</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <h5 class="mt-2">Configuration Options:</h5>

        <BsCombobox v-model="shape" :data-source="shapeVariantSrc" filled floating-label>
          <label>Shape:</label>
        </BsCombobox>
        <BsNumericField v-model="border" filled floating-label min-value="0" suffix="px">
          <label>Border thickness</label>
        </BsNumericField>
        <BsCombobox v-model="borderColor" :data-source="borderColorSrc" filled floating-label>
          <label>Border Color:</label>
        </BsCombobox>
        <BsTextField v-model="size" filled floating-label placeholder="Example: 4rem">
          <label>Enter Size</label>
        </BsTextField>
        <BsNumericField
          v-model="fontSize"
          class="mb-4"
          filled
          floating-label
          min-value="80"
          step="5"
          suffix="%"
        >
          <label>Enter Font Size</label>
        </BsNumericField>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsAvatar
            :border="border"
            :border-color="borderColor"
            :circle="shape === 'circle'"
            :rounded="shape === 'rounded'"
            :size="sizeDebounced || 48"
            img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          />
          <BsAvatar
            :border="border"
            :border-color="borderColor"
            :circle="shape === 'circle'"
            :rounded="shape === 'rounded'"
            :size="sizeDebounced || 48"
            class="bg-purple-800 text-white"
            icon="account_circle"
          />
          <BsAvatar
            :border="border"
            :border-color="borderColor"
            :circle="shape === 'circle'"
            :rounded="shape === 'rounded'"
            :size="sizeDebounced || 48"
            :style="!fontSize || fontSize === 100 ? undefined : { 'font-size': `${fontSize}%` }"
            class="bg-gray-500 text-white"
            text="MD"
          />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
