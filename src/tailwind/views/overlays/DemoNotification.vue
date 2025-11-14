<script setup lang="ts">
import type { INotificationProvider } from 'vue-mdbootstrap';

function showDefaultNotification(notification: INotificationProvider) {
  notification.add('I am notification message.');
}
</script>

<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="flex justify-center">
        <BsButton @click="showDefaultNotification($notification)"> Show Notification </BsButton>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Display Placement</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-left',
              })
            "
          >
            Top Left
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-center',
              })
            "
          >
            Top Center
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-right',
              })
            "
          >
            Top Right
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'top-full-width',
              })
            "
          >
            Top Full Width
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-left',
              })
            "
          >
            Bottom Left
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-center',
              })
            "
          >
            Bottom Center
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-right',
              })
            "
          >
            Bottom Right
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                position: 'bottom-full-width',
              })
            "
          >
            Bottom Full Width
          </BsButton>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Notification With ProgressBar</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col flex justify-center">
          <BsButton
            color="secondary"
            @click="
              $notification.add({
                message: 'Example notification message.',
                title: 'Information',
                progressBar: true,
              })
            "
          >
            Default Notification
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            color="info"
            @click="
              $notification.info({
                title: 'Info',
                message: 'Example info message.',
                progressBar: true,
              })
            "
          >
            Info Notification
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            color="success"
            @click="
              $notification.success(
                { message: 'Example success message.', progressBar: true },
                'Success'
              )
            "
          >
            Success Notification
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            color="warning"
            @click="
              $notification.warning(
                { message: 'Example warning message.', progressBar: true },
                'Warning'
              )
            "
          >
            Warning Notification
          </BsButton>
        </div>
        <div class="col flex justify-center">
          <BsButton
            color="danger"
            @click="
              $notification.error({ message: 'Example error message.', progressBar: true }, 'Error')
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
