<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import RadioGroup from '@bs/pages/inputs/parts/RadioGroup.vue';
import RadioOverview from '@bs/pages/inputs/parts/RadioOverview.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'radio-button' } },
  { text: 'Radio Group', location: { name: 'radio-button-id', params: { id: 'group' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <RadioGroup v-if="$route.params.id === 'group'" />
      <RadioOverview v-else />
    </Transition>
  </ContentLayout>
</template>
