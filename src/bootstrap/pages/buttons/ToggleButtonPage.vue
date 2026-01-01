<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ToggleButtonCheckedIcon from '@bs/pages/buttons/parts/ToggleButtonCheckedIcon.vue';
import ToggleButtonFeatures from '@bs/pages/buttons/parts/ToggleButtonFeatures.vue';
import ToggleButtonMultiSelect from '@bs/pages/buttons/parts/ToggleButtonMultiSelect.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'toggle-button' } },
  { text: 'Checked Icon', location: { name: 'toggle-button-id', params: { id: 'checked-icon' } } },
  {
    text: 'Multi Select',
    location: { name: 'toggle-button-id', params: { id: 'multi-select' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ToggleButtonCheckedIcon v-if="$route.params.id === 'checked-icon'" />
      <ToggleButtonMultiSelect v-else-if="$route.params.id === 'multi-select'" />
      <ToggleButtonFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
