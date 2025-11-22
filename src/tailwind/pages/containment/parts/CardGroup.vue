<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import CardExample10 from '@tw/pages/containment/examples/CardExample10.vue';
import CardExample9 from '@tw/pages/containment/examples/CardExample9.vue';
import { ref } from 'vue';

const props = defineProps<{ grid?: boolean }>();

let example;

if (props.grid) {
  example = await import('../examples/CardExample10.vue?raw');
} else {
  example = await import('../examples/CardExample9.vue?raw');
}

const fmtVueTpl = ref<string | null | undefined>();
fmtVueTpl.value = parseVueTemplateTag(example.default);
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="grid">Card Grid</h2>
      <h2 v-else>Card Group</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div
          class="h-full flex items-center justify-center min-h-40 py-8 px-3 lg:px-8 md:rounded-lg"
        >
          <CardExample10 v-if="grid" />
          <CardExample9 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
