<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import AvatarExample3 from '@tw/pages/elements/examples/AvatarExample3.vue';
import { ref } from 'vue';

const example = await import('../examples/AvatarExample3.vue?raw');

const fmtVueTpl = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(example.default);

const contentCls = [
  'h-full flex items-center justify-center min-h-40',
  'py-8 px-3 lg:px-6 md:rounded-lg gap-3',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Advance Usage</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <AvatarExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
