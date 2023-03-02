<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <div class="demo-block-content bg-grey-100 rounded-3 mt-4">
      <div class="d-flex justify-content-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <BsSearchField v-model="search1"/>
        </div>
      </div>
    </div>
    <h2 class="mt-5">
      Adapts to container background
    </h2>
    <div class="demo-block-content bg-indigo rounded-3 mt-4">
      <div class="d-flex justify-content-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <BsSearchField v-model="search2" dark-mode/>
        </div>
      </div>
    </div>
    <h2 class="mt-5">
      Advance Search
    </h2>
    <div class="demo-block-content bg-grey-800 rounded-3 mt-4">
      <div class="d-flex justify-content-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <BsSearchField
            v-model="search3"
            v-model:open="isOpen"
            advance-search
            dark-mode>
            <template #popover>
              <div class="p-4">
                <BsTextField v-model="search3" floating-label>
                  <label>Name</label>
                </BsTextField>
                <div class="d-flex justify-content-end mt-4">
                  <BsButton color="primary" @click="isOpen = false">
                    Search
                  </BsButton>
                </div>
              </div>
            </template>
          </BsSearchField>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const search1 = ref<string|null>(null)
const search2 = ref<string|null>(null)
const search3 = ref<string|null>(null)
const isOpen = ref<boolean>(false)

</script>
