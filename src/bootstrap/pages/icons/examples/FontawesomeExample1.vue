<script setup lang="ts">
const icons = ['house', 'circle-user', 'envelope', 'gift'];
const regulars = ['house', 'circle-user', 'envelope', 'thumbs-up'];
const brands = ['atlassian', 'bitcoin', 'facebook', 'github'];
const iconSize = 36;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Solid</div>
      <div class="flex flex-wrap md-gap-3 mb-3">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Regular</div>
      <div class="flex flex-wrap md-gap-3">
        <div
          v-for="name in regulars"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" variant="regular" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Brands</div>
      <div class="flex flex-wrap md-gap-3 mb-3">
        <div
          v-for="name in brands"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" variant="brands" />
        </div>
      </div>
    </div>
  </div>
</template>
