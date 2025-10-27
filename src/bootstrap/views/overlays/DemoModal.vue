<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton color="indigo" @click="dialog1 = true">Open Dialog</BsButton>
      </div>
      <BsModal v-model:open="dialog1" max-width="85%" title="Dialog Title">
        <div class="fw-semibold">Hello, I am a modal dialog.</div>
        <div>You can click outside area or press ESC to close me.</div>

        <template #footer>
          <BsButton color="primary" style="width: 103px" @click="dialog1 = false">OK</BsButton>
          <BsButton color="primary" outlined @click="dialog1 = false">Cancel</BsButton>
        </template>
      </BsModal>
    </DemoBlock>
    <h2 class="mt-5">True Modal Dialog</h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton color="indigo" @click="dialog2 = true">Open Dialog</BsButton>
      </div>
      <BsModal
        v-model:open="dialog2"
        :overlay-click-close="false"
        max-width="85%"
        title="Modal Dialog"
      >
        You can only close me by clicking the button below or press ESC.

        <template #footer>
          <BsButton color="primary" style="width: 103px" @click="dialog2 = false">OK</BsButton>
          <BsButton color="primary" outlined @click="dialog2 = false">Cancel</BsButton>
        </template>
      </BsModal>
    </DemoBlock>
    <h2 class="mt-5">Scrolling Long Content</h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton color="indigo" @click="dialog3 = true">Open Dialog</BsButton>
      </div>
      <BsModal
        v-model:open="dialog3"
        :body-class="['border-top', 'pt-3']"
        :footer-class="['border-top', 'pt-3']"
        :max-width="useBreakpointMax('lg') ? '95%' : '80%'"
        scrollable
        title="Long Content Dialog"
      >
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p class="mb-0">
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>

        <template #footer>
          <BsButton color="primary" style="width: 103px" @click="dialog3 = false">OK</BsButton>
          <BsButton color="primary" outlined @click="dialog3 = false">Cancel</BsButton>
        </template>
      </BsModal>
    </DemoBlock>
    <h2 class="mt-5">Hiding Backdrop Overlay</h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton color="indigo" @click="dialog4 = true">Open Dialog</BsButton>
      </div>
      <BsModal v-model:open="dialog4" :overlay="false" max-width="85%" title="Modal Dialog">
        You can close me by clicking the outside area or press ESC.

        <template #footer>
          <BsButton color="primary" style="width: 103px" @click="dialog4 = false">OK</BsButton>
          <BsButton color="primary" outlined @click="dialog4 = false">Cancel</BsButton>
        </template>
      </BsModal>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpointMax } from 'vue-mdbootstrap';

const dialog1 = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
const dialog4 = ref(false);
</script>
