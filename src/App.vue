<template>
  <div class="container-xl">
    <div class="text-center">
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        class="mb-3"/>
    </div>
    <DemoCard/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import DemoIcon from '@/components/Icon/DemoIcon.vue'
import DemoCard from '@/components/Card/DemoCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    DemoCard
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Roboto, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  padding-bottom: 30px;
}
</style>
