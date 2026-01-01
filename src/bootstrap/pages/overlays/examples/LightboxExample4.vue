<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const lightbox = ref<BsLightboxInstance>();
const showGallery = ref(false);
const toolbarButtons = { download: true, rotate: true, menubar: true, close: true };
const galleryItems = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=256',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=256',
    title: 'Second image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=257',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=257',
    title: 'Third image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Third image title',
    type: 'image',
  },
];
</script>

<template>
  <div class="w-full flex flex-wrap justify-center md-gap-5">
    <div class="size-30 rounded md-link md-shadow-2" @click="lightbox?.openAt(0)">
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=255"
        style="object-fit: cover"
      />
    </div>
    <div class="size-30 rounded md-link md-shadow-2" @click="lightbox?.openAt(1)">
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=256"
        style="object-fit: cover"
      />
    </div>
    <div class="size-30 rounded md-link md-shadow-2" @click="lightbox?.openAt(2)">
      <img
        alt="First Image"
        class="h-full w-full rounded"
        src="https://unsplash.it/600.jpg?image=257"
        style="object-fit: cover"
      />
    </div>
    <div class="size-30 rounded md-link md-shadow-2" @click="lightbox?.openAt(3)">
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
      :toolbar="toolbarButtons"
    >
      <template #menubar>
        <BsListView individual-state>
          <BsListTile navigable>
            <BsListTileTitle>Add to album</BsListTileTitle>
          </BsListTile>
          <BsListTile navigable>
            <BsListTileTitle>Share picture</BsListTileTitle>
          </BsListTile>
          <bs-divider />
          <BsListTile navigable>
            <BsListTileTitle>Send Feedback</BsListTileTitle>
          </BsListTile>
        </BsListView>
      </template>
    </BsLightbox>
  </div>
</template>
