<script setup lang="ts">
import { ref } from 'vue';

const fieldValue1 = ref<string[]>([]);
const fieldValue2 = ref<string[]>([]);
</script>

<template>
  <div class="mb-4">
    <BsChipField
      v-model="fieldValue1"
      {$chip_color}
      {$chip_deletable}
      {$chip_outlined}
      {$chip_pill}
      {$clear_button}
      {$help_text}
      {$icon_placement}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
    >
      <label class="sm:w-30 col-form-label">Classic Field</label>
    </BsChipField>
  </div>
  <BsDivider />
  <div class="mt-4">
    <BsChipField
      v-model="fieldValue2"
      {$chip_color}
      {$chip_deletable}
      {$chip_outlined}
      {$chip_pill}
      {$clear_button}
      {$help_text}
      {$icon_placement}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
      floating-label
    >
      <label>Floating Label</label>
    </BsChipField>
  </div>
</template>
