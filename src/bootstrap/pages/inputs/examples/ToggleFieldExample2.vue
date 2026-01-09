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
    {$help_text}
    {$iconPosition}
    {$iconSize}
    {$persistent_help_off}
    {$raised}
    {$shapes}
    {$sizes}
    {$states}
    {$variants}
  >
    <div class="col-sm-3 col-form-label font-weight-medium">Favorite Drink</div>
  </BsToggleField>
</template>
