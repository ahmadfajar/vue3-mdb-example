<script setup lang="ts">
import type { TBreadcrumb } from 'vue-mdbootstrap';

const svg = encodeURI(
  "url(\"data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -60 320 512' fill='#7a7e85' width='14' height='16'><path d='M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z' /></svg>\")"
);

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
    <BsBreadcrumb :items="items1" prepend-icon="home" separator=">" />
    <BsBreadcrumb :items="items2" :separator="svg" prepend-icon="home" />
  </div>
</template>
