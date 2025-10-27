<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <BsDivider />
    <div class="flex justify-center mt-4">
      <BsRipple
        class="flex justify-center items-center text-bg-secondary border rounded me-3"
        style="max-width: 150px; height: 150px"
      >
        <b>Click Me</b>
      </BsRipple>
      <BsRipple
        class="flex justify-center items-center text-bg-primary border rounded me-3"
        style="max-width: 150px; height: 150px"
      >
        <b>Click Me</b>
      </BsRipple>
      <BsRipple
        centered
        class="flex justify-center items-center text-bg-success border rounded"
        style="max-width: 150px; height: 150px"
      >
        <b>Click Me</b>
      </BsRipple>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
