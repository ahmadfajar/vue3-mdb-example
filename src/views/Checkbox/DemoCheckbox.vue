<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <template v-for="color in colorVariants" :key="color">
          <div class="col mb-2">
            <bs-checkbox
              v-model="checkbox1"
              :color="color"
              value="accepted">
              I accept the use of color: <span class="fw-semibold">{{ color }}</span>
            </bs-checkbox>
          </div>
        </template>
      </div>
      <p class="mt-2">
        Value: <b>{{ checkbox1 }}</b>
      </p>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { colorVariants } from '@/sharedApi'
import DemoBlock from '@/DemoBlock.vue'

const checkbox1 = ref('accepted')

</script>

<style scoped>
</style>
