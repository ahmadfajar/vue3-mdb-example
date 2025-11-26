<script setup lang="ts">
import { ref } from 'vue';

const active = ref(false);
const title = 'Content Title';
const content =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";
</script>

<template>
  <div class="min-h-55 overflow-hidden">
    <BsButton class="mb-3" @click="active = !active"> Click Me </BsButton>
    <transition {$transition}>
      <BsCard v-if="active" shadow>
        <BsCardBody>
          <BsCardContent type="title">{{ title }}</BsCardContent>
          <div>{{ content }}</div>
        </BsCardBody>
      </BsCard>
    </transition>
  </div>
</template>
