<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import DropdownMenuOverview from '@tw/pages/elements/parts/DropdownMenuOverview.vue';

const linkItems = [
  { text: 'Basic Examples', location: { name: 'dropdown-menu' } },
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
      <DropdownMenuOverview v-if="$route.params.id === 'on-hover'" section="example2" />
      <DropdownMenuOverview v-else-if="$route.params.id === 'placement'" section="example3" />
      <DropdownMenuOverview v-else-if="$route.params.id === 'custom-color'" section="example4" />
      <DropdownMenuOverview v-else-if="$route.params.id === 'popup-container'" section="example5" />
      <DropdownMenuOverview v-else />
    </Transition>
  </ContentLayout>
</template>
