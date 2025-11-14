<template>
  <div class="docs-body">
    <h2>Basic Examples</h2>
    <BsDivider />
    <div class="row row-cols-2 row-cols-sm-3 mt-2 gy-3">
      <div class="col">
        <BsRipple
          class="flex justify-center items-center text-bg-secondary border rounded-lg mx-auto"
          style="max-width: 150px; height: 150px"
        >
          <b>Click Me</b>
        </BsRipple>
      </div>
      <div class="col">
        <BsRipple
          class="flex justify-center items-center text-bg-primary border rounded-lg mx-auto"
          style="max-width: 150px; height: 150px"
        >
          <b>Click Me</b>
        </BsRipple>
      </div>
      <div class="col">
        <BsRipple
          centered
          class="flex justify-center items-center text-bg-success border rounded-lg mx-auto"
          style="max-width: 150px; height: 150px"
        >
          <b>Click Me</b>
        </BsRipple>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
