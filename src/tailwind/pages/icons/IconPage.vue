<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import IconFeatures from '@tw/pages/icons/parts/IconFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'icon' } },
  { text: 'Styling an Icon', location: { name: 'icon-id', params: { id: 'styling' } } },
  { text: 'Rotating an Icon', location: { name: 'icon-id', params: { id: 'rotation' } } },
  { text: 'Animating an Icon', location: { name: 'icon-id', params: { id: 'animation' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <IconFeatures :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
