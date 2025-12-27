<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ListboxCustom from '@tw/pages/inputs/parts/ListboxCustom.vue';
import ListboxFeatures from '@tw/pages/inputs/parts/ListboxFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'listbox' } },
  { text: 'Image Support', location: { name: 'listbox-id', params: { id: 'image-support' } } },
  {
    text: 'Customizing Listbox',
    location: { name: 'listbox-id', params: { id: 'customizing-listbox' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ListboxCustom v-if="$route.params.id === 'customizing-listbox'" />
      <ListboxFeatures v-else-if="$route.params.id === 'image-support'" section="image-support" />
      <ListboxFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
