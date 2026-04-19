<script setup lang="ts">
import { ref } from 'vue';

const listItems = ref([
  {
    avatar: 'https://ahmadfajar.github.io/img/crunchy-croissants.jpg',
    title: 'Crunchy Croissants',
    text: 'Buttery, flaky pastry named for its crescent shaped.',
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/grilled-eggplant-1.jpg',
    title: 'Grilled Eggplant',
    text: 'Tender with a rich, complex flavor when cooked.',
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/tangerine-salad.jpg',
    title: 'Tangerine Salad',
    text: 'Peak tangerine season lasts from autumn to spring.',
    disabled: true,
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/pomegranate-juice.jpg',
    title: 'Pomegranate Juice',
    text: 'A superfood for good skin, hair and health.',
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/simple-salsa.jpg',
    title: 'Chili Salsa',
    text: 'Heat up any taco night with minimal preparation.',
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/flour-scratch.jpg',
    title: 'Flour from scratch',
    text: 'Grind grains, nuts, or beans in your coffee grinder.',
  },
]);
</script>

<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="bg-indigo-500 flex items-center py-3">
      <BsButton color="light" flat icon="arrow_back" mode="icon" />
      <span class="h4 font-weight-normal text-white ps-3">My Recipes</span>
      <BsSpacer />
      <BsButton color="light" flat icon="search" mode="icon" />
    </BsCardHeader>
    <BsListView>
      <BsSubheader>Summer Recipes</BsSubheader>
      <template v-for="(item, index) in listItems" :key="item.title">
        <BsListTile :disabled="item.disabled" navigable>
          <BsListTileLeading :img-src="item.avatar" :size="{ height: 56, width: 85 }" />
          <BsListTileContent multi-line>
            <BsListTileTitle class="font-weight-semibold">
              {{ item.title }}
            </BsListTileTitle>
            <BsListTileSubtitle>
              {{ item.text }}
            </BsListTileSubtitle>
          </BsListTileContent>
          <BsListTileAction style="font-weight: 300; font-size: 120%">
            0{{ index + 1 }}
          </BsListTileAction>
        </BsListTile>
        <BsDivider
          v-if="index + 1 < listItems.length"
          :key="item.title + index"
          left-indent="118"
        />
      </template>
    </BsListView>
  </BsCard>
</template>
