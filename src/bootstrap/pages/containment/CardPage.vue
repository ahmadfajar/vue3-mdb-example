<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import CardFeatures from '@bs/pages/containment/parts/CardFeatures.vue';
import CardGroup from '@bs/pages/containment/parts/CardGroup.vue';
import CardImageSupport from '@bs/pages/containment/parts/CardImageSupport.vue';
import CardMediaSupport from '@bs/pages/containment/parts/CardMediaSupport.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'card' } },
  { text: 'Image Position', location: { name: 'card-id', params: { id: 'image-position' } } },
  { text: 'Content Media', location: { name: 'card-id', params: { id: 'content-media' } } },
  { text: 'Card Grid', location: { name: 'card-id', params: { id: 'grid' } } },
  { text: 'Card Group', location: { name: 'card-id', params: { id: 'group' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <CardImageSupport v-if="$route.params.id === 'image-position'" />
      <CardMediaSupport v-else-if="$route.params.id === 'content-media'" />
      <CardGroup v-else-if="$route.params.id === 'group'" />
      <CardGroup v-else-if="$route.params.id === 'grid'" grid />
      <CardFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
