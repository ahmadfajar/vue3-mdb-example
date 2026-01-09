<template>
  <div class="flex flex-col md-gap-y-4">
    <BsNumericField {$clear_button} {$icon_placement} {$variants} floating-label prefix="Rp.">
      <label>Unit Price</label>
    </BsNumericField>
    <BsNumericField {$clear_button} {$icon_placement} {$variants} floating-label suffix="Kg">
      <label>Unit Weight</label>
    </BsNumericField>
  </div>
</template>
