<script setup lang="ts">
import { ref } from 'vue';

const show1 = ref(false);
const enableMessage = ref(false);
const enableHints = ref(false);
</script>

<template>
  <div class="flex justify-center">
    <BsDropdownMenu v-model:open="show1" :content-click-close="false" space="4">
      <BsButton dropdown-toggle>Dropdown</BsButton>
      <template #content>
        <BsListView>
          <BsListTile>
            <BsListTileLeading img-src="https://ahmadfajar.github.io/img/2.jpg" rounded />
            <BsListTileContent>
              <BsListTileTitle class="font-weight-bold"> John Doe </BsListTileTitle>
              <BsListTileSubtitle>Going further more...</BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
        </BsListView>
        <BsDivider />
        <div class="flex flex-col md-gap-y-3 px-3 py-4">
          <BsSwitch v-model="enableMessage" :value="true"> Enable Messages </BsSwitch>
          <BsSwitch v-model="enableHints" :value="true">Enable Hints</BsSwitch>
        </div>
        <BsDivider />
        <div class="flex justify-end md-gap-x-2 p-3">
          <BsButton color="primary" flat size="sm" @click="show1 = false">Cancel</BsButton>
          <BsButton color="primary" size="sm" @click="show1 = false">Save</BsButton>
        </div>
      </template>
    </BsDropdownMenu>
  </div>
</template>
