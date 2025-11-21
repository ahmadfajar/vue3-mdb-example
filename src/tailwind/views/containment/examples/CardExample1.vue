<script setup lang="ts"></script>

<template>
  <BsCard {$classes} {$shadow}>
    <BsCardBody>
      <BsCardContent type="title"> Card Title </BsCardContent>
      <BsCardContent class="mb-3" type="subtitle"> Some quick subtitle </BsCardContent>
      <BsCardContent>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BsCardContent>
      <BsCardContent class="mt-2">
        <small class="text-subtle-secondary">Last updated 3 mins ago</small>
      </BsCardContent>
      <div class="flex md-gap-x-1 mt-4">
        <BsButton color="primary">Action 1</BsButton>
        <BsButton color="primary" outlined>Action 2</BsButton>
      </div>
    </BsCardBody>
  </BsCard>
</template>
