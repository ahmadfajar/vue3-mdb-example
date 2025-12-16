<script setup lang="ts">
import { ref } from 'vue';

const newYork = ref(72);
const sanFransisco = ref(39);
const sydney = ref(25);
const singapore = ref(61);
</script>

<template>
  <BsApp class="text-bg-surface-secondary items-center p-2">
    <BsCard class="w-full max-w-100 shadow">
      <BsAppbar class="bg-indigo-700">
        <BsAppbarTitle class="text-white">Revenue</BsAppbarTitle>
        <BsSpacer />
        <BsButton color="light" flat icon="more_vert" mode="icon" />
      </BsAppbar>
      <BsCardBody>
        <BsCardContent type="title">By Location</BsCardContent>
        <div class="flex items-end mt-4">
          <BsProgressBar
            v-model="newYork"
            class="grow"
            inner-cls="rounded"
            label="New York"
            label-alignment="start"
            height="12"
          />
          <div class="text-sm font-weight-semibold ps-2">{{ newYork }}k</div>
        </div>
        <div class="flex items-end mt-4">
          <BsProgressBar
            v-model="sanFransisco"
            class="grow"
            inner-cls="rounded"
            label="San Fransisco"
            label-alignment="start"
            height="12"
          />
          <div class="text-sm font-weight-semibold ps-2">{{ sanFransisco }}k</div>
        </div>
        <div class="flex items-end mt-4">
          <BsProgressBar
            v-model="sydney"
            class="grow"
            inner-cls="rounded"
            label="Sydney"
            label-alignment="start"
            height="12"
          />
          <div class="text-sm font-weight-semibold ps-2">{{ sydney }}k</div>
        </div>
        <div class="flex items-end my-4">
          <BsProgressBar
            v-model="singapore"
            class="grow"
            inner-cls="rounded"
            label="Singapore"
            label-alignment="start"
            height="12"
          />
          <div class="text-sm font-weight-semibold ps-2">{{ singapore }}k</div>
        </div>
      </BsCardBody>
    </BsCard>
  </BsApp>
</template>
