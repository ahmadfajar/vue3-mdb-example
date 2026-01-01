<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import BadgeExample1 from '@bs/pages/elements/examples/BadgeExample1.vue';
import { ref } from 'vue';
import Example from '../examples/BadgeExample1.vue?raw';

const fmtVueTpl = ref<string>();
const contentCls = ['min-h-40', 'py-8 px-3 lg:px-6 gap-3'];

fmtVueTpl.value = parseVueTemplateTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Basic Examples</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <BadgeExample1 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
