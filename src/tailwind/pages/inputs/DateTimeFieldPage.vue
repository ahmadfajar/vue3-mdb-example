<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import DateTimeFieldColors from '@tw/pages/inputs/parts/DateTimeFieldColors.vue';
import DateTimeFieldFeatures from '@tw/pages/inputs/parts/DateTimeFieldFeatures.vue';
import DateTimeFieldValidation from '@tw/pages/inputs/parts/DateTimeFieldValidation.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'date-time-field' } },
  {
    text: 'Custom Color',
    location: { name: 'date-time-field-id', params: { id: 'custom-color' } },
  },
  {
    text: 'Validation Example',
    location: { name: 'date-time-field-id', params: { id: 'validation-example' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <DateTimeFieldColors v-if="$route.params.id === 'custom-color'" />
      <DateTimeFieldValidation v-else-if="$route.params.id === 'validation-example'" />
      <DateTimeFieldFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
