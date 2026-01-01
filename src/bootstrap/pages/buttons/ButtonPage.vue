<script setup lang="ts">
import type { LinkItem } from '@shares/provider.ts';
import ButtonBlock from '@bs/pages/buttons/parts/ButtonBlock.vue';
import ButtonFeatures from '@bs/pages/buttons/parts/ButtonFeatures.vue';
import ButtonGroups from '@bs/pages/buttons/parts/ButtonGroups.vue';
import ButtonIconRotation from '@bs/pages/buttons/parts/ButtonIconRotation.vue';
import ButtonToolbar from '@bs/pages/buttons/parts/ButtonToolbar.vue';
import FabFeatures from '@bs/pages/buttons/parts/FabFeatures.vue';
import IconButtonFeatures from '@bs/pages/buttons/parts/IconButtonFeatures.vue';

const linkItems = [
  { text: 'Overview', location: { name: 'button' } },
  { text: 'Icon Button', location: { name: 'button-id', params: { id: 'icon-button' } } },
  { text: 'FAB Button', location: { name: 'button-id', params: { id: 'fab-button' } } },
  {
    text: 'Extended FAB',
    location: { name: 'button-id', params: { id: 'extended-fab-button' } },
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
      <ButtonIconRotation v-else-if="$route.params.id === 'icon-rotation'" />
      <ButtonBlock v-else-if="$route.params.id === 'button-block'" />
      <ButtonGroups v-else-if="$route.params.id === 'button-groups'" />
      <ButtonToolbar v-else-if="$route.params.id === 'button-toolbar'" />
      <ButtonFeatures v-else />
    </Transition>
  </ContentLayout>
</template>
