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
    {$iconPosition}
    {$iconSize}
    {$raised}
    {$shapes}
    {$sizes}
    {$states}
    {$variants}
  >
    <template #icon="item">
      <BsSvgIcon v-if="item?.value === selectedDrink" icon="check" />
    </template>
    <div class="col-sm-3 col-form-label font-weight-medium">Favorite Drink</div>
  </BsToggleField>
</template>
