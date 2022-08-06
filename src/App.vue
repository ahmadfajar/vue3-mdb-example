<template>
  <div class="container-xl">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
      class="mb-3"
    >
    <DemoIcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DemoIcon from '@/components/Icon/DemoIcon.vue'

export default defineComponent({
  name: 'App',
  components: {
    DemoIcon
  }
})
</script>

<style>
#app {
  font-family: Avenir, Roboto, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
