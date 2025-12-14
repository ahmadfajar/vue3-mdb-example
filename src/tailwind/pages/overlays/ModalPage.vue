<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ModalUsages from '@tw/pages/overlays/parts/ModalUsages.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'modal' } },
  {
    text: 'True Modal Dialog',
    location: { name: 'modal-id', params: { id: 'true-modal' } },
  },
  {
    text: 'Scrolling Long Content',
    location: { name: 'modal-id', params: { id: 'long-content' } },
  },
  {
    text: 'Hiding Backdrop Overlay',
    location: { name: 'modal-id', params: { id: 'hide-backdrop' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ModalUsages v-if="$route.params.id === 'true-modal'" section="true-modal" />
      <ModalUsages v-else-if="$route.params.id === 'long-content'" section="long-content" />
      <ModalUsages v-else-if="$route.params.id === 'hide-backdrop'" section="hide-backdrop" />
      <ModalUsages v-else />
    </Transition>
  </ContentLayout>
</template>
