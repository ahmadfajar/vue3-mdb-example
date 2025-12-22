<script setup lang="ts">
import { ref } from 'vue';

const fieldValue = ref<string>();
</script>

<template>
  <BsTextArea
    v-model="fieldValue"
    {$clear_button}
    {$icon_placement}
    {$variants}
    action-icon-variant="filled"
    autocomplete="address"
    floating-label
  >
    <label>Address</label>
  </BsTextArea>
</template>
