<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ShadowOverview from '@bs/pages/references/parts/ShadowOverview.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'shadows' } },
  {
    text: 'Shadow on Hover',
    location: { name: 'shadows-id', params: { id: 'on-hover' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <ShadowOverview :key="$route.params.id as string" :section="$route.params.id as string" />
  </ContentLayout>
</template>
