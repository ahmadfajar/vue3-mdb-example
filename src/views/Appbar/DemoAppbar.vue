<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <bs-appbar class="mt-4" shadow>
      <bs-appbar-title title="Page Title"/>
    </bs-appbar>
    <h2 class="mt-5">
      Use with Button
    </h2>
    <BsDivider/>
    <bs-appbar class="bg-indigo mt-4" shadow>
      <bs-button
        color="light"
        mode="icon"
        flat>
        <bs-icon icon="menu"/>
      </bs-button>
      <bs-appbar-title class="text-white">
        Page Title
      </bs-appbar-title>
      <bs-spacer/>
      <bs-appbar-items>
        <bs-button
          mode="icon"
          icon="search"
          color="light"
          flat/>
        <bs-button
          mode="icon"
          icon="notifications"
          color="light"
          flat/>
        <bs-button
          mode="icon"
          color="light"
          flat>
          <bs-icon icon="more_vert"/>
        </bs-button>
      </bs-appbar-items>
    </bs-appbar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
</style>
