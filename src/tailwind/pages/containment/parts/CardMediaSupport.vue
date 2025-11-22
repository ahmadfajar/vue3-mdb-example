<script setup lang="ts">
import { cardMediaPositions } from '@shares/cardApi.ts';
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import CardExample7 from '@tw/pages/containment/examples/CardExample7.vue';
import CardExample8 from '@tw/pages/containment/examples/CardExample8.vue';
import { ref, watchEffect } from 'vue';

const example1 = await import('../examples/CardExample7.vue?raw');
const example2 = await import('../examples/CardExample8.vue?raw');

const fmtVueTpl = ref<string | null | undefined>();
const position = ref('top');

watchEffect(() => {
  if (position.value === 'bottom') {
    fmtVueTpl.value = parseVueTemplateTag(example2.default);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(example1.default);
  }
});

const mediaPositions = cardMediaPositions();
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Content Media</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <div class="mt-2 ps-2">
          <BsRadioGroup v-model="position" :items="mediaPositions" column="1">
            <h5>Media Position:</h5>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div
          class="h-full flex items-center justify-center min-h-40 py-8 px-3 lg:px-8 md:rounded-lg"
        >
          <CardExample8 v-if="position === 'bottom'" />
          <CardExample7 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
