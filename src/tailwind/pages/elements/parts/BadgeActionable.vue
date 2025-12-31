<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import BadgeExample4 from '@tw/pages/elements/examples/BadgeExample4.vue';
import { ref } from 'vue';
import Example from '../examples/BadgeExample4.vue?raw';

const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Actionable Badges</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <BadgeExample4 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
