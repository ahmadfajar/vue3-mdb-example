<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import ImageHolderExample1 from '@bs/pages/elements/examples/ImageHolderExample1.vue';
import ImageHolderExample2 from '@bs/pages/elements/examples/ImageHolderExample2.vue';
import { ref } from 'vue';
import Example1 from '../examples/ImageHolderExample1.vue?raw';
import Example2 from '../examples/ImageHolderExample2.vue?raw';

const props = defineProps<{ nonRectangle?: boolean }>();

const fmtVueTpl = ref<string>();

if (props.nonRectangle) {
  fmtVueTpl.value = parseVueTemplateTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
}

const contentCls = ['min-h-40 flex items-center', 'p-3 p-md-4'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
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
