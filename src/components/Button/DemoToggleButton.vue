<template>
  <div class="demo-wrapper container-lg mx-auto">
    <BsCardContent type="subtitle" class="mb-4">
      What are you drinking?
    </BsCardContent>
    <div class="row mb-3">
      <label class="col-md-3 col-xl-2 col-form-label">
        Normal State
      </label>
      <div class="col-md">
        <BsToggleButton
          v-model="selectedDrink"
          :items="drinks">
        </BsToggleButton>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-xl-2 col-form-label">
        Readonly State
      </label>
      <div class="col-md">
        <BsToggleButton
          v-model="selectedDrink"
          :items="drinks"
          color="default-color"
          readonly>
        </BsToggleButton>
      </div>
    </div>
    <div class="row">
      <label class="col-md-3 col-xl-2 col-form-label">
        Disabled State
      </label>
      <div class="col-md">
        <BsToggleButton
          v-model="selectedDrink"
          :items="drinks"
          disabled>
        </BsToggleButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drinks = [{
  value: 'tea',
  label: 'Tea'
}, {
  value: 'coffee',
  label: 'Coffee'
}, {
  value: 'beer',
  label: 'Beer'
}]

const selectedDrink = ref<string | null>(null)
</script>

<style scoped>
</style>
