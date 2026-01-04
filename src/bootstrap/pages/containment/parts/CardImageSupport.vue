<script setup lang="ts">
import { cardImagePositions } from '@shares/cardApi.ts';
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import CardExample3 from '@bs/pages/containment/examples/CardExample3.vue';
import CardExample4 from '@bs/pages/containment/examples/CardExample4.vue';
import CardExample5 from '@bs/pages/containment/examples/CardExample5.vue';
import CardExample6 from '@bs/pages/containment/examples/CardExample6.vue';
import { ref, watchEffect } from 'vue';
import Example1 from '../examples/CardExample3.vue?raw';
import Example2 from '../examples/CardExample4.vue?raw';
import Example3 from '../examples/CardExample5.vue?raw';
import Example4 from '../examples/CardExample6.vue?raw';

const fmtVueTpl = ref<string>();
const position = ref('top');

watchEffect(() => {
  if (position.value === 'right') {
    fmtVueTpl.value = parseVueTemplateTag(Example4);
  } else if (position.value === 'left') {
    fmtVueTpl.value = parseVueTemplateTag(Example3);
  } else if (position.value === 'bottom') {
    fmtVueTpl.value = parseVueTemplateTag(Example2);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(Example1);
  }
});

const imagePositions = cardImagePositions();
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
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
        <div class="h-full min-h-40 flex items-center justify-center p-3 p-md-5">
          <CardExample6 v-if="position === 'right'" />
          <CardExample5 v-else-if="position === 'left'" />
          <CardExample4 v-else-if="position === 'bottom'" />
          <CardExample3 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
