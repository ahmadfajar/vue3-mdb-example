<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import SearchFieldFeatures from '@tw/pages/inputs/parts/SearchFieldFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'search-field' } },
  {
    text: 'Dark Mode',
    location: { name: 'search-field-id', params: { id: 'dark-mode' } },
  },
  {
    text: 'Advance Search',
    location: { name: 'search-field-id', params: { id: 'advance-search' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <SearchFieldFeatures
        :key="$route.params.id as string"
        :section="$route.params.id as string"
      />
    </Transition>
  </ContentLayout>
</template>
