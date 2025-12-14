<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import TooltipExample1 from '@tw/pages/overlays/examples/TooltipExample1.vue';
import TooltipExample2 from '@tw/pages/overlays/examples/TooltipExample2.vue';
import { ref } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const fmtVueTpl = ref<string>();
const pageTitle = ref('Overview');

if (props.section === 'placement') {
  pageTitle.value = 'Display Placement';
  example = await import('../examples/TooltipExample2.vue?raw');
} else {
  example = await import('../examples/TooltipExample1.vue?raw');
}

fmtVueTpl.value = parseVueTemplateTag(example.default);

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <TooltipExample2 v-if="section === 'placement'" />
          <TooltipExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
