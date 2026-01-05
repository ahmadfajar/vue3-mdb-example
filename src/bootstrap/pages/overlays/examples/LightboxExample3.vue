<script setup lang="ts">
import { ref } from 'vue';

const showGallery = ref(false);
const galleryItems = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'Your image title',
    type: 'image',
  },
];
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="rounded md-link md-shadow-2"
      style="height: 120px; width: 120px"
      @click="showGallery = true"
    >
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=251"
        style="object-fit: cover"
      />
    </div>

    <BsLightbox
      v-model:open="showGallery"
      :items="galleryItems"
      :show-counter="false"
      :show-nav-control="false"
      :show-thumbnail="false"
      :show-toolbar="false"
    />
  </div>
</template>
