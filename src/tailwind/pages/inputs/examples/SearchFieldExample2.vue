<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
</script>

<template>
  <div class="w-full bg-indigo-600 p-6 rounded">
    <BsSearchField v-model="fieldValue" class="max-w-120 mx-auto" dark-mode />
  </div>
</template>
