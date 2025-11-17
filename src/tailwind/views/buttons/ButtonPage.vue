<script setup lang="ts">
import type { LinkItem } from '@shares/dataStore.ts';
import ButtonBlock from '@tw/views/buttons/parts/ButtonBlock.vue';
import ButtonFeatures from '@tw/views/buttons/parts/ButtonFeatures.vue';
import ButtonGroups from '@tw/views/buttons/parts/ButtonGroups.vue';
import ButtonIconRotation from '@tw/views/buttons/parts/ButtonIconRotation.vue';
import ButtonToolbar from '@tw/views/buttons/parts/ButtonToolbar.vue';
import FabFeatures from '@tw/views/buttons/parts/FabFeatures.vue';
import IconButtonFeatures from '@tw/views/buttons/parts/IconButtonFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'button' } },
  { text: 'Icon Button', location: { name: 'button-id', params: { id: 'icon-button' } } },
  { text: 'FAB Button', location: { name: 'button-id', params: { id: 'fab-button' } } },
  {
    text: 'Extended FAB',
    location: { name: 'button-id', params: { id: 'extended-fab-button' } },
  },
  {
    text: 'Color Variants',
    location: { name: 'button-id', params: { id: 'color-variants' } },
  },
  {
    text: 'Icon Rotation',
    location: { name: 'button-id', params: { id: 'icon-rotation' } },
  },
  {
    text: 'Button Block',
    location: { name: 'button-id', params: { id: 'button-block' } },
  },
  {
    text: 'Button Groups',
    location: { name: 'button-id', params: { id: 'button-groups' } },
  },
  {
    text: 'Button Toolbar',
    location: { name: 'button-id', params: { id: 'button-toolbar' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <IconButtonFeatures v-if="$route.params.id === 'icon-button'" />
      <FabFeatures v-else-if="$route.params.id === 'fab-button'" />
      <FabFeatures v-else-if="$route.params.id === 'extended-fab-button'" extended />
      <ButtonFeatures v-else-if="$route.params.id === 'color-variants'" show-color />
      <ButtonIconRotation v-else-if="$route.params.id === 'icon-rotation'" />
      <ButtonBlock v-else-if="$route.params.id === 'button-block'" />
      <ButtonGroups v-else-if="$route.params.id === 'button-groups'" />
      <ButtonToolbar v-else-if="$route.params.id === 'button-toolbar'" />
      <ButtonFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
