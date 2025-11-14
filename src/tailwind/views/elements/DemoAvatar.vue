<script setup lang="ts">
import { ref } from 'vue';
import { IconThreeCircle } from '@shares/sharedApi.ts';

const isSpin = ref(false);
const isPulse = ref(false);
</script>

<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-3">
      <div class="flex justify-center md-gap-4">
        <BsAvatar class="bg-orange-500 text-light" icon="people_alt" />
        <BsAvatar class="bg-teal-700 text-light" icon="folder_shared" rounded />
        <BsAvatar
          border="2px"
          circle
          class="bg-teal-700 border-pink-700 text-light"
          icon="account_circle"
        />
        <BsAvatar
          circle
          class="bg-teal-600"
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <BsAvatar
          border="2px"
          circle
          class="bg-teal-700 border-red-700"
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <BsAvatar circle class="bg-gray-700 text-light text-xl" text="BS" />
        <BsAvatar
          border="2px"
          circle
          class="bg-gray-700 border-pink-700 text-light text-xl"
          text="BS"
        />
        <BsAvatar circle class="bg-blue-800 text-light">
          <icon-three-circle height="30" width="30" />
        </BsAvatar>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Animation</h2>
    <DemoBlock class="mt-3">
      <div class="flex justify-center md-gap-5">
        <div class="flex flex-col items-start w-38">
          <BsAvatar
            v-model:icon-spin="isSpin"
            circle
            class="bg-orange-700 text-white self-center"
            icon="sync"
            size="56"
          />
          <BsSwitch
            v-model="isSpin"
            :value="true"
            checked-icon
            class="mt-2 align-self-start"
            color="primary"
            inset-outlined
          >
            Spin {{ isSpin ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
        <div class="flex flex-col items-start w-40">
          <BsAvatar
            v-model:icon-pulse="isPulse"
            circle
            class="bg-teal-700 text-light self-center"
            icon="refresh"
            size="56"
          />
          <BsSwitch
            v-model="isPulse"
            :value="true"
            checked-icon
            class="mt-2 align-self-start"
            color="primary"
            inset-outlined
          >
            Pulse {{ isPulse ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>
