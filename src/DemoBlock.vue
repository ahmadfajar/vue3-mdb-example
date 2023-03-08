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
import * as Color from '../../vue-mdbootstrap/src/mixins/colorUtils'

const picker = ref()
const pickerBtn = ref()
const pickerColor = ref('#f2f5f8')
const pickerMode = ref('HEX')
const pickerShow = ref(false)
const step = ref(-10)
const styles = reactive<Record<string, string>>({ backgroundColor: pickerColor.value, color: '#212121' })

watch(
  () => pickerColor.value,
  (value) => {
    styles.backgroundColor = pickerMode.value === 'HEX' ? value.toLowerCase() : picker.value.hexColor().toLowerCase()
  }
)
watch(
  () => styles.backgroundColor,
  (value) => {
    const textColor = contrastTextColor(value)
    styles.color = textColor
    styles['--md-field-button-color'] = textColor

    if (textColor.startsWith('#fff')) {
      styles['--md-field-active-indicator'] = 'var(--md-field-accent-indicator)'
      styles['--md-field-button-active-bg'] = 'rgba(250,250,250,.25)'
      styles['--md-field-button-hover-bg'] = 'rgba(180,180,180,.15)'
    } else {
      styles['--md-field-active-indicator'] = 'var(--md-field-primary-indicator)'
      styles['--md-field-button-active-bg'] = 'rgba(12,12,12,.25)'
      styles['--md-field-button-hover-bg'] = 'rgba(80,80,80,.2)'
    }
  }
)

const contrastTextColor = (color: string) => {
  const yiq = Color.brightnessLevel(Color.hexToRgba(color))
  // console.info('yiq:', yiq)

  return yiq >= 170 ? '#000' : '#fff'
}

const darkenOrLighten = () => {
  if (styles.backgroundColor === '#ffffff' || styles.backgroundColor === '#000000') {
    styles.backgroundColor = picker.value.hexColor().toLowerCase()
    return
  }

  const hexColor = Color.shadeColor(styles.backgroundColor, step.value).toLowerCase()
  if (hexColor.length === 7) {
    styles.backgroundColor = hexColor

    if (hexColor === '#ffffff' || hexColor === '#000000') {
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

  .btn, .md-btn-icon, .md-chip {
    &:first-child {
      margin-left: .375rem;
    }
  }

  .btn-group, .md-action-icon, .md-searchbox-inner, .md-datepicker {
    .btn, .md-btn-icon {
      margin-left: 0;
    }
  }

  .md-chip-field {
    .md-field-activator {
      .md-chip {
        &:first-child {
          margin-left: 0;
        }
      }
    }
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
