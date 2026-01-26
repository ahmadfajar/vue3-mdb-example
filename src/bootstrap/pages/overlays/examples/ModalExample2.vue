<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false);
</script>

<template>
  <BsButton @click="showDialog = true">Open Dialog</BsButton>
  <BsModal
    v-model:open="showDialog"
    :overlay-click-close="false"
    max-width="85%"
    title="Modal Dialog Title"
  >
    You can only close me by clicking the button below or press ESC.
    <template #footer>
      <BsButton color="primary" outlined @click="showDialog = false">Cancel</BsButton>
      <BsButton color="primary" style="width: 103px" @click="showDialog = false">OK</BsButton>
    </template>
  </BsModal>
</template>
