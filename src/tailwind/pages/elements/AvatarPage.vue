<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import AvatarAdvance from '@tw/pages/elements/parts/AvatarAdvance.vue';
import AvatarAnimation from '@tw/pages/elements/parts/AvatarAnimation.vue';
import AvatarFeatures from '@tw/pages/elements/parts/AvatarFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'avatar' } },
  { text: 'Animation', location: { name: 'avatar-id', params: { id: 'animation' } } },
  { text: 'Advance Usage', location: { name: 'avatar-id', params: { id: 'advance-usage' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <AvatarAnimation v-if="$route.params.id === 'animation'" />
      <AvatarAdvance v-else-if="$route.params.id === 'advance-usage'" />
      <AvatarFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
