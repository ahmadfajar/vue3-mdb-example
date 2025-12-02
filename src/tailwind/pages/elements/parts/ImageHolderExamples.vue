<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ImageHolderExample1 from '@tw/pages/elements/examples/ImageHolderExample1.vue';
import ImageHolderExample2 from '@tw/pages/elements/examples/ImageHolderExample2.vue';
import { ref } from 'vue';

const props = defineProps<{ nonRectangle?: boolean }>();

let example;

if (props.nonRectangle) {
  example = await import('../examples/ImageHolderExample2.vue?raw');
} else {
  example = await import('../examples/ImageHolderExample1.vue?raw');
}

const fmtVueTpl = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(example.default);

const contentCls = ['flex items-center min-h-40', 'py-8 px-3 lg:px-6 md:rounded-lg'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="nonRectangle">Non Rectangle Examples</h2>
      <h2 v-else>Basic Examples</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <ImageHolderExample2 v-if="nonRectangle" />
          <ImageHolderExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
