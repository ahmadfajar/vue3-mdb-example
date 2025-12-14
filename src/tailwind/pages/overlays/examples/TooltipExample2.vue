<template>
  <div class="w-full row row-cols-1 row-cols-md-4 gy-3 gy-md-0">
    <div class="col flex justify-center">
      <BsTooltip content="Tooltip on top side" placement="top">
        <BsButton>TOP</BsButton>
      </BsTooltip>
    </div>
    <div class="col flex justify-center">
      <BsTooltip content="Tooltip on bottom side" placement="bottom">
        <BsButton>BOTTOM</BsButton>
      </BsTooltip>
    </div>
    <div class="col flex justify-center">
      <BsTooltip content="Tooltip on left side" placement="left">
        <BsButton>LEFT</BsButton>
      </BsTooltip>
    </div>
    <div class="col flex justify-center">
      <BsTooltip content="Tooltip on right side" placement="right">
        <BsButton>RIGHT</BsButton>
      </BsTooltip>
    </div>
  </div>
</template>
