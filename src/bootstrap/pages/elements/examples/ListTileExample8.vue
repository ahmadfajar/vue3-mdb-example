<script setup lang="ts">
import { ref } from 'vue';

const listItems = ref([
  {
    avatar: 'https://ahmadfajar.github.io/img/crunchy-croissants.jpg',
    title: 'Crunchy Croissants',
    text: 'Buttery, flaky pastry named for its crescent shaped.',
    active: true,
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/grilled-eggplant-1.jpg',
    title: 'Grilled Eggplant',
    text: 'Tender with a rich, complex flavor when cooked.',
    active: true,
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/tangerine-salad.jpg',
    title: 'Tangerine Salad',
    text: 'Peak tangerine season lasts from autumn to spring.',
    active: false,
    disabled: true,
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/pomegranate-juice.jpg',
    title: 'Pomegranate Juice',
    text: 'A superfood for good skin, hair and health.',
    active: false,
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/simple-salsa.jpg',
    title: 'Chili Salsa',
    text: 'Heat up any taco night with minimal preparation.',
    active: false,
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/flour-scratch.jpg',
    title: 'Flour from scratch',
    text: 'Grind grains, nuts, or beans in your coffee grinder.',
    active: false,
  },
]);
</script>

<template>
  <BsApp class="p-2">
    <BsCard class="w-full max-w-100 mx-auto" shadow>
      <BsAppbar class="bg-indigo-700">
        <BsButton color="light" flat icon="menu" mode="icon" />
        <BsAppbarTitle class="text-white" title="My Recipes" />
        <BsSpacer />
        <BsButton color="light" flat icon="search" mode="icon" />
      </BsAppbar>
      <BsListView individual-state>
        <BsSubheader>Summer Recipes</BsSubheader>
        <template v-for="(item, index) in listItems" :key="item.title">
          <BsListTile v-model:active="item.active" :disabled="item.disabled" navigable>
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
  </BsApp>
</template>
