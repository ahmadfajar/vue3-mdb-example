<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import BadgeExample1 from '@tw/pages/elements/examples/BadgeExample1.vue';
import { ref } from 'vue';

const example = await import('../examples/BadgeExample1.vue?raw');

const fmtVueTpl = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(example.default);

const contentCls = ['min-h-40', 'py-8 px-3 lg:px-6 md:rounded-lg gap-3'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
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
