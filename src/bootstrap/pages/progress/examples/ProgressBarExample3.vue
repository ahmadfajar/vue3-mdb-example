<script setup lang="ts">
import { ref } from 'vue';

const newYork = ref(72);
const sanFransisco = ref(39);
const sydney = ref(25);
const singapore = ref(61);
</script>

<template>
  <BsCard class="w-full" shadow style="max-width: 400px">
    <BsCardHeader class="flex items-center bg-indigo text-white">
      <div class="h4 mb-0">Revenue</div>
      <BsSpacer />
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
    <BsCardBody>
      <BsCardContent type="title">By Location</BsCardContent>
      <div class="flex items-end mt-3">
        <BsProgressBar
          v-model="newYork"
          class="flex-fill"
          inner-cls="rounded"
          label="New York"
          label-alignment="start"
          height="12"
        />
        <div class="font-weight-semibold ps-2" style="font-size: 12px">{{ newYork }}k</div>
      </div>
      <div class="flex items-end mt-4">
        <BsProgressBar
          v-model="sanFransisco"
          class="flex-fill"
          inner-cls="rounded"
          label="San Fransisco"
          label-alignment="start"
          height="12"
        />
        <div class="font-weight-semibold ps-2" style="font-size: 12px">{{ sanFransisco }}k</div>
      </div>
      <div class="flex items-end mt-3">
        <BsProgressBar
          v-model="sydney"
          class="flex-fill"
          inner-cls="rounded"
          label="Sydney"
          label-alignment="start"
          height="12"
        />
        <div class="font-weight-semibold ps-2" style="font-size: 12px">{{ sydney }}k</div>
      </div>
      <div class="flex items-end my-3">
        <BsProgressBar
          v-model="singapore"
          class="flex-fill"
          inner-cls="rounded"
          label="Singapore"
          label-alignment="start"
          height="12"
        />
        <div class="font-weight-semibold ps-2" style="font-size: 12px">{{ singapore }}k</div>
      </div>
    </BsCardBody>
  </BsCard>
</template>
