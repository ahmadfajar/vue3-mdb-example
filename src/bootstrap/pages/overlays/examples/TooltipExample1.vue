<template>
  <div class="w-full row row-cols-1 row-cols-sm-3 gy-3 gy-sm-0">
    <div class="col flex justify-center">
      <BsTooltip content="I am a tooltip">
        <BsButton color="primary"> BUTTON </BsButton>
      </BsTooltip>
    </div>
    <div class="col flex justify-center items-center">
      <BsTooltip content="I am a tooltip">
        <BsIcon class="text-primary" icon="folder" size="28" />
      </BsTooltip>
    </div>
    <div class="col flex justify-center items-center">
      <BsTooltip content="I am a tooltip">
        <span style="cursor: default">This text has a tooltip</span>
      </BsTooltip>
    </div>
  </div>
</template>
