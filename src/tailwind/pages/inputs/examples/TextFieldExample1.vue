<template>
  <div class="mb-4">
    <BsTextField
      {$clear_button}
      {$help_text}
      {$icon_placement}
      {$persistent_help_off}
      {$placeholder}
      {$states}
      {$variants}
    >
      <label class="col-sm-4 col-md-3 col-form-label">Classic Field</label>
    </BsTextField>
  </div>
  <BsDivider />
  <div class="mt-4">
    <BsTextField
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
    </BsTextField>
  </div>
</template>
