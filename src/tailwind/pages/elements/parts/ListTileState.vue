<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListTileExample7 from '@tw/pages/elements/examples/ListTileExample7.vue';
import ListTileExample8 from '@tw/pages/elements/examples/ListTileExample8.vue';
import { ref, watchEffect } from 'vue';

const example1 = await import('../examples/ListTileExample7.vue?raw');
const example2 = await import('../examples/ListTileExample8.vue?raw');

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const manualState = ref<boolean>(false);

watchEffect(() => {
  if (manualState.value) {
    fmtVueTpl.value = parseVueTemplateTag(example2.default);
    fmtVueTsc.value = parseVueScriptTag(example2.default);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(example1.default);
    fmtVueTsc.value = parseVueScriptTag(example1.default);
  }
});

const contentCls = [
  'h-full flex items-center justify-center min-h-40',
  'py-8 px-3 lg:px-8 md:rounded-lg text-bg-surface',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>ListView State Management</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <h5 class="mt-2">Examples:</h5>
        <div class="flex flex-col ps-2">
          <BsRadio v-model="manualState" :value="false">Manage by ListView</BsRadio>
          <BsRadio v-model="manualState" :value="true">Manage state manually</BsRadio>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <ListTileExample8 v-if="manualState" />
          <ListTileExample7 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
