<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import DropdownMenuExample1 from '@tw/pages/elements/examples/DropdownMenuExample1.vue';
import DropdownMenuExample2 from '@tw/pages/elements/examples/DropdownMenuExample2.vue';
import DropdownMenuExample3 from '@tw/pages/elements/examples/DropdownMenuExample3.vue';
import DropdownMenuExample4 from '@tw/pages/elements/examples/DropdownMenuExample4.vue';
import DropdownMenuExample5 from '@tw/pages/elements/examples/DropdownMenuExample5.vue';
import { ref } from 'vue';

const props = defineProps<{ variant?: string }>();

let example;

if (props.variant === 'example2') {
  example = await import('../examples/DropdownMenuExample2.vue?raw');
} else if (props.variant === 'example3') {
  example = await import('../examples/DropdownMenuExample3.vue?raw');
} else if (props.variant === 'example4') {
  example = await import('../examples/DropdownMenuExample4.vue?raw');
} else if (props.variant === 'example5') {
  example = await import('../examples/DropdownMenuExample5.vue?raw');
} else {
  example = await import('../examples/DropdownMenuExample1.vue?raw');
}

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const contentCls = ['flex items-center min-h-40', 'py-8 px-3 lg:px-6 md:rounded-lg'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="variant === 'example2'">Display on Hover</h2>
      <h2 v-else-if="variant === 'example3'">Display Placement</h2>
      <h2 v-else-if="variant === 'example4'">Custom Color</h2>
      <h2 v-else-if="variant === 'example5'">Popup Container</h2>
      <h2 v-else>Basic Examples</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <div class="w-full">
            <DropdownMenuExample2 v-if="variant === 'example2'" />
            <DropdownMenuExample3 v-else-if="variant === 'example3'" />
            <DropdownMenuExample4 v-else-if="variant === 'example4'" />
            <DropdownMenuExample5 v-else-if="variant === 'example5'" />
            <DropdownMenuExample1 v-else />
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
