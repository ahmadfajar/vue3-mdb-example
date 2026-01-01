<script setup lang="ts">
import { ref } from 'vue';

const checkbox1 = ref();
</script>

<template>
  <BsCheckbox v-model="checkbox1" class="rounded-checkbox" value="accepted">
    Accept the terms and use
  </BsCheckbox>
  <div class="mt-3">
    Value: <b>{{ checkbox1 }}</b>
  </div>
</template>

<style lang="scss">
.md-checkbox {
  &.rounded-checkbox {
    --md-checkbox-border-radius: 50%;
    --md-checkbox-size: 24px;
    --md-checkbox-checkmark-height: 12px;
    --md-checkbox-checkmark-width: 6px;
    --md-checkbox-checkmark-pos-x: 7px;
    --md-checkbox-checkmark-pos-y: 3px;
  }
}
</style>
