<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import AppbarExample1 from '@tw/pages/containment/examples/AppbarExample1.vue';
import AppbarExample2 from '@tw/pages/containment/examples/AppbarExample2.vue';
import { ref } from 'vue';

const props = defineProps<{ advance?: boolean }>();

let example;

if (props.advance) {
  example = await import('../examples/AppbarExample2.vue?raw');
} else {
  example = await import('../examples/AppbarExample1.vue?raw');
}

const fmtVueTpl = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="advance">Advance Usage</h2>
      <h2 v-else>Basic Usage</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div
          class="h-full flex items-center justify-center min-h-40 py-6 px-3 lg:px-6 md:rounded-lg"
        >
          <AppbarExample2 v-if="advance" />
          <AppbarExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
