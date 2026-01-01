<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import TabsExtraSlot from '@bs/pages/navigations/parts/TabsExtraSlot.vue';
import TabsFeatures from '@bs/pages/navigations/parts/TabsFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'tabs' } },
  { text: 'Using Extra Slot', location: { name: 'tabs-id', params: { id: 'extra-slot' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <TabsExtraSlot v-if="$route.params.id === 'extra-slot'" />
      <TabsFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
