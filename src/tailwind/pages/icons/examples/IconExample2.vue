<script setup lang="ts">
const icons = ['home', 'lock', 'delete', 'shopping_cart'];
const iconSize = 36;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Outlined</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :icon="name" :size="iconSize" class="text-purple-600" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Outlined Filled</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="size-16 flex items-center justify-center bg-gray-200 dark:bg-neutral-800 rounded"
        >
          <BsIcon :icon="`${name}_outlined_filled`" :size="iconSize" class="text-primary" />
        </div>
      </div>
    </div>
  </div>
</template>
