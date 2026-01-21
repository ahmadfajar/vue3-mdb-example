<script setup lang="ts">
const icons = ['house', 'circle-user', 'envelope', 'gift'];
const brands = ['atlassian', 'bitcoin', 'facebook', 'github'];
const iconSize = 36;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Solid</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Light</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" variant="light" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Regular</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" variant="regular" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Brands</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in brands"
          :key="name"
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsFontawesomeIcon :icon="name" :size="iconSize" variant="brands" />
        </div>
      </div>
    </div>
  </div>
</template>
