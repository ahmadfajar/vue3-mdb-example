<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import FontawesomeFeatures from '@tw/pages/icons/parts/FontawesomeFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'fontawesome-icon' } },
  { text: 'Styling an Icon', location: { name: 'fontawesome-icon-id', params: { id: 'styling' } } },
  {
    text: 'Rotating an Icon',
    location: { name: 'fontawesome-icon-id', params: { id: 'rotation' } },
  },
  {
    text: 'Animating an Icon',
    location: { name: 'fontawesome-icon-id', params: { id: 'animation' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <FontawesomeFeatures v-if="$route.params.id === 'styling'" section="styling" />
      <FontawesomeFeatures v-else-if="$route.params.id === 'rotation'" section="rotation" />
      <FontawesomeFeatures v-else-if="$route.params.id === 'animation'" section="animation" />
      <FontawesomeFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
