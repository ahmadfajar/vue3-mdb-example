<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-md-6 text-center">
          <BsDropdownMenu v-model:open="show1" space="2">
            <BsButton color="primary" dropdown-toggle> Dropdown </BsButton>
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
        <div class="col-12 col-md-6 mt-3 mt-md-0 text-center">
          <BsDropdownMenu v-model:open="show2" cover>
            <BsButton color="primary" dropdown-toggle> Cover Dropdown </BsButton>
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
                  <BsListNavItem label="Disabled Action" disabled />
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
        <BsDropdownMenu v-model:open="show3" space="2" open-on-hover>
          <BsButton color="primary" dropdown-toggle> Dropdown </BsButton>
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
                <BsListNavItem label="Disabled Action" disabled />
              </BsListNav>
            </BsListView>
          </template>
        </BsDropdownMenu>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Display Placement</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 text-center">
          <BsDropdownMenu v-model:open="show7" space="2" placement="top-left">
            <BsButton :pill="false" color="primary" dropdown-toggle rounded> Top Left </BsButton>
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
                  <BsListNavItem label="Disabled Action" disabled />
                </BsListNav>
              </BsListView>
            </template>
          </BsDropdownMenu>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3 mt-md-0 text-center">
          <BsDropdownMenu v-model:open="show8" space="2" placement="top">
            <BsButton :pill="false" color="primary" dropdown-toggle rounded> Top </BsButton>
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
                  <BsListNavItem label="Disabled Action" disabled />
                </BsListNav>
              </BsListView>
            </template>
          </BsDropdownMenu>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0 text-center">
          <BsDropdownMenu v-model:open="show9" space="2" placement="top-right">
            <BsButton :pill="false" color="primary" dropdown-toggle rounded> Top Right </BsButton>
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
                  <BsListNavItem label="Disabled Action" disabled />
                </BsListNav>
              </BsListView>
            </template>
          </BsDropdownMenu>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);
</script>

<style scoped></style>
