<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ColorPickerUsages from '@tw/pages/pickers/parts/ColorPickerUsages.vue';

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
      <ColorPickerUsages v-if="$route.params.id === 'swatches'" section="swatches" />
      <ColorPickerUsages v-else-if="$route.params.id === 'popup'" section="popup" />
      <ColorPickerUsages v-else />
    </Transition>
  </ContentLayout>
</template>
