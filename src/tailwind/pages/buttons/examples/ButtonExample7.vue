<script setup lang="ts">
import { ref } from 'vue';

const state1 = ref(false);
const state2 = ref(false);
const state3 = ref(false);
const state4 = ref(false);
const state5 = ref(false);
const state6 = ref(false);
const state7 = ref(false);
</script>

<template>
  <div class="md-button-toolbar md-gap-3" role="toolbar">
    <div class="inline-flex" role="group">
      <BsButton :active="state1" @click="state1 = !state1"> Start </BsButton>
      <BsButton :active="state2" @click="state2 = !state2"> 1 </BsButton>
      <BsButton :active="state3" @click="state3 = !state3"> 2 </BsButton>
      <BsButton :active="state4" @click="state4 = !state4"> 3 </BsButton>
    </div>
    <div class="inline-flex" role="group">
      <BsButton :active="state5" outlined @click="state5 = !state5">
        <BsIcon icon="favorite" />
      </BsButton>
      <BsButton :active="state6" outlined @click="state6 = !state6">
        <BsIcon icon="star" />
      </BsButton>
      <BsButton :active="state7" outlined @click="state7 = !state7">
        <BsIcon icon="delete" />
      </BsButton>
    </div>
  </div>
</template>
