<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <div class="demo-block-content bg-gray-200 rounded-3 mt-4">
      <div class="flex justify-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <BsSearchField v-model="search1" />
        </div>
      </div>
    </div>

    <h2 class="mt-5">Adapts to container background</h2>
    <div class="demo-block-content bg-indigo rounded-3 mt-4">
      <div class="flex justify-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <BsSearchField v-model="search2" dark-mode />
        </div>
      </div>
    </div>

    <h2 class="mt-5">Advance Search</h2>
    <div class="demo-block-content bg-gray-700 rounded-3 mt-4">
      <div class="flex justify-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <BsSearchField
            v-model="search3"
            :popover-open="panelOpen"
            advance-search
            dark-mode
            @close="panelOpen = false"
            @open="panelOpen = true"
          >
            <template #popover>
              <div class="p-4">
                <BsTextField v-model="search3" floating-label>
                  <label>Name</label>
                </BsTextField>
                <div class="flex justify-end mt-4">
                  <BsButton color="primary" @click="panelOpen = false"> Search </BsButton>
                </div>
              </div>
            </template>
          </BsSearchField>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search1 = ref<string>();
const search2 = ref<string>();
const search3 = ref<string>();
const panelOpen = ref<boolean>(false);
</script>
