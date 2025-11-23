<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import AlertFeatures from '@tw/pages/elements/parts/AlertFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'alert' } },
  { text: 'Contextual Alerts', location: { name: 'alert-id', params: { id: 'contextual' } } },
  { text: 'Additional Contents', location: { name: 'alert-id', params: { id: 'contents' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <AlertFeatures v-if="$route.params.id === 'contextual'" />
      <AlertFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
