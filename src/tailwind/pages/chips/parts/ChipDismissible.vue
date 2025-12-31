<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ChipExample5 from '@tw/pages/chips/examples/ChipExample5.vue';
import { ref } from 'vue';
import Example from '../examples/ChipExample5.vue?raw';

const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Dismissible Support</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center px-6 py-8">
          <ChipExample5 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
