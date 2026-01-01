<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ProgressFeatures from '@bs/pages/progress/parts/ProgressFeatures.vue';

const linkItems = [
  { text: 'Bar', location: { name: 'progress' } },
  {
    text: 'Spinner',
    location: { name: 'progress-id', params: { id: 'spinner' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ProgressFeatures :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
