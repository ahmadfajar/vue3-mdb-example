<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
</script>

<template>
  <BsDateTimeField
    v-model="fieldValue"
    clear-button
    display-format="DDD"
    filled
    floating-label
    header-color="warning"
    picker-button="light"
    picker-selected-color="warning"
    surface-cls="bg-neutral-800 text-light"
  >
    <label>Field Label</label>
  </BsDateTimeField>
</template>
