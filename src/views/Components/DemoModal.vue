<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton
          color="indigo"
          @click="dialog1 = true">
          Open Dialog
        </BsButton>
      </div>
      <BsModal
        v-model:open="dialog1"
        title="Dialog Title"
        max-width="85%">
        <div class="fw-semibold">
          Hello, I am a modal dialog.
        </div>
        <div>You can click outside area or press ESC to close me.</div>

        <template #footer>
          <BsButton
            outlined
            color="primary"
            @click="dialog1 = false">
            Cancel
          </BsButton>
          <BsButton
            color="primary"
            @click="dialog1 = false">
            OK
          </BsButton>
        </template>
      </BsModal>
    </DemoBlock>
    <h2 class="mt-5">
      True Modal Dialog
    </h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton
          color="indigo"
          @click="dialog2 = true">
          Open Dialog
        </BsButton>
      </div>
      <BsModal
        v-model:open="dialog2"
        title="Modal Dialog"
        max-width="85%"
        :overlay-click-close="false">
        You can only close me by clicking the button below or press ESC.

        <template #footer>
          <BsButton
            outlined
            color="primary"
            @click="dialog2 = false">
            Cancel
          </BsButton>
          <BsButton
            color="primary"
            @click="dialog2 = false">
            OK
          </BsButton>
        </template>
      </BsModal>
    </DemoBlock>
    <h2 class="mt-5">
      Scrolling Long Content
    </h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton
          color="indigo"
          @click="dialog3 = true">
          Open Dialog
        </BsButton>
      </div>
      <BsModal
        v-model:open="dialog3"
        title="Long Content Dialog"
        :max-width="useBreakpointMax('lg') ? '95%' : '80%'"
        :footer-class="['border-top', 'pt-3']"
        :body-class="['border-top', 'pt-3']"
        scrollable>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p class="mb-0">
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>

        <template #footer>
          <BsButton
            outlined
            color="primary"
            @click="dialog3 = false">
            Cancel
          </BsButton>
          <BsButton
            color="primary"
            @click="dialog3 = false">
            OK
          </BsButton>
        </template>
      </BsModal>
    </DemoBlock>
    <h2 class="mt-5">
      Hiding Backdrop Overlay
    </h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton
          color="indigo"
          @click="dialog4 = true">
          Open Dialog
        </BsButton>
      </div>
      <BsModal
        v-model:open="dialog4"
        title="Modal Dialog"
        max-width="85%"
        :overlay="false">
        You can close me by clicking the outside area or press ESC.

        <template #footer>
          <BsButton
            outlined
            color="primary"
            @click="dialog4 = false">
            Cancel
          </BsButton>
          <BsButton
            color="primary"
            @click="dialog4 = false">
            OK
          </BsButton>
        </template>
      </BsModal>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useBreakpointMax } from '@/sharedApi'

const dialog1 = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)

</script>
