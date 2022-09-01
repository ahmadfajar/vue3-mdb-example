<template>
  <div class="demo-block">
    <div class="demo-block-tools">
      <div class="inner-tools bg-grey-200">
        <input
          id="t-color"
          v-model="initial"
          class="me-2"
          type="color"/>
        <BsButton
          color="dark"
          icon="invert_colors"
          mode="icon"
          flat
          @click="invertBgColor"/>
      </div>
    </div>
    <div class="demo-block-content" :style="styles">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { newShade } from '@/sharedApi'

const initial = ref('#e9ecef')
const styles = reactive({ backgroundColor: initial.value })
const step = ref(-10)
// const btnColor = ref('dark')

watch(
  () => initial.value,
  (value) => {
    styles.backgroundColor = value
    // nextTick().then(() => {
    //   const lightness = getLightnessOfRGB(hexToRgb(value))
    //   btnColor.value = (lightness < 0.65) ? 'light text-light-grey' : 'dark'
    // })
  }
)

// watch(
//   () => styles.backgroundColor,
//   (value) => {
//     const lightness = getLightnessOfRGB(hexToRgb(value))
//     btnColor.value = (lightness < 0.75) ? 'light text-light-grey' : 'dark'
//   }
// )

// const changeBgColor = () => {
//   const input = document.getElementById('t-color')
//   if (input) {
//     input.click()
//   }
// }

const invertBgColor = () => {
  if (styles.backgroundColor === '#ffffff' || styles.backgroundColor === '#000000') {
    styles.backgroundColor = initial.value
    return
  }

  const strColor = newShade(
    styles.backgroundColor, step.value
  )
  // console.log('strColor:', strColor)
  if (strColor.length === 7) {
    styles.backgroundColor = strColor

    if (strColor === '#ffffff' || strColor === '#000000') {
      step.value = (step.value * -1)
    }
  } else {
    step.value = (step.value * -1)
  }
}

</script>

<style lang="scss">
$radius: .75rem;

.demo-block {
  position: relative;
}

.demo-block-tools {
  position: absolute;
  right: 0;
  top: -54px;

  > .inner-tools {
    border-radius: $radius $radius 0 0;
    display: inline-flex;
    position: relative;
    padding: .5rem 1rem .5rem 1.25rem;
    justify-content: center;
    align-items: center;
  }
}

.demo-block-content {
  border-radius: $radius 0 $radius $radius;
  padding: 24px 24px 20px;
  position: relative;

  .md-btn-icon, .md-chip, .btn {
    margin-left: .375rem;
    margin-right: 0;
  }
}
</style>
