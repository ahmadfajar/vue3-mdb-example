<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrink = ref<string>();
const drinks: TInputOptionItem[] = [
  { value: 'Tea', icon: 'glass_cup' },
  { value: 'Coffee', icon: 'coffee' },
  { value: 'Beer', icon: 'liquor' },
];
</script>

<template>
  <BsToggleField
    v-model="selectedDrink"
    :items="drinks"
    {$colorName}
    {$iconPosition}
    {$iconSize}
    {$raised}
    {$shapes}
    {$sizes}
    {$states}
    {$variants}
  >
    <template #icon="item">
      <BsSvgIcon :icon="item?.value === selectedDrink ? 'check' : item?.icon!" />
    </template>
    <div class="sm:w-33 col-form-label font-weight-medium">Favorite Drink</div>
  </BsToggleField>
</template>
