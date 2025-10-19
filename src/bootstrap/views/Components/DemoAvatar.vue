<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-3">
      <div class="d-flex justify-content-center">
        <BsAvatar class="bg-deep-orange darken-3 text-white m-2" icon="people_alt" />
        <BsAvatar class="bg-teal text-white m-2" icon="folder_shared" rounded />
        <BsAvatar
          border="2px"
          border-color="pink"
          circle
          class="bg-teal text-white m-2"
          icon="account_circle"
        />
        <BsAvatar
          circle
          class="m-2 bg-teal"
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <BsAvatar
          border="2px"
          border-color="red"
          circle
          class="m-2 bg-teal"
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <BsAvatar circle class="bg-grey-600 text-white m-2" style="font-size: 150%" text="BS" />
        <BsAvatar
          border="2px"
          border-color="pink"
          circle
          class="bg-grey-600 text-white m-2"
          style="font-size: 150%"
          text="BS"
        />
        <BsAvatar circle class="bg-dark-blue text-white m-2">
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
            circle
            class="bg-deep-orange darken-3 text-white"
            icon="sync"
            size="56"
          />
          <BsSwitch
            v-model="isSpin"
            :value="true"
            checked-icon
            class="mt-2 align-self-start"
            color="primary-color-dark"
            inset-outlined
          >
            Spin {{ isSpin ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
        <div class="d-flex flex-column align-items-center m-2" style="width: 160px">
          <BsAvatar
            v-model:icon-pulse="isPulse"
            circle
            class="bg-teal text-white"
            icon="refresh"
            size="56"
          />
          <BsSwitch
            v-model="isPulse"
            :value="true"
            checked-icon
            class="mt-2 align-self-start"
            color="primary-color-dark"
            inset-outlined
          >
            Pulse {{ isPulse ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconThreeCircle } from '@shares/sharedApi';

const isSpin = ref(false);
const isPulse = ref(false);
</script>
