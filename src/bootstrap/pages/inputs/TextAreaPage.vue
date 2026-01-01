<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import TextAreaFeatures1 from '@bs/pages/inputs/parts/TextAreaFeatures1.vue';
import TextAreaFeatures2 from '@bs/pages/inputs/parts/TextAreaFeatures2.vue';
import TextAreaValidation from '@bs/pages/inputs/parts/TextAreaValidation.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'text-area-field' } },
  {
    text: 'Browser Autocomplete',
    location: { name: 'text-area-field-id', params: { id: 'autocomplete' } },
  },
  {
    text: 'Validation Example',
    location: { name: 'text-area-field-id', params: { id: 'validation-example' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <TextAreaValidation v-if="$route.params.id === 'validation-example'" />
      <TextAreaFeatures2 v-else-if="$route.params.id === 'autocomplete'" />
      <TextAreaFeatures1 v-else />
    </Transition>
  </ContentLayout>
</template>
