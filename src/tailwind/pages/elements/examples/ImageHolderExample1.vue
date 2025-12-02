<script setup lang="ts"></script>

<template>
  <div class="row row-cols-2 gy-3">
    <div class="col">
      <BsImageHolder placeholder-text="Placeholder Text" />
    </div>
    <div class="col">
      <BsImageHolder bg-color="#1976d2" placeholder-text="BgColor: #1976d2" />
    </div>
    <div class="col">
      <BsImageHolder bg-color="#006064" placeholder-text="BgColor: #006064" rounded />
    </div>
    <div class="col">
      <BsImageHolder
        bg-color="#f57f17"
        placeholder-text="BgColor: #f57f17"
        rounded
        text-color="#ffffff"
      />
    </div>
  </div>
</template>
