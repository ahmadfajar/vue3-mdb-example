<script setup lang="ts">
import type { LinkItem } from '@shares/dataStore.ts';
import ToggleButtonCheckedIcon from '@tw/pages/buttons/parts/ToggleButtonCheckedIcon.vue';
import ToggleButtonFeatures from '@tw/pages/buttons/parts/ToggleButtonFeatures.vue';
import ToggleButtonMultipleSelection from '@tw/pages/buttons/parts/ToggleButtonMultipleSelection.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'toggle-button' } },
  { text: 'Checked Icon', location: { name: 'toggle-button-id', params: { id: 'checked-icon' } } },
  {
    text: 'Multiple Selection',
    location: { name: 'toggle-button-id', params: { id: 'multiple-selection' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ToggleButtonCheckedIcon v-if="$route.params.id === 'checked-icon'" />
      <ToggleButtonMultipleSelection v-else-if="$route.params.id === 'multiple-selection'" />
      <ToggleButtonFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
