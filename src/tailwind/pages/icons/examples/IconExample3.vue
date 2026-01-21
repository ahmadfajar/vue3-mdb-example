<script setup lang="ts">
const iconSize = 36;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Flip</div>
      <div class="flex flex-wrap md-gap-3">
        <div
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :size="iconSize" flip="vertical" icon="shopping_cart_filled" />
        </div>
        <div
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :size="iconSize" flip="horizontal" icon="shopping_cart_filled" />
        </div>
        <div
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :size="iconSize" flip="both" icon="shopping_cart_filled" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Rotate</div>
      <div class="flex flex-wrap md-gap-3">
        <div
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :size="iconSize" icon="navigation_filled" rotate="90" />
        </div>
        <div
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :size="iconSize" icon="navigation_filled" rotate="180" />
        </div>
        <div
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :size="iconSize" icon="navigation_filled" rotate="270" />
        </div>
      </div>
    </div>
  </div>
</template>
