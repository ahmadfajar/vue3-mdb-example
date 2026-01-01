<script setup lang="ts">
import { ref } from 'vue';

const radio1 = ref();
</script>

<template>
  <div class="col-form-label">Select an option:</div>
  <div v-for="idx in 3" :key="'option-' + idx">
    <BsRadio v-model="radio1" :value="idx" {$colorName}> Option {{ idx }} </BsRadio>
  </div>
  <div class="mt-4">
    Value: <b>{{ radio1 }}</b>
  </div>
</template>
