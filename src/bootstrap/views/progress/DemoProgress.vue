<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
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
        v-model="progress2"
        v-model:buffer="buffer"
        class="mb-2"
        color="deep-orange"
        mode="buffer"
      />
      <BsProgress
        v-model="progress2"
        v-model:buffer="buffer"
        class="mb-4"
        color="purple"
        mode="buffer"
      />
      <BsDivider class="mb-3" />
      <BsCardContent class="mb-2" type="subtitle">
        Progress Value: <span class="text-unique">{{ progress2 }}%</span>
      </BsCardContent>
      <input v-model.number="progress2" class="form-range" type="range" />
      <BsCardContent class="my-2" type="subtitle">
        Buffer Value: <span class="text-unique">{{ buffer }}%</span>
      </BsCardContent>
      <input v-model.number="buffer" class="form-range" type="range" />
    </div>
    <h2 class="mt-5">Color and Size</h2>
    <BsDivider />
    <div class="mt-4">
      <div class="row">
        <div class="col-12 col-xl-7 mb-2">
          <BsCardContent class="mb-3" type="title"> Bars </BsCardContent>
          <BsProgress
            v-model="progress3"
            class="mb-2"
            color="deep-orange"
            mode="determinate"
            height="10"
          />
          <BsProgress
            v-model="progress3"
            class="mb-2"
            color="purple"
            mode="determinate"
            height="15"
          />
          <BsProgress
            v-model="progress3"
            class="mb-2"
            color="blue"
            mode="determinate"
            height="20"
          />
        </div>
        <div class="col-12 col-xl-5 text-center">
          <BsCardContent class="mb-3" type="title"> Spinner </BsCardContent>
          <div class="p-3 d-inline-block">
            <BsProgress
              v-model="progress3"
              v-model:diameter="diameter"
              v-model:stroke="thickness"
              color="amber"
              mode="determinate"
              type="spinner"
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
          <BsCardContent class="mb-2" type="subtitle">
            Progress Value: <span class="text-blue">{{ progress3 }}%</span>
          </BsCardContent>
          <div class="w-75">
            <input v-model.number="progress3" class="form-range" type="range" />
          </div>
          <div class="row my-3">
            <label class="col-12 col-md-5 col-lg-3 col-form-label fw-semibold" for="colFormLabel">
              Spinner Diameter
            </label>
            <div class="col-12 col-md-4">
              <input
                v-model.number="diameter"
                class="form-control"
                id="colFormLabel"
                type="number"
              />
            </div>
          </div>
          <div class="row my-3">
            <label class="col-12 col-md-5 col-lg-3 col-form-label fw-semibold" for="colFormLabel">
              Spinner Thickness
            </label>
            <div class="col-12 col-md-4">
              <input
                v-model.number="thickness"
                class="form-control"
                id="colFormLabel"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
