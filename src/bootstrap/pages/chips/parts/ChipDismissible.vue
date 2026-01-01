<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ChipExample5 from '@bs/pages/chips/examples/ChipExample5.vue';
import { ref } from 'vue';
import Example from '../examples/ChipExample5.vue?raw';

const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Dismissible Support</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center py-4 px-3">
          <ChipExample5 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
