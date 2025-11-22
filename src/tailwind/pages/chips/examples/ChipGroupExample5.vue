<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedChips = ref<TChipValue[]>([]);
const chipItems: TChipOptionItem[] = [
  { text: 'Arts', icon: 'wall_art' },
  { text: 'Creative Writers', icon: 'article_person' },
  { text: 'Drawers', icon: 'bottom_drawer' },
  { text: 'Foods', icon: 'flatware' },
  { text: 'Home', icon: 'home' },
  { text: 'Shopping', icon: 'shopping_cart' },
  { text: 'Tech', icon: 'manufacturing' },
  { text: 'Vacation', icon: 'chair_umbrella' },
  { text: 'Work', icon: 'workspaces' },
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
