<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrink = ref<string>();
const drinks: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
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
    <div class="sm:w-33 col-form-label font-weight-medium">Favorite Drink</div>
  </BsToggleField>
</template>
