<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import LightboxUsages from '@tw/pages/overlays/parts/LightboxUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'lightbox' } },
  { text: 'Images and Videos', location: { name: 'lightbox-id', params: { id: 'images-videos' } } },
  { text: 'Single Image', location: { name: 'lightbox-id', params: { id: 'single-image' } } },
  {
    text: 'Custom Toolbar',
    location: { name: 'lightbox-id', params: { id: 'custom-toolbar' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <LightboxUsages :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
