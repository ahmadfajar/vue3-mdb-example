<script setup lang="ts">
import { ref } from 'vue';

const picker1 = ref<string>();
</script>

<template>
  <BsDatePicker v-model="picker1" {$modes} class="md-shadow" />
  <div class="mt-3">
    Output value: <span class="font-weight-semibold">{{ picker1 }}</span>
  </div>
</template>
