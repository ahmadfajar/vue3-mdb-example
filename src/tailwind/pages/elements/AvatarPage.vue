<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import AvatarAnimation from '@tw/pages/elements/parts/AvatarAnimation.vue';
import AvatarFeatures from '@tw/pages/elements/parts/AvatarFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'avatar' } },
  { text: 'Animation', location: { name: 'avatar-id', params: { id: 'animation' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <AvatarAnimation v-if="$route.params.id === 'animation'" />
      <AvatarFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
