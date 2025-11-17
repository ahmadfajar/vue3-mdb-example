<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample5 from '@tw/views/buttons/examples/ButtonExample5.vue';
import { ref } from 'vue';

const example = await import('../examples/ButtonExample5.vue?raw');
const fmtVueTpl = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Button Block</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full flex items-center justify-center bg-gray-800 px-6 py-8 md:rounded-lg">
          <ButtonExample5 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
