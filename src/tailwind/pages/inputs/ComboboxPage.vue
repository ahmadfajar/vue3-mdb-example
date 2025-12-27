<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ComboboxExamples from '@tw/pages/inputs/parts/ComboboxExamples.vue';
import ComboboxFeatures1 from '@tw/pages/inputs/parts/ComboboxFeatures1.vue';
import ComboboxFeatures2 from '@tw/pages/inputs/parts/ComboboxFeatures2.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'combobox' } },
  { text: 'Image Support', location: { name: 'combobox-id', params: { id: 'image-support' } } },
  {
    text: 'Cascade Example',
    location: { name: 'combobox-id', params: { id: 'cascade-example' } },
  },
  {
    text: 'Validation Example',
    location: { name: 'combobox-id', params: { id: 'validation-example' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ComboboxExamples
        v-if="$route.params.id === 'validation-example'"
        section="validation-example"
      />
      <ComboboxExamples
        v-else-if="$route.params.id === 'cascade-example'"
        section="cascade-example"
      />
      <ComboboxFeatures2 v-else-if="$route.params.id === 'image-support'" />
      <ComboboxFeatures1 v-else />
    </Transition>
  </ContentLayout>
</template>
