<script setup lang="ts">
import type { TBreadcrumb } from 'vue-mdbootstrap';

const items1 = [
  { label: 'Home', pathName: 'breadcrumb' },
  { label: 'Components' },
] satisfies TBreadcrumb[];

const items2 = [
  { label: 'Home', pathName: 'breadcrumb' },
  { label: 'Components', path: '/navigations/breadcrumb' },
  { label: 'Breadcrumb' },
] satisfies TBreadcrumb[];
</script>

<template>
  <div>
    <BsBreadcrumb :items="items1" />
    <BsBreadcrumb :items="items2" />
  </div>
</template>
