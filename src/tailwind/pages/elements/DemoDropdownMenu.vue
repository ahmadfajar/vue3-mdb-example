<script setup lang="ts">
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);
</script>

<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="flex flex-wrap justify-around md-gap-4 py-4">
        <div class="text-center">
          <BsDropdownMenu v-model:open="show1" space="2">
            <BsButton color="primary" dropdown-toggle>Dropdown</BsButton>
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
        </div>
        <div class="text-center">
          <BsDropdownMenu v-model:open="show2" cover>
            <BsButton color="primary" dropdown-toggle>Cover Dropdown</BsButton>
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
      </div>
    </DemoBlock>
    <h2 class="mt-5">Hover Display</h2>
    <DemoBlock class="mt-4">
      <div class="text-center">
        <BsDropdownMenu v-model:open="show3" open-on-hover space="2">
          <BsButton color="primary" dropdown-toggle>Dropdown</BsButton>
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
    </DemoBlock>
    <h2 class="mt-5">Display Placement</h2>
    <DemoBlock class="mt-4">
      <div class="flex flex-wrap justify-around md-gap-4 py-4">
        <div class="text-center">
          <BsDropdownMenu v-model:open="show7" placement="top-left" space="2">
            <BsButton :pill="false" color="primary" dropdown-toggle rounded>Top Left</BsButton>
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
        <div class="text-center">
          <BsDropdownMenu v-model:open="show8" placement="top" space="2">
            <BsButton :pill="false" color="primary" dropdown-toggle rounded>Top</BsButton>
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
        <div class="text-center">
          <BsDropdownMenu v-model:open="show9" placement="top-right" space="2">
            <BsButton :pill="false" color="primary" dropdown-toggle rounded>Top Right</BsButton>
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
      </div>
    </DemoBlock>
  </div>
</template>
