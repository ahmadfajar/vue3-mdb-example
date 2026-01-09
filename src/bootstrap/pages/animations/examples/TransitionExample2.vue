<script setup lang="ts">
import { ref } from 'vue';

const active = ref(false);
const title = 'Content Title';
const content =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";
</script>

<template>
  <div style="min-height: 302px">
    <BsButton class="mb-3" @click="active = !active"> Click Me </BsButton>
    <BsExpandTransition>
      <BsCard v-if="active" shadow style="max-width: 500px">
        <BsCardBody>
          <BsCardContent type="title">{{ title }}</BsCardContent>
          <div class="mb-3">{{ content }}</div>
          <div class="mb-3">{{ content }}</div>
          <div>{{ content }}</div>
        </BsCardBody>
      </BsCard>
    </BsExpandTransition>
  </div>
</template>
