<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
</script>

<template>
  <div class="w-full bg-indigo p-4 rounded">
    <BsSearchField v-model="fieldValue" class="mx-auto" dark-mode style="max-width: 480px" />
  </div>
</template>
