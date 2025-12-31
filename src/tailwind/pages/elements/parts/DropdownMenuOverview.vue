<script setup lang="ts">
import { parseVueScriptTag, parseVueStyleTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import DropdownMenuExample1 from '@tw/pages/elements/examples/DropdownMenuExample1.vue';
import DropdownMenuExample2 from '@tw/pages/elements/examples/DropdownMenuExample2.vue';
import DropdownMenuExample3 from '@tw/pages/elements/examples/DropdownMenuExample3.vue';
import DropdownMenuExample4 from '@tw/pages/elements/examples/DropdownMenuExample4.vue';
import DropdownMenuExample5 from '@tw/pages/elements/examples/DropdownMenuExample5.vue';
import { ref } from 'vue';
import Example1 from '../examples/DropdownMenuExample1.vue?raw';
import Example2 from '../examples/DropdownMenuExample2.vue?raw';
import Example3 from '../examples/DropdownMenuExample3.vue?raw';
import Example4 from '../examples/DropdownMenuExample4.vue?raw';
import Example5 from '../examples/DropdownMenuExample5.vue?raw';

const props = defineProps<{ section?: string }>();

const pageTitle = ref('Overview');
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const fmtVueStyle = ref<string>();

if (props.section === 'on-hover') {
  pageTitle.value = 'Display on Hover';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.section === 'placement') {
  pageTitle.value = 'Display Placement';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else if (props.section === 'custom-color') {
  pageTitle.value = 'Custom Color';
  fmtVueTpl.value = parseVueTemplateTag(Example4);
  fmtVueTsc.value = parseVueScriptTag(Example4);
  fmtVueStyle.value = parseVueStyleTag(Example4);
} else if (props.section === 'popup-container') {
  pageTitle.value = 'Popup Container';
  fmtVueTpl.value = parseVueTemplateTag(Example5);
  fmtVueTsc.value = parseVueScriptTag(Example5);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = ['min-h-40 flex items-center', 'py-8 px-3 lg:px-6'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :styl="fmtVueStyle" :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div :class="contentCls">
          <div class="w-full">
            <DropdownMenuExample2 v-if="section === 'on-hover'" />
            <DropdownMenuExample3 v-else-if="section === 'placement'" />
            <DropdownMenuExample4 v-else-if="section === 'custom-color'" />
            <DropdownMenuExample5 v-else-if="section === 'popup-container'" />
            <DropdownMenuExample1 v-else />
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
