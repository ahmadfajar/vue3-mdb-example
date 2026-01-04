<script setup lang="ts">
import { cardMediaPositions } from '@shares/cardApi.ts';
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import CardExample7 from '@bs/pages/containment/examples/CardExample7.vue';
import CardExample8 from '@bs/pages/containment/examples/CardExample8.vue';
import { ref, watchEffect } from 'vue';
import Example1 from '../examples/CardExample7.vue?raw';
import Example2 from '../examples/CardExample8.vue?raw';

const fmtVueTpl = ref<string>();
const position = ref('top');

watchEffect(() => {
  if (position.value === 'bottom') {
    fmtVueTpl.value = parseVueTemplateTag(Example2);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(Example1);
  }
});

const mediaPositions = cardMediaPositions();
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
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
        <div class="h-full min-h-40 flex items-center justify-center p-3 p-md-5">
          <CardExample8 v-if="position === 'bottom'" />
          <CardExample7 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
