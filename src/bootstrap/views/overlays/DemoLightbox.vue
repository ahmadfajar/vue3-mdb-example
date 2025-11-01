<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <div class="card bg-gray-200 border-0 py-4 px-3 mt-3">
      <div class="row justify-center">
        <div class="col-lg-8 col-xl-6">
          <div class="row g-4 row-cols-2 row-cols-md-4">
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox1?.openAt(0)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=251"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox1?.openAt(1)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=252"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox1?.openAt(2)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=253"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox1?.openAt(3)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=254"
                  style="object-fit: cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BsLightbox
        ref="lightbox1"
        v-model:open="showGallery1"
        :items="galleryItems1"
        thumbnail-height="62"
      />
    </div>

    <h2 class="mt-5">Images and Videos</h2>
    <div class="card bg-gray-200 border-0 py-4 px-3 mt-3">
      <div class="row justify-center">
        <div class="col-lg-8 col-xl-6">
          <div class="row g-4 row-cols-2 row-cols-md-4">
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox3?.openAt(0)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=255"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox3?.openAt(1)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox3?.openAt(2)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://www.dragon1.com/images/Big_Buck_Bunny.jpg"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox3?.openAt(3)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=259"
                  style="object-fit: cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BsLightbox
        ref="lightbox3"
        v-model:open="showGallery4"
        :items="galleryItems4"
        :show-item-title="false"
      />
    </div>

    <h2 class="mt-5">Custom Toolbar Buttons</h2>
    <div class="card bg-gray-200 border-0 py-4 px-3">
      <div class="row justify-center">
        <div class="col-lg-8 col-xl-6">
          <div class="row g-4 row-cols-2 row-cols-md-4">
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox2?.openAt(0)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=255"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox2?.openAt(1)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=256"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox2?.openAt(2)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=257"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col">
              <div
                class="overflow-hidden h-full w-full rounded md-link shadow"
                @click="lightbox2?.openAt(3)"
              >
                <img
                  alt="First Image"
                  class="h-full w-full rounded"
                  src="https://unsplash.it/600.jpg?image=259"
                  style="object-fit: cover"
                />
              </div>
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

    <h2 class="mt-5">Single Image</h2>
    <div class="card bg-gray-200 border-0 py-4 px-3">
      <div class="flex justify-center">
        <BsAvatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=251"
          rounded
          size="132"
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

<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const toolbarButtons = { download: true, rotate: true, menubar: true, close: true };
const lightbox1 = ref<BsLightboxInstance>();
const lightbox2 = ref<BsLightboxInstance>();
const lightbox3 = ref<BsLightboxInstance>();
const showGallery1 = ref(false);
const showGallery2 = ref(false);
const showGallery3 = ref(false);
const showGallery4 = ref(false);
const galleryItems1 = [
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
const galleryItems2 = [
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
const galleryItems3 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'Your image title',
    type: 'image',
  },
];
const galleryItems4 = [
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
    title: 'Third gallery item',
    type: 'image',
  },
];
</script>
