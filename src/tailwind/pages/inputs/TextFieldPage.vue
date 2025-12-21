<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import TextFieldFeatures2 from '@tw/pages/inputs/parts/TextFieldFeatures2.vue';
import TextFieldDataList from '@tw/pages/inputs/parts/TextFieldDataList.vue';
import TextFieldFeatures1 from '@tw/pages/inputs/parts/TextFieldFeatures1.vue';
import TextFieldValidation from '@tw/pages/inputs/parts/TextFieldValidation.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'text-field' } },
  {
    text: 'Browser Autocomplete',
    location: { name: 'text-field-id', params: { id: 'autocomplete' } },
  },
  { text: 'Data List', location: { name: 'text-field-id', params: { id: 'datalist' } } },
  {
    text: 'Prefix and Suffix',
    location: { name: 'text-field-id', params: { id: 'prefix-suffix' } },
  },
  {
    text: 'Validation Example',
    location: { name: 'text-field-id', params: { id: 'validation-example' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <TextFieldFeatures2 v-if="$route.params.id === 'prefix-suffix'" section="prefix-suffix" />
      <TextFieldFeatures2 v-else-if="$route.params.id === 'autocomplete'" />
      <TextFieldDataList v-else-if="$route.params.id === 'datalist'" />
      <TextFieldValidation v-else-if="$route.params.id === 'validation-example'" />
      <TextFieldFeatures1 v-else />
    </Transition>
  </ContentLayout>
</template>
