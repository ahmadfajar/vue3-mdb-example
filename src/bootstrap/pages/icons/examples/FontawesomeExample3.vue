<script setup lang="ts">
const iconSize = 36;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 gy-3 gx-5">
    <div class="col">
      <div class="font-weight-semibold mb-3">Flip</div>
      <div class="flex flex-wrap md-gap-3">
        <div class="size-16 flex items-center justify-center bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" flip="vertical" icon="cart-shopping" />
        </div>
        <div class="size-16 flex items-center justify-center bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" flip="horizontal" icon="cart-shopping" />
        </div>
        <div class="size-16 flex items-center justify-center bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" flip="both" icon="cart-shopping" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="font-weight-semibold mb-3">Rotate</div>
      <div class="flex flex-wrap md-gap-3">
        <div class="size-16 flex items-center justify-center bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="plane" rotate="90" />
        </div>
        <div class="size-16 flex items-center justify-center bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="plane" rotate="180" />
        </div>
        <div class="size-16 flex items-center justify-center bg-gray-200 rounded">
          <BsFontawesomeIcon :size="iconSize" icon="plane" rotate="270" />
        </div>
      </div>
    </div>
  </div>
</template>
