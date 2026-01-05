<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const lightbox = ref<BsLightboxInstance>();
const showGallery = ref(false);
const galleryItems = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'First image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=252',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=252',
    title: 'Second image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=253',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=253',
    title: 'Third image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=254',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=254',
    title: 'Third image title',
    type: 'image',
  },
];
</script>

<template>
  <div class="w-full flex flex-wrap justify-center md-gap-5">
    <div
      class="rounded md-link md-shadow-2"
      style="height: 120px; width: 120px"
      @click="lightbox?.openAt(0)"
    >
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=251"
        style="object-fit: cover"
      />
    </div>
    <div
      class="rounded md-link md-shadow-2"
      style="height: 120px; width: 120px"
      @click="lightbox?.openAt(1)"
    >
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=252"
        style="object-fit: cover"
      />
    </div>
    <div
      class="rounded md-link md-shadow-2"
      style="height: 120px; width: 120px"
      @click="lightbox?.openAt(2)"
    >
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=253"
        style="object-fit: cover"
      />
    </div>
    <div
      class="rounded md-link md-shadow-2"
      style="height: 120px; width: 120px"
      @click="lightbox?.openAt(3)"
    >
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=254"
        style="object-fit: cover"
      />
    </div>
    <BsLightbox
      ref="lightbox"
      v-model:open="showGallery"
      :items="galleryItems"
      thumbnail-height="62"
    />
  </div>
</template>
