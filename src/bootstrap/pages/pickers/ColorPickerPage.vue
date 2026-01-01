<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ColorPickerUsages from '@bs/pages/pickers/parts/ColorPickerUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'color-picker' } },
  {
    text: 'Color Swatches',
    location: { name: 'color-picker-id', params: { id: 'swatches' } },
  },
  {
    text: 'Popup Color Picker',
    location: { name: 'color-picker-id', params: { id: 'popup' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ColorPickerUsages :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
