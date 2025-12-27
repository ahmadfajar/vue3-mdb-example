<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import ComboboxExample3 from '@tw/pages/inputs/examples/ComboboxExample3.vue';
import ComboboxExample4 from '@tw/pages/inputs/examples/ComboboxExample4.vue';
import { ref } from 'vue';
import Example1 from '../examples/ComboboxExample3.vue?raw';
import Example2 from '../examples/ComboboxExample4.vue?raw';

const props = defineProps<{ section: string }>();

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const contentCls = ['h-full min-h-40 flex items-center', 'py-8 px-4 md:px-8'];

if (props.section === 'validation-example') {
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2 v-if="section === 'validation-example'">Validation Example</h2>
      <h2 v-else>Cascade Example</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls" style="--md-border-color: var(--border-translucent)">
          <ComboboxExample4 v-if="section === 'validation-example'" />
          <ComboboxExample3 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
