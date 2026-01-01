<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrinks = ref<string[]>([]);
const drinks: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
</script>

<template>
  <div class="row">
    <div class="col-md-4 pt-2 font-weight-medium">Favorite Drinks</div>
    <div class="col-md-8">
      <BsToggleButton
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
      />
    </div>
  </div>
</template>
