<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
</script>

<template>
  <BsSearchField v-model="fieldValue" class="mx-auto" style="max-width: 480px" />
</template>
