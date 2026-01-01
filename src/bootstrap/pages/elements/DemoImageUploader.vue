<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-3">
      <BsCard>
        <BsCardBody>
          <BsImageUploader
            ref="uploader"
            accept-types="image/jpeg, image/png"
            limit="0.2"
            @error="(error: TUploadError) => $notification.error(error.message)"
          />
          <ul class="mt-3 mb-0">
            <li>Valid image types: *.jpg, *.jpeg, *.png</li>
            <li>Maximum image filesize: 200KB</li>
          </ul>
        </BsCardBody>
        <BsCardFooter>
          <BsButton
            :disabled="!btnEnabled"
            color="primary"
            @click="btnEnabled && doUpload($notification)"
          >
            Upload
          </BsButton>
        </BsCardFooter>
        <BsMaskLoader
          :show="isBusy"
          overlay-opacity="0.3"
          spinner-diameter="60"
          spinner-thickness="8"
        />
      </BsCard>
    </DemoBlock>
    <BsNotification />
  </div>
</template>

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
