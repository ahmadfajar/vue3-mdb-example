<script setup lang="ts">
import { ref } from 'vue';

const showLoader = ref(false);
</script>

<template>
  <BsCard class="overflow-hidden" shadow>
    <BsCardBody>
      <BsCardContent type="title">{$types_name} Loader</BsCardContent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.
      </p>
    </BsCardBody>
    <BsMaskLoader 
      v-model:show="showLoader" 
      overlay-color="#064E40"
      {$spinner_color}
      spinner-diameter="60" 
      {$spinner_thickness} {$types} />
  </BsCard>
  <BsButton class="mt-3" @click="showLoader = !showLoader">
    Toggle Loader
  </BsButton>
</template>
