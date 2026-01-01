<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import SpinnerIconExample from '@bs/pages/icons/examples/SpinnerIconExample.vue';
import { ref } from 'vue';
import Example from './examples/SpinnerIconExample.vue?raw';

const fmtVueTpl = ref<string>();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];

fmtVueTpl.value = parseVueTemplateTag(Example);
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
