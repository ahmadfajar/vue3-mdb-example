<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import SpinnerIconExample from '@tw/pages/icons/examples/SpinnerIconExample.vue';
import { ref } from 'vue';

const fmtVueTpl = ref<string>();

const example = await import('./examples/SpinnerIconExample.vue?raw');
fmtVueTpl.value = parseVueTemplateTag(example.default);
const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];
</script>

<template>
  <ContentLayout>
    <div class="section-content mb-5">
      <h2>Basic Example</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" expanded>
      <template #content>
        <div :class="contentCls">
          <SpinnerIconExample />
        </div>
      </template>
    </ShoutBox>
  </ContentLayout>
</template>
