<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider />
    <div class="row mt-4">
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Linear Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader v-model:show="showLinear1" />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showLinear1 = !showLinear1">
          Toggle Loader
        </BsButton>
      </div>
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Linear-Alt Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader v-model:show="showProgress1" type="linear-alt" />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showProgress1 = !showProgress1">
          Toggle Loader
        </BsButton>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Spinner Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader v-model:show="showSpinner1" type="spinner" />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showSpinner1 = !showSpinner1">
          Toggle Loader
        </BsButton>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Growing Spinner Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader v-model:show="showGrow1" type="grow" />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showGrow1 = !showGrow1">
          Toggle Loader
        </BsButton>
      </div>
    </div>
    <h2 class="mt-5">Color and Size</h2>
    <BsDivider />
    <div class="row mt-4">
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Linear Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showLinear2"
            overlay-color="#064E40"
            spinner-color="red"
            spinner-diameter="60"
            spinner-thickness="8"
          />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showLinear2 = !showLinear2">
          Toggle Loader
        </BsButton>
      </div>
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Linear-Alt Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showProgress2"
            overlay-color="#064E40"
            spinner-color="blue-green"
            spinner-diameter="60"
            spinner-thickness="8"
            type="linear-alt"
          />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showProgress2 = !showProgress2">
          Toggle Loader
        </BsButton>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Spinner Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showSpinner2"
            overlay-color="#064E40"
            spinner-color="purple"
            spinner-diameter="60"
            type="spinner"
          />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showSpinner2 = !showSpinner2">
          Toggle Loader
        </BsButton>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">Growing Spinner Loader</BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showGrow2"
            overlay-color="#064E40"
            spinner-color="red"
            spinner-diameter="60"
            type="grow"
          />
        </BsCard>
        <BsButton color="default-color mt-3" @click="showGrow2 = !showGrow2">
          Toggle Loader
        </BsButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// prettier-ignore
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';
const showGrow1 = ref(false);
const showLinear1 = ref(false);
const showProgress1 = ref(false);
const showSpinner1 = ref(false);
const showGrow2 = ref(false);
const showLinear2 = ref(false);
const showProgress2 = ref(false);
const showSpinner2 = ref(false);
</script>
