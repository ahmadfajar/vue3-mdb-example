<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md flex justify-center">
          <BsTooltip content="I am a tooltip">
            <BsButton color="primary" @click="onClick"> BUTTON </BsButton>
          </BsTooltip>
        </div>
        <div class="col-md flex justify-center">
          <BsTooltip content="I am a tooltip">
            <BsIcon class="text-primary" icon="folder" size="28" />
          </BsTooltip>
        </div>
        <div class="col-md">
          <BsTooltip content="I am a tooltip">
            <span style="cursor: default">This text has a tooltip</span>
          </BsTooltip>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Display Placement</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md">
          <BsTooltip content="Tooltip on top side" placement="top">
            <BsButton>TOP</BsButton>
          </BsTooltip>
        </div>
        <div class="col-md">
          <BsTooltip content="Tooltip on bottom side" placement="bottom">
            <BsButton>BOTTOM</BsButton>
          </BsTooltip>
        </div>
        <div class="col-md">
          <BsTooltip content="Tooltip on left side" placement="left">
            <BsButton>LEFT</BsButton>
          </BsTooltip>
        </div>
        <div class="col-md">
          <BsTooltip content="Tooltip on right side" placement="right">
            <BsButton>RIGHT</BsButton>
          </BsTooltip>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
function onClick() {
  alert('I am clicked');
}
</script>
