<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import OverlayExample from '@bs/pages/overlays/examples/OverlayExample.vue';
import { ref } from 'vue';
import Example from './examples/OverlayExample.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <ContentLayout>
    <div class="section-content mb-4">
      <h2>Basic Example</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <OverlayExample />
        </div>
      </template>
    </ShoutBox>
  </ContentLayout>
</template>
