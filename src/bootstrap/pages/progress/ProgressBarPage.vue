<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ProgressBarLabel from '@bs/pages/progress/parts/ProgressBarLabel.vue';
import ProgressBarOverview from '@bs/pages/progress/parts/ProgressBarOverview.vue';
import ProgressBarUsage from '@bs/pages/progress/parts/ProgressBarUsage.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'progress-bar' } },
  {
    text: 'Text Label',
    location: { name: 'progress-bar-id', params: { id: 'text-label' } },
  },
  {
    text: 'Advance Usage',
    location: { name: 'progress-bar-id', params: { id: 'usage' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ProgressBarLabel v-if="$route.params.id === 'text-label'" />
      <ProgressBarUsage v-else-if="$route.params.id === 'usage'" />
      <ProgressBarOverview v-else />
    </Transition>
  </ContentLayout>
</template>
