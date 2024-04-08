<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-3">
      <div class="d-flex justify-content-center">
        <BsAvatar class="bg-deep-orange darken-3 text-white m-2" icon="people_alt" />
        <BsAvatar class="bg-teal text-white m-2" icon="folder_shared" rounded />
        <BsAvatar
          class="bg-teal text-white m-2"
          icon="account_circle"
          border="2px"
          border-color="pink"
          circle
        />
        <BsAvatar
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          class="m-2 bg-teal"
          circle
        />
        <BsAvatar
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
          border="2px"
          border-color="red"
          class="m-2 bg-teal"
          circle
        />
        <BsAvatar class="bg-grey-600 text-white m-2" style="font-size: 150%" text="BS" circle />
        <BsAvatar
          class="bg-grey-600 text-white m-2"
          border="2px"
          border-color="pink"
          style="font-size: 150%"
          text="BS"
          circle
        />
        <BsAvatar class="bg-dark-blue text-white m-2" circle>
          <icon-three-circle height="30" width="30" />
        </BsAvatar>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Animation</h2>
    <DemoBlock class="mt-3">
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column align-items-center m-2" style="width: 150px">
          <BsAvatar
            v-model:icon-spin="isSpin"
            class="bg-deep-orange darken-3 text-white"
            icon="cached"
            size="56"
            circle
          />
          <BsSwitch
            v-model="isSpin"
            :value="true"
            color="primary-color-dark"
            class="mt-2 align-self-start"
            checked-icon
            inset-outlined
          >
            Spin {{ isSpin ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
        <div class="d-flex flex-column align-items-center m-2" style="width: 150px">
          <BsAvatar
            v-model:icon-pulse="isPulse"
            class="bg-teal text-white"
            icon="rotate_right"
            size="56"
            circle
          />
          <BsSwitch
            v-model="isPulse"
            :value="true"
            color="primary-color-dark"
            class="mt-2 align-self-start"
            checked-icon
            inset-outlined
          >
            Pulse {{ isPulse ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IconThreeCircle } from '@/sharedApi';

const isSpin = ref(false);
const isPulse = ref(false);
</script>
