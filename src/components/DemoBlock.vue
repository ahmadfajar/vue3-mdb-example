<template>
  <div class="demo-block">
    <div class="demo-block-tools">
      <div class="inner-tools bg-gray-200">
        <button
          ref="pickerBtn"
          :style="{ color: pickerColor }"
          class="btn-color-picker"
          role="button"
          title="Change background color"
          type="button"
          @click="pickerShow = !pickerShow"
        />
        <BsButton color="dark" flat icon="invert_colors" mode="icon" @click="darkenOrLighten" />
      </div>
    </div>
    <div :class="cssClasses" :style="styles">
      <slot />
    </div>
    <BsColorPicker
      ref="picker"
      v-model="pickerColor"
      v-model:mode="pickerMode"
      v-model:open="pickerShow"
      :activator="pickerBtn"
      class="shadow"
      hide-alpha
      placement="bottom-right"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import type { BsColorPickerInstance, TColorPickerMode } from 'vue-mdbootstrap';
import { Color } from 'vue-mdbootstrap';

const picker = ref<BsColorPickerInstance>();
const pickerBtn = ref();
const pickerColor = ref('#f2f5f8');
const pickerMode = ref<TColorPickerMode>('HEX');
const pickerShow = ref(false);
const step = ref(-10);
const cssClasses = ref(['demo-block-content']);
const styles = reactive<Record<string, string>>({
  backgroundColor: pickerColor.value,
  color: '#171717',
});

watch(
  () => pickerColor.value,
  (value) => {
    styles.backgroundColor =
      pickerMode.value === 'HEX' ? value.toLowerCase() : picker.value!.hex().toLowerCase();
  }
);
watch(
  () => styles.backgroundColor,
  (value) => {
    const textColor = contrastTextColor(value!);
    styles.color = textColor;
    // styles['--md-field-button-color'] = textColor;

    if (textColor === '#fafafa') {
      styles['--md-field-active-indicator'] = 'var(--md-field-accent-indicator)';
      styles['--md-field-button-active-bg'] = 'rgba(250,250,250,.25)';
      styles['--md-field-button-hover-bg'] = 'rgba(180,180,180,.15)';
      styles['--md-field-button-hover-color'] = 'currentColor';
      cssClasses.value = ['demo-block-content', 'dark'];
    } else {
      styles['--md-field-active-indicator'] = 'var(--md-field-primary-indicator)';
      styles['--md-field-button-active-bg'] = 'rgba(12,12,12,.25)';
      styles['--md-field-button-hover-bg'] = 'rgba(80,80,80,.2)';
      cssClasses.value = ['demo-block-content'];
    }
  }
);

const contrastTextColor = (color: string) => {
  const yiq = Color.brightnessLevel(Color.hexToRgba(color));
  // console.info('yiq:', yiq)

  return yiq >= 170 ? '#171717' : '#fafafa';
};

const darkenOrLighten = () => {
  if (styles.backgroundColor === '#ffffff' || styles.backgroundColor === '#000000') {
    styles.backgroundColor = picker.value!.hex().toLowerCase();
    return;
  }

  const hexColor = Color.shadeColor(styles.backgroundColor!, step.value).toLowerCase();
  if (hexColor.length === 7) {
    styles.backgroundColor = hexColor;

    if (hexColor === '#ffffff' || hexColor === '#000000') {
      step.value = step.value * -1;
    }
  } else {
    step.value = step.value * -1;
  }
};
</script>

<style lang="scss">
@use 'vue-mdbootstrap/scss/mixins/css3/borders';

$radius: 0.75rem;

.demo-block {
  position: relative;
}

.demo-block-tools {
  position: absolute;
  right: 0;
  top: -54px;

  > .inner-tools {
    @include borders.radius($radius $radius 0 0);
    background-color: oklch(0.942 0.005 247.879);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0.5rem 1rem 0.5rem 1.25rem;
  }
}

.demo-block-content {
  @include borders.radius($radius 0 $radius $radius);
  padding: 24px 24px 20px;
  position: relative;
}

.btn-color-picker,
.picked-color {
  @include borders.radius(50%);
  background-image:
    repeating-linear-gradient(45deg, #aaa 25%, transparent 25%, transparent 75%, #aaa 75%, #aaa),
    repeating-linear-gradient(45deg, #aaa 25%, #fff 25%, #fff 75%, #aaa 75%, #aaa);

  // prettier-ignore
  background-position: 0 0, 4px 4px;
  background-size: 8px 8px;
  border: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  white-space: nowrap;

  &:after {
    background-color: currentColor;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
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
  cursor: pointer;
}
</style>
