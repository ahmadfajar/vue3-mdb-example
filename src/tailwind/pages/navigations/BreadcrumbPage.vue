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
      <BreadcrumbUsages :key="$route.params.id as string" :section="$route.params.id as string" />
    </Transition>
  </ContentLayout>
</template>
