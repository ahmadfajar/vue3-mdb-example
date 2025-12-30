<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import RippleExample from '@tw/pages/animations/examples/RippleExample.vue';
import { ref } from 'vue';
import Example1 from './examples/RippleExample.vue?raw';

const fmtVueTpl = ref<string | null | undefined>();
fmtVueTpl.value = parseVueTemplateTag(Example1);
</script>

<template>
  <ContentLayout>
    <div class="section-content mb-5">
      <h2>Basic Example</h2>
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
