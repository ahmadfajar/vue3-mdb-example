<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import SideDrawerExample1 from '@bs/pages/containment/examples/SideDrawerExample1.vue';
import SideDrawerExample2 from '@bs/pages/containment/examples/SideDrawerExample2.vue';
import SideDrawerExample3 from '@bs/pages/containment/examples/SideDrawerExample3.vue';
import SideDrawerExample4 from '@bs/pages/containment/examples/SideDrawerExample4.vue';
import SideDrawerExample5 from '@bs/pages/containment/examples/SideDrawerExample5.vue';
import { ref } from 'vue';
import Example1 from '../examples/SideDrawerExample1.vue?raw';
import Example2 from '../examples/SideDrawerExample2.vue?raw';
import Example3 from '../examples/SideDrawerExample3.vue?raw';
import Example4 from '../examples/SideDrawerExample4.vue?raw';
import Example5 from '../examples/SideDrawerExample5.vue?raw';

const props = defineProps<{
  location?: boolean;
  mini?: boolean;
  appbar?: boolean;
  clipped?: boolean;
}>();

const pageTitle = ref('Overview');
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

if (props.location) {
  pageTitle.value = 'SideDrawer Location';
  fmtVueTpl.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else if (props.mini) {
  pageTitle.value = 'Mini SideDrawer';
  fmtVueTpl.value = parseVueTemplateTag(Example3);
  fmtVueTsc.value = parseVueScriptTag(Example3);
} else if (props.appbar) {
  pageTitle.value = 'Use with Appbar';
  fmtVueTpl.value = parseVueTemplateTag(Example4);
  fmtVueTsc.value = parseVueScriptTag(Example4);
} else if (props.clipped) {
  pageTitle.value = 'Clipped SideDrawer';
  fmtVueTpl.value = parseVueTemplateTag(Example5);
  fmtVueTsc.value = parseVueScriptTag(Example5);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'p-3 p-md-5 rounded-3 text-bg-surface',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div
          :class="contentCls"
          style="
            --sidedrawer-background: var(--background-secondary);
            --md-border-color: var(--border-translucent);
          "
        >
          <SideDrawerExample5 v-if="clipped" />
          <SideDrawerExample4 v-else-if="appbar" />
          <SideDrawerExample3 v-else-if="mini" />
          <SideDrawerExample2 v-else-if="location" />
          <SideDrawerExample1 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
