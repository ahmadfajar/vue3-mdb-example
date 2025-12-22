<script setup lang="ts">
import { ref } from 'vue';

const fieldValue1 = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.'
);
const fieldValue2 = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.'
);
</script>

<template>
  <div class="mb-4">
    <BsTextArea
      v-model="fieldValue1"
      {$auto_grow}
      {$clear_button}
      {$display_rows}
      {$help_text}
      {$icon_placement}
      {$no_resize}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
    >
      <label class="col-sm-4 col-md-3 col-form-label">Classic Field</label>
    </BsTextArea>
  </div>
  <BsDivider />
  <div class="mt-4">
    <BsTextArea
      v-model="fieldValue2"
      {$auto_grow}
      {$clear_button}
      {$display_rows}
      {$help_text}
      {$icon_placement}
      {$no_resize}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
      floating-label
    >
      <label>Floating Label</label>
    </BsTextArea>
  </div>
</template>
