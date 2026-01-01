<script setup lang="ts">
import { ref } from 'vue';
import type { TInputOptionItem } from 'vue-mdbootstrap';

const selectedDrink = ref<string>();
const drinks: TInputOptionItem[] = [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }];
</script>

<template>
  <div class="row">
    <div class="col-md-4 pt-2 font-weight-medium">Favorite Drink</div>
    <div class="col-md-8">
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
