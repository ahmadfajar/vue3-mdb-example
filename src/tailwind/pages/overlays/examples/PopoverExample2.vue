<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { BsArrayStore, type IBsModel, useGenerateId } from 'vue-mdbootstrap';

function toggleShow(item: IBsModel, state: boolean): void {
  item.show = !state;
}

const placementSrc = new BsArrayStore([
  {
    id: useGenerateId(),
    value: 'left-top',
    label: 'Left Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left',
    label: 'Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left-bottom',
    label: 'Left Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right-top',
    label: 'Right Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right',
    label: 'Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right-bottom',
    label: 'Right Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom-left',
    label: 'Bottom Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom',
    label: 'Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom-right',
    label: 'Bottom Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top-left',
    label: 'Top Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top',
    label: 'Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top-right',
    label: 'Top Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
]);

onBeforeUnmount(() => {
  placementSrc.destroy();
});
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-3 gy-3">
    <div
      v-for="item in placementSrc.dataItems"
      :key="item.value as string"
      class="col flex justify-center"
    >
      <BsButton :id="item.id" dropdown-toggle @click="toggleShow(item, item.show as boolean)">
        {{ item.label }}
      </BsButton>
      <BsPopover
        v-model:open="item.show"
        :placement="item.value"
        :trigger="`#${item.id}`"
        class="md-shadow-1"
        space="3"
      >
        <BsListView>
          <BsListTile>
            <BsListTileLeading img-src="https://ahmadfajar.github.io/img/5.jpg" rounded />
            <BsListTileContent>
              <BsListTileTitle class="font-weight-bold"> Catherine </BsListTileTitle>
              <BsListTileSubtitle>Going further more...</BsListTileSubtitle>
            </BsListTileContent>
          </BsListTile>
        </BsListView>
        <BsDivider />
        <div class="px-4">
          <BsSwitch
            v-model="item.enableMessage"
            :value="true"
            inset-outlined
            label-class="w-full"
            label-position="left"
          >
            Enable Messages
          </BsSwitch>
          <BsSwitch
            v-model="item.enableHint"
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
          <BsButton color="primary" flat size="sm" @click="item.show = false"> Cancel </BsButton>
          <BsButton color="primary" size="sm" @click="item.show = false"> Save </BsButton>
        </div>
      </BsPopover>
    </div>
  </div>
</template>
