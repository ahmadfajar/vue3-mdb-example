<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ImageHolderExamples from '@tw/pages/elements/parts/ImageHolderExamples.vue';

const linkItems = [
  { text: 'Basic Examples', location: { name: 'image-placeholder' } },
  {
    text: 'Non Rectangle Examples',
    location: { name: 'image-placeholder-id', params: { id: 'non-rectangle' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ImageHolderExamples v-if="$route.params.id === 'non-rectangle'" non-rectangle />
      <ImageHolderExamples v-else />
    </Transition>
  </ContentLayout>
</template>
