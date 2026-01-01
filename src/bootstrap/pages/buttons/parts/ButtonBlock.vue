<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample5 from '@bs/pages/buttons/examples/ButtonExample5.vue';
import { ref } from 'vue';
import Example from '../examples/ButtonExample5.vue?raw';

const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Button Block</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full flex items-center justify-center bg-gray-700 p-4 py-md-5 rounded-3">
          <ButtonExample5 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
