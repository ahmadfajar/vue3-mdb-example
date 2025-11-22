<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import RippleExample from '@tw/pages/animations/examples/RippleExample.vue';
import { ref } from 'vue';

const fmtVueTpl = ref<string | null | undefined>();

const example1 = await import('./examples/RippleExample.vue?raw');
fmtVueTpl.value = parseVueTemplateTag(example1.default);
</script>

<template>
  <ContentLayout>
    <div class="section-content mb-5">
      <h2>Basic Examples</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" expanded>
      <template #content>
        <div class="py-8">
          <RippleExample />
        </div>
      </template>
    </ShoutBox>
  </ContentLayout>
</template>
