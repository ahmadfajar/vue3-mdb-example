<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import BreadcrumbFeatures from '@tw/pages/navigations/parts/BreadcrumbFeatures.vue';

const linkItems = [
  { text: 'Basic Example', location: { name: 'breadcrumb' } },
  { text: 'Icon Example', location: { name: 'breadcrumb-id', params: { id: 'icon' } } },
  { text: 'Custom Separator', location: { name: 'breadcrumb-id', params: { id: 'separator' } } },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <BreadcrumbFeatures v-if="$route.params.id === 'icon'" section="icon" />
      <BreadcrumbFeatures v-else-if="$route.params.id === 'separator'" section="separator" />
      <BreadcrumbFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
