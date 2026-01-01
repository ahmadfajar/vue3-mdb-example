<script setup lang="ts">
import { changeIconAnimation, iconAnimationVariants } from '@shares/buttonApi.ts';
import { parseVueTemplateTag, stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { ref, watchEffect } from 'vue';
import Example from '../examples/AvatarExample2.vue?raw';

const fmtVueTpl = ref<string>();
const animation = ref<string>();
const rawTemplate = parseVueTemplateTag(Example);

watchEffect(() => {
  const rawCode = changeIconAnimation(animation, !!animation.value, rawTemplate);

  if (rawCode) {
    fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
  }
});

const iconAnimations = iconAnimationVariants();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-6 gap-3'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Animation</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <BsRadioGroup v-model="animation" :items="iconAnimations" column="2">
          <div class="col-form-label">Animation</div>
        </BsRadioGroup>
        <BsButton @click="animation = undefined">Stop Animation</BsButton>
      </template>

      <template #content>
        <div :class="contentCls">
          <BsAvatar
            :icon-pulse="animation === 'pulse'"
            :icon-spin="animation === 'spin'"
            circle
            class="bg-gray-500 text-white"
            icon="cached"
            size="64"
          />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
