<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import CardExample10 from '@tw/pages/containment/examples/CardExample10.vue';
import CardExample9 from '@tw/pages/containment/examples/CardExample9.vue';
import { ref } from 'vue';
import Example1 from '../examples/CardExample9.vue?raw';
import Example2 from '../examples/CardExample10.vue?raw';

const props = defineProps<{ grid?: boolean }>();

const fmtVueTpl = ref<string>();
if (props.grid) {
  fmtVueTpl.value = parseVueTemplateTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
}
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="grid">Card Grid</h2>
      <h2 v-else>Card Group</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div class="h-full min-h-40 flex items-center justify-center py-8 px-3 lg:px-8">
          <CardExample10 v-if="grid" />
          <CardExample9 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
