<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ImageUploaderExample from '@bs/pages/elements/examples/ImageUploaderExample.vue';
import { ref } from 'vue';
import Example from './examples/ImageUploaderExample.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);
</script>

<template>
  <ContentLayout>
    <div class="section-content mb-4">
      <h2>Usage Example</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="p-4 md:p-8">
          <ImageUploaderExample />
        </div>
      </template>
    </ShoutBox>
  </ContentLayout>
</template>
