<script setup lang="ts">
import { ref } from 'vue';

const picker1 = ref<string>();
</script>

<template>
  <BsDatePicker v-model="picker1" class="md-shadow" />
</template>
