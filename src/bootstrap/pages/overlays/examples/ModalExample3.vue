<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpointMax } from 'vue-mdbootstrap';

const showDialog = ref(false);
</script>

<template>
  <BsButton @click="showDialog = true">Open Dialog</BsButton>
  <BsModal
    v-model:open="showDialog"
    :body-class="['border-t', 'pt-3']"
    :footer-class="['border-t', 'pt-3']"
    :max-width="useBreakpointMax('lg') ? '95%' : '85%'"
    scrollable
    title="Long Content Dialog"
  >
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
    <p class="mt-3">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p class="mt-3">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <p class="mt-3">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
    <p class="mt-3">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p class="mt-3">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <p class="mt-3">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
    <p class="mt-3">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p class="mt-3">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <p class="mt-3">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
    <p class="mt-3">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p class="mt-3">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <p class="mt-3">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
    <p class="mt-3">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p class="mt-3">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <p class="mt-3">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
    <p class="mt-3">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p class="mt-3">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <template #footer>
      <BsButton color="primary" outlined @click="showDialog = false">Cancel</BsButton>
      <BsButton color="primary" style="width: 103px" @click="showDialog = false">OK</BsButton>
    </template>
  </BsModal>
</template>
