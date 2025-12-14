<script setup lang="ts">
import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import SideDrawerExample1 from '@tw/pages/containment/examples/SideDrawerExample1.vue';
import SideDrawerExample2 from '@tw/pages/containment/examples/SideDrawerExample2.vue';
import SideDrawerExample3 from '@tw/pages/containment/examples/SideDrawerExample3.vue';
import SideDrawerExample4 from '@tw/pages/containment/examples/SideDrawerExample4.vue';
import SideDrawerExample5 from '@tw/pages/containment/examples/SideDrawerExample5.vue';
import { ref } from 'vue';

const props = defineProps<{
  location?: boolean;
  mini?: boolean;
  appbar?: boolean;
  clipped?: boolean;
}>();

const pageTitle = ref('Overview');
let example;

if (props.location) {
  pageTitle.value = 'SideDrawer Location';
  example = await import('../examples/SideDrawerExample2.vue?raw');
} else if (props.mini) {
  pageTitle.value = 'Mini SideDrawer';
  example = await import('../examples/SideDrawerExample3.vue?raw');
} else if (props.appbar) {
  pageTitle.value = 'Use with Appbar';
  example = await import('../examples/SideDrawerExample4.vue?raw');
} else if (props.clipped) {
  pageTitle.value = 'Clipped SideDrawer';
  example = await import('../examples/SideDrawerExample5.vue?raw');
} else {
  example = await import('../examples/SideDrawerExample1.vue?raw');
}

const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();

fmtVueTpl.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

const contentCls = [
  'h-full flex items-center justify-center min-h-40',
  'py-8 px-3 lg:px-8 md:rounded-lg text-bg-surface',
];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
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
