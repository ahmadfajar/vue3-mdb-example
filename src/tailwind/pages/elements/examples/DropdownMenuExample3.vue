<script setup lang="ts">
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);
const show10 = ref(false);
const show11 = ref(false);
const show12 = ref(false);
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-3 gy-3">
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show1" placement="left-top" space="2">
        <BsButton dropdown-toggle>Left-Top</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show2" placement="left" space="2">
        <BsButton dropdown-toggle>Left</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show3" placement="left-bottom" space="2">
        <BsButton dropdown-toggle>Left-Bottom</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show4" placement="right-top" space="2">
        <BsButton dropdown-toggle>Right-Top</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show5" placement="right" space="2">
        <BsButton dropdown-toggle>Right</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show6" placement="right-bottom" space="2">
        <BsButton dropdown-toggle>Right-Bottom</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show7" placement="bottom-left" space="2">
        <BsButton dropdown-toggle>Bottom-Left</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show8" placement="bottom" space="2">
        <BsButton dropdown-toggle>Bottom</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show9" placement="bottom-right" space="2">
        <BsButton dropdown-toggle>Bottom-Right</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show10" placement="top-left" space="2">
        <BsButton dropdown-toggle>Top-Left</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show11" placement="top" space="2">
        <BsButton dropdown-toggle>Top</BsButton>
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
    <div class="col flex justify-center">
      <BsDropdownMenu v-model:open="show12" placement="top-right" space="2">
        <BsButton dropdown-toggle>Top-Right</BsButton>
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
