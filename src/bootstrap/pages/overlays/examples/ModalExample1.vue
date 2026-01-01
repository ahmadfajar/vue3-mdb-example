<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false);
</script>

<template>
  <BsButton @click="showDialog = true">Open Dialog</BsButton>
  <BsModal v-model:open="showDialog" max-width="85%" title="Dialog Title">
    <div class="font-weight-medium">Hello, I am a modal dialog.</div>
    <div>You can click outside area or press ESC to close me.</div>

    <template #footer>
      <BsButton color="primary" style="width: 103px" @click="showDialog = false">OK</BsButton>
      <BsButton color="primary" outlined @click="showDialog = false">Cancel</BsButton>
    </template>
  </BsModal>
</template>
