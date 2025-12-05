<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ListTileNavigation from '@tw/pages/elements/parts/ListTileNavigation.vue';
import ListTileState from '@tw/pages/elements/parts/ListTileState.vue';
import ListTileUsages from '@tw/pages/elements/parts/ListTileUsages.vue';

const linkItems = [
  { text: 'Example', location: { name: 'list-tile' } },
  {
    text: 'with Images',
    location: { name: 'list-tile-id', params: { id: 'images' } },
  },
  {
    text: 'with Images & Icons',
    location: { name: 'list-tile-id', params: { id: 'image-icon' } },
  },
  {
    text: 'with Input Controls',
    location: { name: 'list-tile-id', params: { id: 'input-controls' } },
  },
  {
    text: 'Contact Details',
    location: { name: 'list-tile-id', params: { id: 'contact-details' } },
  },
  {
    text: 'Inside SideDrawer',
    location: { name: 'list-tile-id', params: { id: 'side-drawer' } },
  },
  {
    text: 'ListView State',
    location: { name: 'list-tile-id', params: { id: 'listview-state' } },
  },
  {
    text: 'Navigation Styles',
    location: { name: 'list-tile-id', params: { id: 'navigation-styles' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ListTileState v-if="$route.params.id === 'listview-state'" />
      <ListTileNavigation v-else-if="$route.params.id === 'navigation-styles'" />
      <ListTileUsages v-else-if="$route.params.id === 'images'" usage="image" />
      <ListTileUsages v-else-if="$route.params.id === 'image-icon'" usage="image-icon" />
      <ListTileUsages v-else-if="$route.params.id === 'contact-details'" usage="contact-details" />
      <ListTileUsages v-else-if="$route.params.id === 'input-controls'" usage="input-controls" />
      <ListTileUsages v-else-if="$route.params.id === 'side-drawer'" usage="side-drawer" />
      <ListTileUsages v-else usage="simple" />
    </Transition>
  </ContentLayout>
</template>
