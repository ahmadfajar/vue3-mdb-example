<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import AvatarExample3 from '@bs/pages/elements/examples/AvatarExample3.vue';
import { ref } from 'vue';
import Example from '../examples/AvatarExample3.vue?raw';

const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-6 gap-3'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>Advance Usage</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <AvatarExample3 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
