<template>
  <div class="mb-3">
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
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </BsNumericField>
  </div>
  <BsDivider />
  <div class="mt-3">
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
