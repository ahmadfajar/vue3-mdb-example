<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import SideDrawerFeatures from '@bs/pages/containment/parts/SideDrawerFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'side-drawer' } },
  { text: 'SideDrawer Location', location: { name: 'side-drawer-id', params: { id: 'location' } } },
  { text: 'Mini SideDrawer', location: { name: 'side-drawer-id', params: { id: 'mini' } } },
  { text: 'With Appbar', location: { name: 'side-drawer-id', params: { id: 'with-appbar' } } },
  { text: 'Clipped SideDrawer', location: { name: 'side-drawer-id', params: { id: 'clipped' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <SideDrawerFeatures v-if="$route.params.id === 'clipped'" clipped />
      <SideDrawerFeatures v-else-if="$route.params.id === 'with-appbar'" appbar />
      <SideDrawerFeatures v-else-if="$route.params.id === 'mini'" mini />
      <SideDrawerFeatures v-else-if="$route.params.id === 'location'" location />
      <SideDrawerFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
