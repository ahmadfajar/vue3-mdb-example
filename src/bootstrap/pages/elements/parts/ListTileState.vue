<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ListTileExample7 from '@bs/pages/elements/examples/ListTileExample7.vue';
import ListTileExample8 from '@bs/pages/elements/examples/ListTileExample8.vue';
import { ref, watchEffect } from 'vue';
import Example1 from '../examples/ListTileExample7.vue?raw';
import Example2 from '../examples/ListTileExample8.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const manualState = ref<boolean>(false);

watchEffect(() => {
  if (manualState.value) {
    fmtVueTpl.value = parseVueTemplateTag(Example2);
    fmtVueTsc.value = parseVueScriptTag(Example2);
  } else {
    fmtVueTpl.value = parseVueTemplateTag(Example1);
    fmtVueTsc.value = parseVueScriptTag(Example1);
  }
});

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'p-2 p-md-4 rounded-3 text-bg-surface',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
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
