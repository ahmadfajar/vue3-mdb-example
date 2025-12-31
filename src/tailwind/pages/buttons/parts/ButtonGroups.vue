<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample6 from '@tw/pages/buttons/examples/ButtonExample6.vue';
import { ref } from 'vue';
import Example from '../examples/ButtonExample6.vue?raw';

const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Button Groups</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center px-6 py-8">
          <ButtonExample6 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
