<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import CheckboxCustom from '@tw/pages/inputs/parts/CheckboxCustom.vue';
import CheckboxGroup from '@tw/pages/inputs/parts/CheckboxGroup.vue';
import CheckboxOverview from '@tw/pages/inputs/parts/CheckboxOverview.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'checkbox' } },
  { text: 'Checkbox Group', location: { name: 'checkbox-id', params: { id: 'group' } } },
  { text: 'Custom Checkbox', location: { name: 'checkbox-id', params: { id: 'custom' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <CheckboxGroup v-if="$route.params.id === 'group'" />
      <CheckboxCustom v-else-if="$route.params.id === 'custom'" />
      <CheckboxOverview v-else />
    </Transition>
  </ContentLayout>
</template>
