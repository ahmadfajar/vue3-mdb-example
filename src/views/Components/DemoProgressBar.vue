<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <div class="w-75 me-auto mt-4">
      <BsProgressBar v-model="progress1" />
      <BsProgressBar v-model="progress1" class="mt-3" height="1.5rem" show-value />
      <BsCardContent type="subtitle" class="my-3">
        Value: <span class="text-unique">{{ progress1 }}%</span>
      </BsCardContent>
      <input v-model.number="progress1" class="form-range" type="range" />
    </div>
    <h2 class="mt-5">Color</h2>
    <BsDivider />
    <div class="w-75 me-auto mt-4">
      <BsProgressBar v-model="progress2" color="success" />
      <BsProgressBar v-model="progress3" class="mt-3" color="danger" />
      <BsProgressBar v-model="progress4" class="mt-3" color="purple" />
      <BsProgressBar v-model="progress5" class="mt-3" color="indigo" />
    </div>
    <h2 class="mt-5">Striped</h2>
    <BsDivider />
    <div class="w-75 me-auto mt-4">
      <BsProgressBar v-model="progress2" color="success" striped />
      <BsProgressBar v-model="progress3" class="mt-3" color="danger" striped />
      <BsProgressBar v-model="progress4" class="mt-3" color="purple" striped />
      <BsProgressBar v-model="progress5" class="mt-3" color="indigo" striped />
    </div>
    <h2 class="mt-5">Animated Stripes</h2>
    <BsDivider />
    <div class="w-75 me-auto mt-4">
      <BsProgressBar v-model="progress2" color="success" striped striped-animation />
      <BsProgressBar v-model="progress3" class="mt-3" color="danger" striped striped-animation />
      <BsProgressBar v-model="progress4" class="mt-3" color="purple" striped striped-animation />
      <BsProgressBar v-model="progress5" class="mt-3" color="indigo" striped striped-animation />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress1 = ref(10);
const progress2 = ref(30);
const progress3 = ref(50);
const progress4 = ref(70);
const progress5 = ref(90);
</script>
