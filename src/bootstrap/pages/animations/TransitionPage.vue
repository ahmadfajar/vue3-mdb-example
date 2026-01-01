<script setup lang="ts">
import { type LinkItem } from '@shares/provider.ts';
import TransitionView1 from '@bs/pages/animations/parts/TransitionView1.vue';
import TransitionView2 from '@bs/pages/animations/parts/TransitionView2.vue';

const linkItems = [
  { text: 'Fade', location: { name: 'transition-effects' } },
  { text: 'Scale', location: { name: 'transition-effects-id', params: { id: 'scale' } } },
  { text: 'Slide Fade', location: { name: 'transition-effects-id', params: { id: 'slide-fade' } } },
  {
    text: 'Slide Fade Reverse',
    location: { name: 'transition-effects-id', params: { id: 'slide-fade-reverse' } },
  },
  {
    text: 'Slide Left Right',
    location: { name: 'transition-effects-id', params: { id: 'slide-left-right' } },
  },
  {
    text: 'Slide Right Left',
    location: { name: 'transition-effects-id', params: { id: 'slide-right-left' } },
  },
  {
    text: 'Slide Top Bottom',
    location: { name: 'transition-effects-id', params: { id: 'slide-top-bottom' } },
  },
  {
    text: 'Slide Bottom Top',
    location: { name: 'transition-effects-id', params: { id: 'slide-bottom-top' } },
  },
  {
    text: 'Expand Transition',
    location: { name: 'transition-effects-id', params: { id: 'expand-transition' } },
  },
  {
    text: 'Rotate Clock Wise',
    location: { name: 'transition-effects-id', params: { id: 'rotate-clock-wise' } },
  },
  {
    text: 'Rotate Clock Reverse',
    location: { name: 'transition-effects-id', params: { id: 'rotate-clock-reverse' } },
  },
  {
    text: 'Roll In-Out',
    location: { name: 'transition-effects-id', params: { id: 'roll-in-out' } },
  },
] satisfies LinkItem[];
</script>

<template>
  <ContentLayout :links="linkItems">
    <Transition mode="out-in" name="fade">
      <TransitionView2 v-if="$route.params.id === 'expand-transition'" />
      <TransitionView1
        v-else
        :key="$route.params.id as string"
        :transition="($route.params.id as string) || 'fade'"
      />
    </Transition>
  </ContentLayout>
</template>
