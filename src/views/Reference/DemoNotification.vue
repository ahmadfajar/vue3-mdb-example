<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="d-flex justify-content-center">
        <BsButton color="indigo" @click="showDefaultNotification()"> Show Notification </BsButton>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Display Placement</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-left'
              })
            "
          >
            Top Left
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-center'
              })
            "
          >
            Top Center
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-right'
              })
            "
          >
            Top Right
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-full-width'
              })
            "
          >
            Top FullWidth
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-left'
              })
            "
          >
            Bottom Left
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-center'
              })
            "
          >
            Bottom Center
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-right'
              })
            "
          >
            Bottom Right
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="indigo"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-full-width'
              })
            "
          >
            Bottom FullWidth
          </BsButton>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Notification With ProgressBar</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col d-flex justify-content-center">
          <BsButton
            color="secondary"
            @click="
              provider?.add({
                message: 'Example notification message.',
                title: 'Information',
                progressBar: true
              })
            "
          >
            Default Notification
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="info"
            @click="provider?.info({ message: 'Example info message.', progressBar: true }, 'Info')"
          >
            Info Notification
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="success"
            @click="
              provider?.success(
                { message: 'Example success message.', progressBar: true },
                'Success'
              )
            "
          >
            Success Notification
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="warning"
            @click="
              provider?.warning(
                { message: 'Example warning message.', progressBar: true },
                'Warning'
              )
            "
          >
            Warning Notification
          </BsButton>
        </div>
        <div class="col d-flex justify-content-center">
          <BsButton
            color="danger"
            @click="
              provider?.error({ message: 'Example error message.', progressBar: true }, 'Error')
            "
          >
            Error Notification
          </BsButton>
        </div>
      </div>
    </DemoBlock>

    <BsNotification />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, shallowRef } from 'vue';
import { useVueMdbNotification } from 'vue-mdbootstrap';
import type { INotificationProvider } from 'vue-mdbootstrap';

const provider = shallowRef<INotificationProvider>();

onMounted(() => {
  provider.value = useVueMdbNotification();
});

function showDefaultNotification() {
  provider.value?.add('I am notification message.');
}
</script>
