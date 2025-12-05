<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ImageUploaderExample from '@tw/pages/elements/examples/ImageUploaderExample.vue';
import { ref } from 'vue';

const example = await import('./examples/ImageUploaderExample.vue?raw');
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);
</script>

<template>
  <ContentLayout>
    <div class="section-content mb-5">
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
