<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import LightboxUsages from '@tw/pages/overlays/parts/LightboxUsages.vue';

const linkItems = [
  { text: 'Basic Example', location: { name: 'lightbox' } },
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
      <LightboxUsages v-if="$route.params.id === 'images-videos'" section="images-videos" />
      <LightboxUsages v-else-if="$route.params.id === 'single-image'" section="single-image" />
      <LightboxUsages v-else-if="$route.params.id === 'custom-toolbar'" section="custom-toolbar" />
      <LightboxUsages v-else section="basic" />
    </Transition>
  </ContentLayout>
</template>
