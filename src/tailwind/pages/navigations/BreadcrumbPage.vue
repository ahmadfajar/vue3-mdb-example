<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import BreadcrumbUsages from '@tw/pages/navigations/parts/BreadcrumbUsages.vue';

const linkItems = [
  { text: 'Basic Example', location: { name: 'breadcrumb' } },
  { text: 'Icon Example', location: { name: 'breadcrumb-id', params: { id: 'icon' } } },
  { text: 'Custom Separator', location: { name: 'breadcrumb-id', params: { id: 'separator' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <BreadcrumbUsages v-if="$route.params.id === 'icon'" section="icon" />
      <BreadcrumbUsages v-else-if="$route.params.id === 'separator'" section="separator" />
      <BreadcrumbUsages v-else />
    </Transition>
  </ContentLayout>
</template>
