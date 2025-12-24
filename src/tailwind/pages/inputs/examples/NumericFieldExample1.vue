<script setup lang="ts"></script>
<template>
  <div class="mb-4">
    <BsNumericField
      {$button_action}
      {$button_placement}
      {$clear_button}
      {$help_text}
      {$icon_placement}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
    >
      <label class="col-sm-4 col-md-3 col-form-label">Classic Field</label>
    </BsNumericField>
  </div>
  <BsDivider />
  <div class="mt-4">
    <BsNumericField
      {$button_action}
      {$button_placement}
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
    </BsNumericField>
  </div>
</template>
