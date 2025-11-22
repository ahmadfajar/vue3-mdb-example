<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrink = ref<string>();
const drinks: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
</script>

<template>
  <div class="row">
    <div class="sm:w-36 pt-2 font-medium">Favorite Drink</div>
    <div class="col-sm">
      <BsToggleButton
        v-model="selectedDrink"
        :items="drinks"
        {$colorName}
        {$iconPosition}
        {$iconSize}
        {$raised}
        {$shapes}
        {$sizes}
        {$states}
        {$variants}
      >
        <template #icon="item">
          <BsSvgIcon v-if="item?.value === selectedDrink" icon="check" />
        </template>
      </BsToggleButton>
    </div>
  </div>
</template>
