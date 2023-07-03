<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <div class="demo-block-content bg-blue-grey lighten-5 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsColorPicker v-model="color1" v-model:mode="mode1" class="shadow" />
          <div class="mt-3">
            Mode: <b>{{ mode1 }}</b>
          </div>
          <div>
            Value: <b>{{ color1 }}</b>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mt-5">Color Swatches</h2>
    <div class="demo-block-content bg-blue-grey lighten-5 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsColorPicker
            v-model="color2"
            v-model:mode="mode2"
            :swatches="swatches2"
            class="shadow"
          />
          <div class="mt-3">
            Mode: <b>{{ mode2 }}</b>
          </div>
          <div>
            Value: <b>{{ color2 }}</b>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mt-5">Popup ColorPicker</h2>
    <div class="demo-block-content bg-blue-grey lighten-5 rounded-4 mt-4">
      <div class="d-flex justify-content-center">
        <div class="d-inline-block">
          <BsButton
            ref="picker3Activator"
            title="Click to display color picker"
            dropdown-toggle
            @click="picker3Show = !picker3Show"
          >
            <span class="picked-color rounded-circle" :style="{ color: picker3color }"></span>
          </BsButton>
          <BsColorPicker
            v-model="picker3color"
            v-model:mode="picker3mode"
            v-model:open="picker3Show"
            :activator="picker3Activator?.$el"
            class="shadow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue';
import { ref } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const mode1 = ref<TColorPickerMode>();
const color1 = ref<string>('#1669de');
const mode2 = ref<TColorPickerMode>();
const color2 = ref<string>();
const picker3mode = ref<TColorPickerMode>('RGB');
const picker3color = ref<string>('#e632da');
const picker3Activator = ref<ComponentPublicInstance | null>(null);
const picker3Show = ref<boolean>(false);

const swatches2 = [
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  '#FF0000',
  '#d62828',
  '#AA0000',
  '#550000',
  '#FFFF00',
  '#AAAA00',
  '#555500',
  '#00FF00',
  '#00AA00',
  '#005500',
  '#0077b6',
  '#0096c7',
  '#00b4d8',
  '#48cae4'
];
</script>

<style lang="scss">
.btn {
  .picked-color {
    display: inline-block;
    width: 26px;
    height: 26px;
  }
}
</style>
