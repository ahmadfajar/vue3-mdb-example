<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import TooltipUsages from '@tw/pages/overlays/parts/TooltipUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'tooltip' } },
  {
    text: 'Display Placement',
    location: { name: 'tooltip-id', params: { id: 'placement' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <TooltipUsages v-if="$route.params.id === 'placement'" section="placement" />
      <TooltipUsages v-else />
    </Transition>
  </ContentLayout>
</template>
