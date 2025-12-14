<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ListNavStyles from '@tw/pages/navigations/parts/ListNavStyles.vue';
import ListNavUsages from '@tw/pages/navigations/parts/ListNavUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'list-nav' } },
  { text: 'Nested Navigation (1)', location: { name: 'list-nav-id', params: { id: 'nested-1' } } },
  { text: 'Nested Navigation (2)', location: { name: 'list-nav-id', params: { id: 'nested-2' } } },
  { text: 'Mixed with ListTile', location: { name: 'list-nav-id', params: { id: 'mixed' } } },
  { text: 'Inside SideDrawer', location: { name: 'list-nav-id', params: { id: 'side-drawer' } } },
  {
    text: 'Navigation Styles',
    location: { name: 'list-nav-id', params: { id: 'navigation-styles' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ListNavStyles v-if="$route.params.id === 'navigation-styles'" />
      <ListNavUsages v-else-if="$route.params.id === 'nested-1'" section="nested-1" />
      <ListNavUsages v-else-if="$route.params.id === 'nested-2'" section="nested-2" />
      <ListNavUsages v-else-if="$route.params.id === 'mixed'" section="mixed" />
      <ListNavUsages v-else-if="$route.params.id === 'side-drawer'" section="side-drawer" />
      <ListNavUsages v-else section="basic" />
    </Transition>
  </ContentLayout>
</template>
