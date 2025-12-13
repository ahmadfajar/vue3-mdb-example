<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import MaskLoaderUsages from '@tw/pages/overlays/parts/MaskLoaderUsages.vue';

const linkItems = [
  { text: 'Basic Example', location: { name: 'mask-loader' } },
  {
    text: 'Color and Size',
    location: { name: 'mask-loader-id', params: { id: 'color-size' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <MaskLoaderUsages v-if="$route.params.id === 'color-size'" section="color-size" />
      <MaskLoaderUsages v-else section="basic" />
    </Transition>
  </ContentLayout>
</template>
