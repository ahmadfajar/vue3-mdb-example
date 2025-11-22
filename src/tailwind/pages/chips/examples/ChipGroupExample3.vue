<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedChip = ref<TChipValue>();
const chipItems: TChipOptionItem[] = [
  { text: 'Arts', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Creative Writers', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Drawers', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Foods', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Home', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Shopping', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Tech', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Vacation', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Work', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
];
</script>

<template>
  <BsChipGroup
    v-model="selectedChip"
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
  />
</template>
