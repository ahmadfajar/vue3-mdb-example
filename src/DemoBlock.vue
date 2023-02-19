<template>
  <div class="demo-block">
    <div class="demo-block-tools">
      <div class="inner-tools bg-grey-200">
        <button
          ref="pickerBtn"
          :style="{ color: pickerColor }"
          class="btn-color-picker"
          role="button"
          title="Change background color"
          type="button"
          @click="pickerShow = !pickerShow"/>
        <BsButton
          color="dark"
          icon="invert_colors"
          mode="icon"
          flat
          @click="darkenOrLighten"/>
      </div>
    </div>
    <div class="demo-block-content" :style="styles">
      <slot/>
    </div>
    <BsColorPicker
      ref="picker"
      v-model="pickerColor"
      v-model:mode="pickerMode"
      v-model:open="pickerShow"
      placement="bottom-right"
      :activator="pickerBtn"
      hide-alpha
      class="shadow"/>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { getTextColor, newShade } from '@/sharedApi'

const picker = ref()
const pickerBtn = ref()
const pickerColor = ref('#e9ecef')
const pickerMode = ref('HEX')
const pickerShow = ref(false)
const step = ref(-10)
const styles = reactive<Record<string, string>>({ backgroundColor: pickerColor.value, color: '#212121' })

watch(
  () => pickerColor.value,
  (value) => {
    styles.backgroundColor = pickerMode.value === 'HEX' ? value : picker.value.hexColor()
  }
)
watch(
  () => styles.backgroundColor,
  (value) => {
    const textColor = getTextColor(value)
    styles.color = textColor
    if (textColor.startsWith('#fff')) {
      styles['--md-field-active-indicator'] = 'var(--md-field-accent-indicator)'
    } else {
      styles['--md-field-active-indicator'] = 'var(--md-field-primary-indicator)'
    }
  }
)

const darkenOrLighten = () => {
  if (styles.backgroundColor === '#ffffff' || styles.backgroundColor === '#000000') {
    styles.backgroundColor = pickerColor.value
    return
  }

  const strColor = newShade(styles.backgroundColor, step.value)
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
@import "~compass-mixins/lib/compass/css3";

$radius: .75rem;

.demo-block {
  position: relative;
}

.demo-block-tools {
  position: absolute;
  right: 0;
  top: -54px;

  > .inner-tools {
    @include border-radius($radius $radius 0 0);
    @include flexbox((display: inline-flex, justify-content: center, align-items: center));
    position: relative;
    padding: .5rem 1rem .5rem 1.25rem;
  }
}

.demo-block-content {
  @include border-radius($radius 0 $radius $radius);
  padding: 24px 24px 20px;
  position: relative;

  .md-btn-icon, .md-chip {
    margin-left: .375rem;
    margin-right: 0;
  }
}

.btn-color-picker, .picked-color {
  @include border-radius(50%);
  background-image: repeating-linear-gradient(45deg, #aaa 25%, transparent 25%, transparent 75%, #aaa 75%, #aaa), repeating-linear-gradient(45deg, #aaa 25%, #fff 25%, #fff 75%, #aaa 75%, #aaa);
  background-position: 0 0, 4px 4px;
  background-size: 8px 8px;
  border: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  white-space: nowrap;

  &:after {
    @include box-shadow(inset 0 0 0 1px rgba(0, 0, 0, .1));
    background-color: currentColor;
    border-radius: inherit;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: block;
    position: absolute;
    pointer-events: none;
  }
}

.btn-color-picker {
  margin-right: 6px;
  width: 28px;
  height: 28px;
}
</style>
