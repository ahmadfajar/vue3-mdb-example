<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import DatePickerColor from '@tw/pages/pickers/parts/DatePickerColor.vue';
import DatePickerModes from '@tw/pages/pickers/parts/DatePickerModes.vue';
import DatePickerOverview from '@tw/pages/pickers/parts/DatePickerOverview.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'date-picker' } },
  {
    text: 'Selection Modes',
    location: { name: 'date-picker-id', params: { id: 'mode' } },
  },
  {
    text: 'Custom Color',
    location: { name: 'date-picker-id', params: { id: 'color' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <DatePickerModes v-if="$route.params.id === 'mode'" />
      <DatePickerColor v-else-if="$route.params.id === 'color'" />
      <DatePickerOverview v-else />
    </Transition>
  </ContentLayout>
</template>
