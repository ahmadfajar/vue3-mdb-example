<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import MaskLoaderUsages from '@bs/pages/overlays/parts/MaskLoaderUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'mask-loader' } },
  {
    text: 'Color and Size',
    location: { name: 'mask-loader-id', params: { id: 'color-size' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <MaskLoaderUsages :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
