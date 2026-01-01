<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
</script>

<template>
  <BsSearchField v-model="fieldValue" class="max-w-120 mx-auto" />
</template>
