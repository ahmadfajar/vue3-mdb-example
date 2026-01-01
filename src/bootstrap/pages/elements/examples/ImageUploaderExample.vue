<script setup lang="ts">
import type { AxiosError, AxiosResponse } from 'axios';
import { computed, ref, unref } from 'vue';
import type { BsImageUploaderInstance, INotificationProvider, TUploadError } from 'vue-mdbootstrap';

const uploader = ref<BsImageUploaderInstance>();
const isBusy = ref(false);
const btnEnabled = computed(() => unref(uploader)?.fileBag.filename != null);

async function doUpload(notification: INotificationProvider) {
  try {
    isBusy.value = true;
    const response = await unref(uploader)?.upload('https://httpbin.io/post', 'file', {
      gallery: 'Photo Gallery',
      owner: 'John Doe',
    });

    if (response?.status === 200) {
      notification.success('Upload success.');
    } else {
      notification.error('Upload failed.');
    }
  } catch (error) {
    notification.error((error as AxiosResponse).data?.message || (error as AxiosError).message);
  } finally {
    isBusy.value = false;
  }
}
</script>

<template>
  <BsImageUploader
    ref="uploader"
    accept-types="image/jpeg, image/png"
    limit="0.4"
    @error="(error: TUploadError) => $notification.error(error.message)"
  />
  <ul class="list-disc mt-3 ms-4">
    <li class="text-sm">Valid image types: *.jpg, *.jpeg, *.png</li>
    <li class="text-sm">Maximum image filesize: 400KB</li>
  </ul>
  <BsDivider class="my-4!" />
  <BsButton :disabled="!btnEnabled" color="primary" @click="btnEnabled && doUpload($notification)">
    Upload
  </BsButton>
  <BsMaskLoader :show="isBusy" overlay-opacity="0.3" spinner-diameter="60" spinner-thickness="8" />
  <BsNotification />
</template>
