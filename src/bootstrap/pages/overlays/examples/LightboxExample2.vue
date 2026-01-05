<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const lightbox = ref<BsLightboxInstance>();
const showGallery = ref(false);
const galleryItems = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First gallery item',
    type: 'image',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q',
    sourceUrl: 'https://www.youtube.com/watch?v=s8h4YNaX2aM',
    title: 'Second gallery item',
    type: 'youtube',
  },
  {
    thumbnail: 'https://www.dragon1.com/images/Big_Buck_Bunny.jpg',
    sourceUrl: 'https://www.dragon1.com/video/mp4/BigBuck_Bunny_1280x720_30mb.mp4',
    title: 'Third gallery item',
    type: 'video',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Fourth gallery item',
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
        src="https://unsplash.it/600.jpg?image=255"
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
        src="https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q"
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
        src="https://www.dragon1.com/images/Big_Buck_Bunny.jpg"
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
        src="https://unsplash.it/600.jpg?image=259"
        style="object-fit: cover"
      />
    </div>
    <BsLightbox
      ref="lightbox"
      v-model:open="showGallery"
      :items="galleryItems"
      :show-item-title="false"
      thumbnail-height="62"
    />
  </div>
</template>
