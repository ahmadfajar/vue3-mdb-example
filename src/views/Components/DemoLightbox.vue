<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <div class="card bg-grey-200 border-0 py-4 px-3">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-6">
          <div class="row g-4 row-cols-2 row-cols-md-4">
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=251"
                size="100%"
                rounded
                @click="lightbox1?.openAt(0)"
              />
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=252"
                size="100%"
                rounded
                @click="lightbox1?.openAt(1)"
              />
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=253"
                size="100%"
                rounded
                @click="lightbox1?.openAt(2)"
              />
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=254"
                size="100%"
                rounded
                @click="lightbox1?.openAt(3)"
              />
            </div>
          </div>
        </div>
      </div>
      <BsLightbox ref="lightbox1" v-model:open="showGallery1" :items="galleryItems1" />
    </div>
    <h2 class="mt-5">Customizing Toolbar Buttons</h2>
    <div class="card bg-grey-200 border-0 py-4 px-3">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-6">
          <div class="row g-4 row-cols-2 row-cols-md-4">
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=255"
                size="100%"
                rounded
                @click="lightbox2?.openAt(0)"
              />
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=256"
                size="100%"
                rounded
                @click="lightbox2?.openAt(1)"
              />
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=257"
                size="100%"
                rounded
                @click="lightbox2?.openAt(2)"
              />
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=259"
                size="100%"
                rounded
                @click="lightbox2?.openAt(3)"
              />
            </div>
          </div>
        </div>
      </div>
      <BsLightbox
        ref="lightbox2"
        v-model:open="showGallery2"
        :items="galleryItems2"
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
    <h2 class="mt-5">Display Single Image</h2>
    <div class="card bg-grey-200 border-0 py-4 px-3">
      <div class="d-flex justify-content-center">
        <BsAvatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=251"
          size="132"
          rounded
          @click="showGallery3 = true"
        />
      </div>
      <BsLightbox
        v-model:open="showGallery3"
        :items="galleryItems3"
        :show-counter="false"
        :show-nav-control="false"
        :show-thumbnail="false"
        :show-toolbar="false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue';
import { ref } from 'vue';

declare interface ILightboxComponent extends ComponentPublicInstance {
  openAt(index: number): void;
}

const toolbarButtons = { download: true, rotate: true, menubar: true, close: true };
const lightbox1 = ref<ILightboxComponent>();
const lightbox2 = ref<ILightboxComponent>();
const showGallery1 = ref(false);
const showGallery2 = ref(false);
const showGallery3 = ref(false);
const galleryItems1 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'First image title'
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=252',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
    title: 'Second image title'
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=253',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
    title: 'Third image title'
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=254',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
    title: 'Third image title'
  }
];
const galleryItems2 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First image title'
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=256',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
    title: 'Second image title'
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=257',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=257',
    title: 'Third image title'
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Third image title'
  }
];
const galleryItems3 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'Your image title'
  }
];
</script>
