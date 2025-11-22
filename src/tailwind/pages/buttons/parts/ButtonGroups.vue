<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample6 from '@tw/pages/buttons/examples/ButtonExample6.vue';
import { ref } from 'vue';

const example = await import('../examples/ButtonExample6.vue?raw');
const fmtVueTpl = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Button Groups</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg">
          <ButtonExample6 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
