<script setup lang="ts">
import { type ComponentPublicInstance, ref, useTemplateRef } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const mode = ref<TColorPickerMode>('RGB');
const selectedColor = ref<string>('#e632da');
const show = ref(false);
const activator = useTemplateRef<ComponentPublicInstance>('activator');
</script>

<template>
  <div>
    <BsButton
      ref="activator"
      color="info"
      dropdown-toggle
      title="Click to display color picker"
      @click="show = !show"
    >
      <template #icon>
        <span :style="{ color: selectedColor }" class="picked-color size-6 inline-block" />
      </template>
    </BsButton>
    <BsColorPicker
      v-model="selectedColor"
      v-model:mode="mode"
      v-model:open="show"
      :activator="activator?.$el"
      class="md-shadow-1"
    />
  </div>
</template>
