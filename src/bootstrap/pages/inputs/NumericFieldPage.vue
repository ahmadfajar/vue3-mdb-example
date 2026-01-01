<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import NumericFieldFeatures1 from '@bs/pages/inputs/parts/NumericFieldFeatures1.vue';
import NumericFieldFeatures2 from '@bs/pages/inputs/parts/NumericFieldFeatures2.vue';
import NumericFieldValidation from '@bs/pages/inputs/parts/NumericFieldValidation.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'numeric-field' } },
  {
    text: 'Prefix and Suffix',
    location: { name: 'numeric-field-id', params: { id: 'prefix-suffix' } },
  },
  {
    text: 'Validation Example',
    location: { name: 'numeric-field-id', params: { id: 'validation-example' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <NumericFieldValidation v-if="$route.params.id === 'validation-example'" />
      <NumericFieldFeatures2 v-else-if="$route.params.id === 'prefix-suffix'" />
      <NumericFieldFeatures1 v-else />
    </Transition>
  </ContentLayout>
</template>
