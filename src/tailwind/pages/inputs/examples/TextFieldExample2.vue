<template>
  <div class="flex flex-col md-gap-y-4">
    <BsTextField
      {$clear_button}
      {$icon_placement}
      {$variants}
      action-icon-variant="filled"
      autocomplete="name"
      floating-label
    >
      <label>Full Name</label>
    </BsTextField>
    <BsTextField
      {$clear_button}
      {$icon_placement}
      {$variants}
      action-icon-variant="filled"
      autocomplete="email"
      floating-label
      type="email"
    >
      <label>Email Address</label>
    </BsTextField>
  </div>
</template>
