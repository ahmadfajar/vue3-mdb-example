<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import AppbarFeatures from '@tw/pages/containment/parts/AppbarFeatures.vue';

const linkItems = [
  { text: 'Basic Usage', location: { name: 'appbar' } },
  { text: 'Advance Usage', location: { name: 'appbar-id', params: { id: 'advance' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <AppbarFeatures v-if="$route.params.id === 'advance'" advance />
      <AppbarFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
