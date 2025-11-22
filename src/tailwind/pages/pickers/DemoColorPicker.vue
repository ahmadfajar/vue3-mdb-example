<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';
import { ref } from 'vue';
import type { BsColorPickerInstance, TColorPickerMode } from 'vue-mdbootstrap';

const mode1 = ref<TColorPickerMode>();
const color1 = ref<string>('#1669de');
const mode2 = ref<TColorPickerMode>();
const color2 = ref<string>();
const picker3mode = ref<TColorPickerMode>('RGB');
const picker3color = ref<string>('#e632da');
const picker3Activator = ref<ComponentPublicInstance | null>(null);
const picker3Show = ref<boolean>(false);
const colorPicker = ref<BsColorPickerInstance | null>(null);

const swatches1 = [
  '#f4a261',
  '#e76f51',
  '#FF0000',
  '#d62828',
  '#AA0000',
  '#FFFF00',
  '#d5d50a',
  '#a5a512',
  '#17dc7a',
  '#00FF00',
  '#00AA00',
  '#005500',
  '#055e8e',
  '#0a80a6',
  '#099fbd',
  '#69d9ef',
  '#95e6f6',
];
</script>

<template>
  <div class="docs-body mx-auto mb-6">
    <h2>Basic Examples</h2>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex flex-col items-center">
        <BsColorPicker ref="colorPicker" v-model="color1" v-model:mode="mode1" class="shadow" />
        <div class="inline-block" style="width: 480px">
          <div class="mt-4">
            Mode: <b>{{ mode1 }}</b>
          </div>
          <div>
            Value: <b>{{ color1 }}</b>
          </div>
          <div class="mt-3">Exposed by instance:</div>
          <div class="font-weight-medium">
            <div>
              <b class="inline-block" style="width: 65px">HEX:</b>
              {{ (colorPicker as BsColorPickerInstance)?.hex() }}
            </div>
            <div>
              <b class="inline-block" style="width: 65px">RGBA:</b>
              {{ (colorPicker as BsColorPickerInstance)?.rgba() }}
            </div>
            <div>
              <b class="inline-block" style="width: 65px">HSLA:</b>
              {{ (colorPicker as BsColorPickerInstance)?.hsla() }}
            </div>
            <div>
              <b class="inline-block" style="width: 65px">OKLCH:</b>
              {{ (colorPicker as BsColorPickerInstance)?.oklch() }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mt-5">Color Swatches</h2>
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsColorPicker
            v-model="color2"
            v-model:mode="mode2"
            :swatches="swatches1"
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
    <div class="demo-block-content bg-gray-200 rounded-4 mt-4">
      <div class="flex justify-center">
        <div class="inline-block">
          <BsButton
            ref="picker3Activator"
            color="info"
            dropdown-toggle
            title="Click to display color picker"
            @click="picker3Show = !picker3Show"
          >
            <template #icon>
              <span
                :style="{ color: picker3color }"
                class="picked-color rounded-circle inline-block"
              />
            </template>
          </BsButton>
          <BsColorPicker
            v-model="picker3color"
            v-model:mode="picker3mode"
            v-model:open="picker3Show"
            :activator="picker3Activator?.$el"
            class="md-shadow-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.md-btn {
  .picked-color {
    width: 24px;
    height: 24px;
  }
}
</style>
