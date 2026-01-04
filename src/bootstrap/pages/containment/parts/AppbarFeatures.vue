<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import AppbarExample1 from '@bs/pages/containment/examples/AppbarExample1.vue';
import AppbarExample2 from '@bs/pages/containment/examples/AppbarExample2.vue';
import { ref } from 'vue';
import Example1 from '../examples/AppbarExample1.vue?raw';
import Example2 from '../examples/AppbarExample2.vue?raw';

const props = defineProps<{ advance?: boolean }>();

const fmtVueTpl = ref<string | null | undefined>();
if (props.advance) {
  fmtVueTpl.value = parseVueTemplateTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
}
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2 v-if="advance">Advance Usage</h2>
      <h2 v-else>Basic Usage</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center py-4 px-3 px-lg-4">
          <AppbarExample2 v-if="advance" />
          <AppbarExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
