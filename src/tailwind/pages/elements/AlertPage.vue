<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import AlertContents from '@tw/pages/elements/parts/AlertContents.vue';
import AlertContextual from '@tw/pages/elements/parts/AlertContextual.vue';
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
      <AlertContextual v-if="$route.params.id === 'contextual'" />
      <AlertContents v-else-if="$route.params.id === 'contents'" />
      <AlertFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
