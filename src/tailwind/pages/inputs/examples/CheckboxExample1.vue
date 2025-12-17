<script setup lang="ts">
import { ref } from 'vue';

const checkbox1 = ref();
</script>

<template>
  <BsCheckbox v-model="checkbox1" {$colorName} value="accepted">
    Accept the terms and use
  </BsCheckbox>
</template>
