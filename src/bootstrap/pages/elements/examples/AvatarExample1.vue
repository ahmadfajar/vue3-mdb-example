<template>
  <div class="flex items-center justify-center md-gap-3">
    <BsAvatar
      {$border_color}
      {$border}
      {$shapes}
      {$sizes}
      img-src="https://ahmadfajar.github.io/img/kitty-1.jpg"
    />
    <BsAvatar
      {$border_color}
      {$border}
      {$shapes}
      {$sizes}
      class="bg-purple-600 text-white"
      icon="account_circle"
    />
    <BsAvatar
      {$border_color}
      {$border}
      {$font_size}
      {$shapes}
      {$sizes}
      class="bg-gray-600 text-white"
      text="MD"
    />
  </div>
</template>
