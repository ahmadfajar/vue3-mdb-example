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
      <IconFeatures v-if="$route.params.id === 'styling'" section="styling" />
      <IconFeatures v-else-if="$route.params.id === 'rotation'" section="rotation" />
      <IconFeatures v-else-if="$route.params.id === 'animation'" section="animation" />
      <IconFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
