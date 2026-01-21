<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ChipClickEvents from '@tw/pages/chips/parts/ChipClickEvents.vue';
import ChipDismissible from '@tw/pages/chips/parts/ChipDismissible.vue';
import ChipDropdownMenus from '@tw/pages/chips/parts/ChipDropdownMenus.vue';
import ChipFeatures from '@tw/pages/chips/parts/ChipFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'chip' } },
  { text: 'Icon Features', location: { name: 'chip-id', params: { id: 'icon' } } },
  { text: 'Avatar Support', location: { name: 'chip-id', params: { id: 'avatar' } } },
  {
    text: 'Dropdown Menus',
    location: { name: 'chip-id', params: { id: 'dropdown-menus' } },
  },
  {
    text: 'Click Events',
    location: { name: 'chip-id', params: { id: 'click-events' } },
  },
  {
    text: 'Dismissible Support',
    location: { name: 'chip-id', params: { id: 'dismissible' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ChipDropdownMenus v-if="$route.params.id === 'dropdown-menus'" />
      <ChipClickEvents v-else-if="$route.params.id === 'click-events'" />
      <ChipDismissible v-else-if="$route.params.id === 'dismissible'" />
      <ChipFeatures v-else-if="$route.params.id === 'icon'" show-icon />
      <ChipFeatures v-else-if="$route.params.id === 'avatar'" show-avatar />
      <ChipFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
