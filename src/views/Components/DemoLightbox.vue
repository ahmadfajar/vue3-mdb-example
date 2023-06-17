<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <div class="card bg-grey-200 border-0 py-4 px-3">
      <div class="row justify-content-center">
        <div class="col-md-8 col-xl-6">
          <div class="row g-4 row-cols-1 row-cols-sm-3">
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=254"
                size="100%"
                rounded
                @click="lightbox1?.openAt(0)"/>
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=255"
                size="100%"
                rounded
                @click="lightbox1?.openAt(1)"/>
            </div>
            <div class="col">
              <BsAvatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=256"
                size="100%"
                rounded
                @click="lightbox1?.openAt(2)"/>
            </div>
          </div>
        </div>
      </div>
      <bs-lightbox
        ref="lightbox1"
        v-model:open="showGallery1"
        :items="galleryItems1"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, ref } from 'vue'

const lightbox1 = ref<ComponentPublicInstance>()
const showGallery1 = ref(false)
const galleryItems1 = [{
  thumbnail: 'https://unsplash.it/200.jpg?image=251',
  imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
  title: 'First image title'
}, {
  thumbnail: 'https://unsplash.it/200.jpg?image=252',
  imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
  title: 'Second image title'
}, {
  thumbnail: 'https://unsplash.it/200.jpg?image=253',
  imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
  title: 'Third image title'
}]
</script>
