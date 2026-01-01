<script setup lang="ts">
import { ref } from 'vue';

const show1 = ref(false);
</script>

<template>
  <div class="flex max-sm:flex-col max-sm:items-center justify-around gap-y-3">
    <BsDropdownMenu v-model:open="show1" space="2">
      <BsButton dropdown-toggle>Dropdown</BsButton>
      <template #content>
        <BsListView color="info-color-dark">
          <div class="dropdown-menu">
            <div class="dropdown-item">First Action</div>
            <div class="dropdown-item">Second Action</div>
            <div class="dropdown-item">Third Action</div>
            <BsDivider />
            <div class="dropdown-item">Other Action</div>
            <div class="dropdown-item disabled">Another Action</div>
          </div>
        </BsListView>
      </template>
    </BsDropdownMenu>
  </div>
</template>

<style lang="scss">
@use 'vue-mdbootstrap/scss/mixins/dropdown-menu' as dropdown;
@use 'vue-mdbootstrap/scss/color_vars' as colors;

@include dropdown.make-dropdown-menu-variant('info-color-dark', colors.$info-color-dark);
</style>
