<script setup lang="ts">
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);
</script>

<template>
  <div class="flex flex-col items-center flex-sm-row justify-around md-gap-y-3">
    <BsDropdownMenu v-model:open="show1" space="2">
      <BsButton dropdown-toggle>Dropdown</BsButton>
      <template #content>
        <BsListView>
          <BsListTile navigable>
            <BsListTileTitle>First Action</BsListTileTitle>
          </BsListTile>
          <BsListTile navigable>
            <BsListTileTitle>Second Action</BsListTileTitle>
          </BsListTile>
          <BsListTile navigable>
            <BsListTileTitle>Third Action</BsListTileTitle>
          </BsListTile>
          <BsDivider />
          <BsListTile navigable>
            <BsListTileTitle>Another Action</BsListTileTitle>
          </BsListTile>
          <BsListTile disabled>
            <BsListTileTitle>Disabled Action</BsListTileTitle>
          </BsListTile>
        </BsListView>
      </template>
    </BsDropdownMenu>
    <BsDropdownMenu v-model:open="show2" cover>
      <BsButton dropdown-toggle>Cover Dropdown</BsButton>
      <template #content>
        <BsListView>
          <BsListNav>
            <BsListNavItem label="First Action" />
            <BsListNavItem label="Second Action" />
            <BsListNavItem label="Third Action" />
          </BsListNav>
          <BsDivider />
          <BsListNav>
            <BsListNavItem label="Another Action" />
            <BsListNavItem disabled label="Disabled Action" />
          </BsListNav>
        </BsListView>
      </template>
    </BsDropdownMenu>
  </div>
</template>
