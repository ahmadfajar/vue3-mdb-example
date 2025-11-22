<script setup lang="ts">
import { cardImagePositions } from '@shares/cardApi.ts';
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import CardExample3 from '@tw/pages/containment/examples/CardExample3.vue';
import CardExample4 from '@tw/pages/containment/examples/CardExample4.vue';
import CardExample5 from '@tw/pages/containment/examples/CardExample5.vue';
import CardExample6 from '@tw/pages/containment/examples/CardExample6.vue';
import { ref, watchEffect } from 'vue';

const example1 = await import('../examples/CardExample3.vue?raw');
const example2 = await import('../examples/CardExample4.vue?raw');
const example3 = await import('../examples/CardExample5.vue?raw');
const example4 = await import('../examples/CardExample6.vue?raw');

const fmtVueTpl = ref<string | null | undefined>();
const position = ref('top');

watchEffect(() => {
  if (position.value === 'right') {
    fmtVueTpl.value = parseVueTemplateTag(example4.default);
  } else if (position.value === 'left') {
    fmtVueTpl.value = parseVueTemplateTag(example3.default);
  } else if (position.value === 'bottom') {
    fmtVueTpl.value = parseVueTemplateTag(example2.default);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(example1.default);
  }
});

const imagePositions = cardImagePositions();
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Image Position</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #side-panel>
        <div class="mt-2 ps-2">
          <BsRadioGroup v-model="position" :items="imagePositions" column="1">
            <h5>Image Position:</h5>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div
          class="h-full flex items-center justify-center min-h-40 py-8 px-3 lg:px-8 md:rounded-lg"
        >
          <CardExample6 v-if="position === 'right'" />
          <CardExample5 v-else-if="position === 'left'" />
          <CardExample4 v-else-if="position === 'bottom'" />
          <CardExample3 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
