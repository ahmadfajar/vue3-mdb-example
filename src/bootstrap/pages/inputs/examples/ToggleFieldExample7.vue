<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrinks = ref<string[]>([]);
const drinks: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
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
      <BsSvgIcon v-if="selectedDrinks.includes(item?.value as string)" icon="check" />
    </template>
    <div class="col-sm-3 col-form-label font-weight-medium">Favorite Drinks</div>
  </BsToggleField>
</template>
