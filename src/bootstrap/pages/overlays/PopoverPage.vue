<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import PopoverUsages from '@bs/pages/overlays/parts/PopoverUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'popover' } },
  {
    text: 'Display Placement',
    location: { name: 'popover-id', params: { id: 'placement' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <PopoverUsages :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
