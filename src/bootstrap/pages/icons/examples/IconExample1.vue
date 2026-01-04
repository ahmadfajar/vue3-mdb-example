<script setup lang="ts">
const icons = ['home', 'lock', 'delete', 'shopping_cart'];
const iconSize = 36;
</script>

<template>
  <div class="w-full row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Outlined</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsIcon :icon="name" :size="iconSize" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Rounded</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsIcon :icon="`${name}_rounded`" :size="iconSize" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Sharp</div>
      <div class="flex flex-wrap md-gap-3">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsIcon :icon="`${name}_sharp`" :size="iconSize" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Outlined Filled</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsIcon :icon="`${name}_outlined_filled`" :size="iconSize" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Rounded Filled</div>
      <div class="flex flex-wrap md-gap-3 mb-4">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsIcon :icon="`${name}_rounded_filled`" :size="iconSize" />
        </div>
      </div>
      <div class="font-weight-semibold mb-3">Sharp Filled</div>
      <div class="flex flex-wrap md-gap-3">
        <div
          v-for="name in icons"
          :key="name"
          class="flex items-center justify-center bg-gray-200 rounded"
          style="width: 64px; height: 64px"
        >
          <BsIcon :icon="`${name}_sharp_filled`" :size="iconSize" />
        </div>
      </div>
    </div>
  </div>
</template>
