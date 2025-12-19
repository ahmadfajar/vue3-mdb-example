<script setup lang="ts">
import { ref } from 'vue';

const switch1 = ref<string>();
</script>

<template>
  <BsSwitch v-model="switch1" {$checked_icon} {$colorName} {$states} {$variants} value="on">
    Power meter: <b>{{ switch1 ?? 'off' }}</b>
  </BsSwitch>
</template>
