<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import BadgeActionable from '@tw/pages/elements/parts/BadgeActionable.vue';
import BadgeFeatures from '@tw/pages/elements/parts/BadgeFeatures.vue';
import BadgeOverview from '@tw/pages/elements/parts/BadgeOverview.vue';

const linkItems = [
  { text: 'Examples', location: { name: 'badge' } },
  { text: 'Styles', location: { name: 'badge-id', params: { id: 'styles' } } },
  { text: 'Actionable Badges', location: { name: 'badge-id', params: { id: 'actionable' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <BadgeFeatures v-if="$route.params.id === 'styles'" />
      <BadgeActionable v-else-if="$route.params.id === 'actionable'" />
      <BadgeOverview v-else />
    </Transition>
  </ContentLayout>
</template>
