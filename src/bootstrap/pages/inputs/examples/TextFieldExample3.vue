<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
</script>

<template>
  <BsTextField
    v-model="fieldValue"
    {$clear_button}
    {$icon_placement}
    {$variants}
    action-icon-variant="filled"
    datalist="my-datalist"
    floating-label
  >
    <label>Select Size</label>
  </BsTextField>
  <datalist id="my-datalist">
    <option v-for="size in sizes" :key="size">
      {{ size }}
    </option>
  </datalist>
</template>
