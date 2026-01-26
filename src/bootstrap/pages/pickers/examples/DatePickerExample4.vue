<script setup lang="ts">
import { ref } from 'vue';

const picker1 = ref<string>();
</script>

<template>
  <BsDatePicker
    v-model="picker1"
    button-color="light"
    class="md-shadow-3"
    header-color="warning"
    mode="datetime"
    selected-color="warning"
    surface-class="bg-neutral-800 text-light"
  />
</template>
