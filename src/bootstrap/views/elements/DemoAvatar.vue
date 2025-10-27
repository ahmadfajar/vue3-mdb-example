<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-3">
      <div class="flex justify-center md-gap-4">
        <BsAvatar class="bg-deep-orange darken-3 text-white" icon="people_alt" />
        <BsAvatar class="bg-teal text-white" icon="folder_shared" rounded />
        <BsAvatar
          border="2px"
          border-color="pink"
          circle
          class="bg-teal text-white"
          icon="account_circle"
        />
        <BsAvatar circle class="bg-teal" img-src="https://ahmadfajar.github.io/img/kitty-1.jpg" />
        <BsAvatar
          border="2px"
          border-color="red"
          circle
          class="bg-teal"
          img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
        />
        <BsAvatar circle class="bg-gray-700 text-white" style="font-size: 150%" text="BS" />
        <BsAvatar
          border="2px"
          border-color="pink"
          circle
          class="bg-gray-700 text-white"
          style="font-size: 150%"
          text="BS"
        />
        <BsAvatar circle class="bg-dark-blue text-white">
          <icon-three-circle height="30" width="30" />
        </BsAvatar>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Animation</h2>
    <DemoBlock class="mt-3">
      <div class="flex justify-center md-gap-5">
        <div class="flex flex-column items-center" style="width: 150px">
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
            color="primary"
            inset-outlined
          >
            Spin {{ isSpin ? 'OFF' : 'ON' }}
          </BsSwitch>
        </div>
        <div class="flex flex-column items-center" style="width: 160px">
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

<script setup lang="ts">
import { ref } from 'vue';
import { IconThreeCircle } from '@shares/sharedApi.ts';

const isSpin = ref(false);
const isPulse = ref(false);
</script>
