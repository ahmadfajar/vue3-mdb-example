<script setup lang="ts"></script>

<template>
  <BsCard {$classes} {$shadow}>
    {$cardHeader}
    <BsCardBody>
      <BsCardContent type="title"> Card Title </BsCardContent>
      <BsCardContent class="mb-3" type="subtitle"> Some quick subtitle </BsCardContent>
      <BsCardContent>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BsCardContent>
    </BsCardBody>
    {$cardFooter}
  </BsCard>
</template>
