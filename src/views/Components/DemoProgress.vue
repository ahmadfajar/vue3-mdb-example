<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <div class="w-75 me-auto mt-4">
      <BsProgress class="mb-3" />
      <BsProgress v-model="progress1" color="green" mode="determinate" />
    </div>
    <h2 class="mt-5">Spinner Type</h2>
    <BsDivider />
    <div class="d-flex w-75 justify-content-center mt-4">
      <div class="pe-5 d-inline-block">
        <BsProgress type="spinner" />
      </div>
      <div class="d-inline-block">
        <BsProgress v-model="progress1" color="purple" mode="determinate" type="spinner" />
      </div>
    </div>
    <h2 class="mt-5">Buffer Mode</h2>
    <BsDivider />
    <div class="w-75 mt-4">
      <BsProgress
        v-model:buffer="buffer"
        v-model="progress2"
        mode="buffer"
        color="deep-orange"
        class="mb-2"
      />
      <BsProgress
        v-model:buffer="buffer"
        v-model="progress2"
        mode="buffer"
        color="purple"
        class="mb-4"
      />
      <BsDivider class="mb-3" />
      <BsCardContent type="subtitle" class="mb-2">
        Progress Value: <span class="text-unique">{{ progress2 }}%</span>
      </BsCardContent>
      <input v-model.number="progress2" class="form-range" type="range" />
      <BsCardContent type="subtitle" class="my-2">
        Buffer Value: <span class="text-unique">{{ buffer }}%</span>
      </BsCardContent>
      <input v-model.number="buffer" class="form-range" type="range" />
    </div>
    <h2 class="mt-5">Color and Size</h2>
    <BsDivider />
    <div class="mt-4">
      <div class="row">
        <div class="col-12 col-xl-7 mb-2">
          <BsCardContent type="title" class="mb-3"> Bars </BsCardContent>
          <BsProgress
            v-model="progress3"
            height="10"
            mode="determinate"
            color="deep-orange"
            class="mb-2"
          />
          <BsProgress
            v-model="progress3"
            height="15"
            mode="determinate"
            color="purple"
            class="mb-2"
          />
          <BsProgress
            v-model="progress3"
            height="20"
            mode="determinate"
            color="blue"
            class="mb-2"
          />
        </div>
        <div class="col-12 col-xl-5 text-center">
          <BsCardContent type="title" class="mb-3"> Spinner </BsCardContent>
          <div class="p-3 d-inline-block">
            <BsProgress
              v-model="progress3"
              v-model:diameter="diameter"
              v-model:stroke="thickness"
              type="spinner"
              mode="determinate"
              color="amber"
            />
          </div>
          <div class="p-3 d-inline-block">
            <BsProgress
              v-model="progress3"
              :diameter="diameter + 20"
              :stroke="thickness + 5"
              color="deep-orange"
              mode="determinate"
              type="spinner"
            />
          </div>
          <div class="p-3 d-inline-block">
            <BsProgress
              v-model="progress3"
              :diameter="diameter + 30"
              :stroke="thickness + 10"
              color="danger"
              mode="determinate"
              type="spinner"
            />
          </div>
        </div>
        <div class="col-12 mt-2">
          <BsDivider class="mb-3" />
          <BsCardContent type="subtitle" class="mb-2">
            Progress Value: <span class="text-blue">{{ progress3 }}%</span>
          </BsCardContent>
          <div class="w-75">
            <input v-model.number="progress3" class="form-range" type="range" />
          </div>
          <div class="row my-3">
            <label for="colFormLabel" class="col-12 col-md-5 col-lg-3 col-form-label fw-semibold">
              Spinner Diameter
            </label>
            <div class="col-12 col-md-4">
              <input
                id="colFormLabel"
                v-model.number="diameter"
                class="form-control"
                type="number"
              />
            </div>
          </div>
          <div class="row my-3">
            <label for="colFormLabel" class="col-12 col-md-5 col-lg-3 col-form-label fw-semibold">
              Spinner Thickness
            </label>
            <div class="col-12 col-md-4">
              <input
                id="colFormLabel"
                v-model.number="thickness"
                class="form-control"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const timer = ref<number>();
const progress1 = ref(10);
const buffer = ref(50);
const progress2 = ref(25);
const progress3 = ref(50);
const diameter = ref(60);
const thickness = ref(6);

onMounted(() => {
  timer.value = window.setInterval(() => {
    progress1.value += 10;
    if (progress1.value > 100) {
      progress1.value = 0;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<style scoped></style>
