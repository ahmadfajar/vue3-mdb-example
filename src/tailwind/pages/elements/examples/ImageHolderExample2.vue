<script setup lang="ts"></script>

<template>
  <div class="row row-cols-2 gy-3">
    <div class="col flex justify-center">
      <BsImageHolder bg-color="#8e24aa" circle placeholder-text="BgColor: #8e24aa" size="200px" />
    </div>
    <div class="col flex justify-center">
      <BsImageHolder bg-color="#1565c0" circle placeholder-text="BgColor: #1565c0" height="200px" />
    </div>
    <div class="col flex justify-center">
      <BsImageHolder bg-color="#d32f2f" circle placeholder-text="BgColor: #d32f2f" width="150" />
    </div>
    <div class="col flex justify-center">
      <BsImageHolder
        bg-color="#f57f17"
        circle
        placeholder-text="BgColor: #f57f17"
        text-color="#ffffff"
      />
    </div>
  </div>
</template>
