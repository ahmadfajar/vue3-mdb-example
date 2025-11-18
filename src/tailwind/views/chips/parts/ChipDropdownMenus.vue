<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ChipExample3 from '@tw/views/chips/examples/ChipExample3.vue';
import { ref } from 'vue';

const example = await import('../examples/ChipExample3.vue?raw');

const fmtVueTpl = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Dropdown Menus Support</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full flex items-center justify-center min-h-40 px-6 py-8 md:rounded-lg">
          <ChipExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
