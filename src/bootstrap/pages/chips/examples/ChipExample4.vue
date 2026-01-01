<script setup lang="ts">
import { ref } from 'vue';

const chip1Active = ref(false);
const chip2Active = ref(false);
const chip1Icon = ref<string>();
const chip2Icon = ref<string>();

function toggleChip1(value: boolean) {
  chip1Active.value = !value;
  chip1Icon.value = chip1Active.value ? 'check' : undefined;
}

function toggleChip2(value: boolean) {
  chip2Active.value = !value;
  chip2Icon.value = chip2Active.value ? 'check' : undefined;
}
</script>

<template>
  <div class="flex justify-center">
    <BsChip
      :active="chip1Active"
      :icon="chip1Icon"
      color="primary"
      @click="toggleChip1(chip1Active)"
    >
      Chip Action
    </BsChip>
    <BsChip
      :active="chip2Active"
      :icon="chip2Icon"
      color="primary"
      outlined
      @click="toggleChip2(chip2Active)"
    >
      Chip Action
    </BsChip>
  </div>
</template>
