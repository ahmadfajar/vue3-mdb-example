<script setup lang="ts">
import type { LinkItem } from '@shares/dataStore.ts';
import ChipGroupFeatures from '@tw/views/chips/parts/ChipGroupFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'chip-group' } },
  { text: 'Filter Chips', location: { name: 'chip-group-id', params: { id: 'filters' } } },
  { text: 'Sliding Chips', location: { name: 'chip-group-id', params: { id: 'sliding' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ChipGroupFeatures v-if="$route.params.id === 'filters'" show-filters />
      <ChipGroupFeatures v-else-if="$route.params.id === 'sliding'" show-slider />
      <ChipGroupFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
