<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="row mt-4">
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Linear Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader v-model:show="showLinear1"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showLinear1 = !showLinear1">
          Toggle Loader
        </button>
      </div>
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Progress Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showProgress1"
            variant="progress"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showProgress1 = !showProgress1">
          Toggle Loader
        </button>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Spinner Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showSpinner1"
            variant="spinner"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showSpinner1 = !showSpinner1">
          Toggle Loader
        </button>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Growing Spinner Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showGrow1"
            variant="grow"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showGrow1 = !showGrow1">
          Toggle Loader
        </button>
      </div>
    </div>
    <h2 class="mt-5">
      Color and Size
    </h2>
    <BsDivider/>
    <div class="row mt-4">
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Linear Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showLinear2"
            overlay-color="#064E40"
            spinner-color="red"
            spinner-diameter="60"
            spinner-thickness="8"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showLinear2 = !showLinear2">
          Toggle Loader
        </button>
      </div>
      <div class="col-md-6 mb-4">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Progress Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showProgress2"
            variant="progress"
            overlay-color="#064E40"
            spinner-color="blue-green"
            spinner-diameter="60"
            spinner-thickness="8"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showProgress2 = !showProgress2">
          Toggle Loader
        </button>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Spinner Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showSpinner2"
            variant="spinner"
            overlay-color="#064E40"
            spinner-color="purple"
            spinner-diameter="60"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showSpinner2 = !showSpinner2">
          Toggle Loader
        </button>
      </div>
      <div class="col-md-6 mb-4 mb-md-0">
        <BsCard shadow>
          <BsCardBody>
            <BsCardContent type="title">
              Growing Spinner Loader
            </BsCardContent>
            <p>{{ content }}</p>
          </BsCardBody>
          <BsMaskLoader
            v-model:show="showGrow2"
            variant="grow"
            overlay-color="#064E40"
            spinner-color="deep-purple"
            spinner-diameter="60"/>
        </BsCard>
        <button
          class="btn btn-primary mt-3"
          @click="showGrow2 = !showGrow2">
          Toggle Loader
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const content = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
const showGrow1 = ref(false)
const showLinear1 = ref(false)
const showProgress1 = ref(false)
const showSpinner1 = ref(false)
const showGrow2 = ref(false)
const showLinear2 = ref(false)
const showProgress2 = ref(false)
const showSpinner2 = ref(false)
</script>

<style scoped>
</style>
