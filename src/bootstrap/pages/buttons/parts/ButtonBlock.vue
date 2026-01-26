<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ButtonExample5 from '@bs/pages/buttons/examples/ButtonExample5.vue';
import { themeNameFrom, useTheme } from '@shares/themeApi.ts';
import { ref } from 'vue';
import Example from '../examples/ButtonExample5.vue?raw';

const { theme } = useTheme();
const fmtVueTpl = ref<string>();
fmtVueTpl.value = parseVueTemplateTag(Example);
const contentCls = 'h-full flex items-center justify-center p-4 py-md-5 rounded-3';
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Button Block</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="[contentCls, themeNameFrom(theme) === 'light' ? 'bg-gray-800' : '']">
          <ButtonExample5 />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
