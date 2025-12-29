<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ToggleFieldCheckedIcon from '@tw/pages/inputs/parts/ToggleFieldCheckedIcon.vue';
import ToggleFieldFeatures from '@tw/pages/inputs/parts/ToggleFieldFeatures.vue';
import ToggleFieldMultiSelect from '@tw/pages/inputs/parts/ToggleFieldMultiSelect.vue';
import ToggleFieldValidation from '@tw/pages/inputs/parts/ToggleFieldValidation.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'toggle-field' } },
  { text: 'Checked Icon', location: { name: 'toggle-field-id', params: { id: 'checked-icon' } } },
  {
    text: 'Multi Select',
    location: { name: 'toggle-field-id', params: { id: 'multi-select' } },
  },
  {
    text: 'Validation Example',
    location: { name: 'toggle-field-id', params: { id: 'validation-example' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <ToggleFieldValidation v-if="$route.params.id === 'validation-example'" />
      <ToggleFieldMultiSelect v-else-if="$route.params.id === 'multi-select'" />
      <ToggleFieldCheckedIcon v-else-if="$route.params.id === 'checked-icon'" />
      <ToggleFieldFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
