<script setup lang="ts">
import { type ComponentPublicInstance, ref, useTemplateRef } from 'vue';

const enableHint = ref(false);
const enableMessage = ref(false);
const show = ref(false);
const activator = useTemplateRef<ComponentPublicInstance>('activator');

function toggleShow(state: boolean): void {
  show.value = !state;
}
</script>

<template>
  <BsButton ref="activator" dropdown-toggle @click="toggleShow(show)"> Button Dropdown </BsButton>
  <BsPopover v-model:open="show" :trigger="activator?.$el" class="md-shadow-1" space="3">
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
    <div class="px-4 py-2">
      <BsSwitch
        v-model="enableMessage"
        :value="true"
        inset-outlined
        label-class="w-full"
        label-position="left"
      >
        Enable Messages
      </BsSwitch>
      <BsSwitch
        v-model="enableHint"
        :value="true"
        inset-outlined
        label-class="w-full"
        label-position="left"
      >
        Enable Hints
      </BsSwitch>
    </div>
    <BsDivider />
    <div class="flex justify-end md-gap-1 p-3">
      <BsButton color="primary" size="sm" @click="show = false"> Save </BsButton>
      <BsButton color="primary" flat size="sm" @click="show = false"> Cancel </BsButton>
    </div>
  </BsPopover>
</template>
