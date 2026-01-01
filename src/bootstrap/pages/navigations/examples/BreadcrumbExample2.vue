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
    <BsBreadcrumb :items="items1" prepend-icon="home" />
    <BsBreadcrumb :items="items2" icon-size="28" prepend-icon="home_rounded_filled" />
    <BsBreadcrumb :items="items2">
      <template #icon>
        <BsFontawesomeIcon icon="house" variant="regular" size="22" />
      </template>
    </BsBreadcrumb>
  </div>
</template>
