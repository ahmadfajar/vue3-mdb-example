<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedChips = ref<TChipValue[]>([]);
const chipItems: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
  { text: 'Home' },
  { text: 'Shopping' },
  { text: 'Tech' },
  { text: 'Vacation' },
  { text: 'Work' },
];
</script>

<template>
  <BsChipGroup
    v-model="selectedChips"
    :items="chipItems"
    {$activeClass}
    {$avatarCircle}
    {$avatarPadding}
    {$checkedIcon}
    {$colorName}
    {$column}
    {$shapes}
    {$sizes}
    {$sliderButton}
    {$variants}
    multiple
  />
</template>
