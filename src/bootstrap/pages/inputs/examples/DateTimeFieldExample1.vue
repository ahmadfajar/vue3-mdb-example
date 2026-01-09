<script setup lang="ts">
import { ref } from 'vue';

const fieldValue1 = ref<string>();
const fieldValue2 = ref<string>();
</script>

<template>
  <div class="mb-3">
    <BsDateTimeField
      v-model="fieldValue1"
      {$clear_button}
      {$display_format}
      {$help_text}
      {$icon_placement}
      {$landscape_mode}
      {$persistent_help_off}
      {$picker_mode}
      {$placeholder}
      {$states}
      {$value_format}
      {$variants}
    >
      <label class="col-sm-4 col-md-3 col-form-label">Classic Field</label>
    </BsDateTimeField>
  </div>
  <BsDivider />
  <div class="mt-3">
    <BsDateTimeField
      v-model="fieldValue2"
      {$clear_button}
      {$display_format}
      {$help_text}
      {$icon_placement}
      {$landscape_mode}
      {$persistent_help_off}
      {$picker_mode}
      {$placeholder}
      {$states}
      {$value_format}
      {$variants}
      floating-label
    >
      <label>Floating Label</label>
    </BsDateTimeField>
  </div>
</template>
