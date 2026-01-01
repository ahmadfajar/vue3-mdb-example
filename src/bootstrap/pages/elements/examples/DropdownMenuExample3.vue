<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { BsArrayStore } from 'vue-mdbootstrap';

const placementSrc = new BsArrayStore([
  { value: 'left-top', label: 'Left Top', show: false },
  { value: 'left', label: 'Left', show: false },
  { value: 'left-bottom', label: 'Left Bottom', show: false },
  { value: 'right-top', label: 'Right Top', show: false },
  { value: 'right', label: 'Right', show: false },
  { value: 'right-bottom', label: 'Right Bottom', show: false },
  { value: 'bottom-left', label: 'Bottom Left', show: false },
  { value: 'bottom', label: 'Bottom', show: false },
  { value: 'bottom-right', label: 'Bottom Right', show: false },
  { value: 'top-left', label: 'Top Left', show: false },
  { value: 'top', label: 'Top', show: false },
  { value: 'top-right', label: 'Top Right', show: false },
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
      <BsDropdownMenu v-model:open="item.show" :placement="item.value" space="2">
        <BsButton dropdown-toggle>{{ item.label }}</BsButton>
        <template #content>
          <BsListView>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
              <BsDivider />
              <div class="dropdown-item">Other Action</div>
            </div>
          </BsListView>
        </template>
      </BsDropdownMenu>
    </div>
  </div>
</template>
