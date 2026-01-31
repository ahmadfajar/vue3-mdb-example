<script setup lang="ts">
import { parseVueTemplateTag } from '@shares/sharedApi.ts';
import BadgeExample4 from '@bs/pages/elements/examples/BadgeExample4.vue';
import BadgeExample5 from '@bs/pages/elements/examples/BadgeExample5.vue';
import { ref } from 'vue';
import Example1 from '../examples/BadgeExample4.vue?raw';
import Example2 from '../examples/BadgeExample5.vue?raw';

const props = defineProps<{ section?: string }>();

const fmtVueTpl = ref<string>();
if (props.section === 'positioning') {
  fmtVueTpl.value = parseVueTemplateTag(Example2);
} else {
  fmtVueTpl.value = parseVueTemplateTag(Example1);
}

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'p-3 p-md-5'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>
        {{ section === 'positioning' ? 'Badge Positioning' : 'Actionable Badges' }}
      </h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl">
      <template #content>
        <div :class="contentCls">
          <BadgeExample5 v-if="section === 'positioning'" />
          <BadgeExample4 v-else />
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
