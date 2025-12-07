<script setup lang="ts"></script>

<template>
  <div class="row row-cols-2 gx-5">
    <div class="col flex flex-col items-center">
      <div class="font-weight-semibold mb-3">Spin</div>
      <div class="size-18 flex items-center justify-center bg-gray-200 rounded">
        <BsIcon icon="refresh" spin size="42" />
      </div>
    </div>
    <div class="col flex flex-col items-center">
      <div class="font-weight-semibold mb-3">Pulse</div>
      <div class="size-18 flex items-center justify-center bg-gray-200 rounded">
        <BsIcon icon="settings" pulse size="42" />
      </div>
    </div>
  </div>
</template>
