<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import DropdownMenuOverview from '@bs/pages/elements/parts/DropdownMenuOverview.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'dropdown-menu' } },
  { text: 'Display on Hover', location: { name: 'dropdown-menu-id', params: { id: 'on-hover' } } },
  {
    text: 'Display Placement',
    location: { name: 'dropdown-menu-id', params: { id: 'placement' } },
  },
  {
    text: 'Custom Color',
    location: { name: 'dropdown-menu-id', params: { id: 'custom-color' } },
  },
  {
    text: 'Popup Container',
    location: { name: 'dropdown-menu-id', params: { id: 'popup-container' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <DropdownMenuOverview
        :key="$route.params.id as string"
        :section="$route.params.id as string"
      />
    </Transition>
  </ContentLayout>
</template>
