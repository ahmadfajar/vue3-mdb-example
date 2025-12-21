<template>
  <div class="flex flex-col md-gap-y-4">
    <BsTextField {$clear_button} {$icon_placement} {$variants} floating-label prefix="www.">
      <label>Website</label>
    </BsTextField>
    <BsTextField {$clear_button} {$icon_placement} {$variants} floating-label suffix="@example.com">
      <label>Email Address</label>
    </BsTextField>
  </div>
</template>
