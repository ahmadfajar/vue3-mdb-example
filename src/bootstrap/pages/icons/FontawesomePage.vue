<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import FontawesomeFeatures from '@bs/pages/icons/parts/FontawesomeFeatures.vue';

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
      <FontawesomeFeatures
        :key="$route.params.id as string"
        :section="$route.params.id as string"
      />
    </Transition>
  </ContentLayout>
</template>
