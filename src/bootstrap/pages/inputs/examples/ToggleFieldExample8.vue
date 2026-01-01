<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrinks = ref<string[]>([]);
const drinks: TInputOptionItem[] = [
  { value: 'Tea', icon: 'glass_cup' },
  { value: 'Coffee', icon: 'coffee' },
  { value: 'Beer', icon: 'liquor' },
];
</script>

<template>
  <BsToggleField
    v-model="selectedDrinks"
    :items="drinks"
    {$colorName}
    {$iconPosition}
    {$iconSize}
    {$raised}
    {$shapes}
    {$sizes}
    {$states}
    {$variants}
    multiple
  >
    <template #icon="item">
      <BsSvgIcon :icon="selectedDrinks.includes(item?.value as string) ? 'check' : item?.icon!" />
    </template>
    <div class="sm:w-36 col-form-label font-weight-medium">Favorite Drinks</div>
  </BsToggleField>
</template>
