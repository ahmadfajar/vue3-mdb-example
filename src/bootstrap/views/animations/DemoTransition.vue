<script setup lang="ts">
import { type LinkItem } from '@shares/provider.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { ref } from 'vue';

const linkItems = [
  { text: 'Fade', location: { name: 'transition-effects' } },
  { text: 'Scale', location: { name: 'transition-effects-id', params: { id: 'scale' } } },
  { text: 'Slide Fade', location: { name: 'transition-effects-id', params: { id: 'slide-fade' } } },
  {
    text: 'Slide Fade Reverse',
    location: { name: 'transition-effects-id', params: { id: 'slide-fade-reverse' } },
  },
  {
    text: 'Slide Left Right',
    location: { name: 'transition-effects-id', params: { id: 'slide-left-right' } },
  },
  {
    text: 'Slide Right Left',
    location: { name: 'transition-effects-id', params: { id: 'slide-right-left' } },
  },
  {
    text: 'Slide Top Bottom',
    location: { name: 'transition-effects-id', params: { id: 'slide-top-bottom' } },
  },
  {
    text: 'Slide Bottom Top',
    location: { name: 'transition-effects-id', params: { id: 'slide-bottom-top' } },
  },
  {
    text: 'Expand Transition',
    location: { name: 'transition-effects-id', params: { id: 'expand-transition' } },
  },
  {
    text: 'Rotate Clock Wise',
    location: { name: 'transition-effects-id', params: { id: 'rotate-clock-wise' } },
  },
  {
    text: 'Rotate Clock Reverse',
    location: { name: 'transition-effects-id', params: { id: 'rotate-clock-reverse' } },
  },
  {
    text: 'Roll In-Out',
    location: { name: 'transition-effects-id', params: { id: 'roll-in-out' } },
  },
] satisfies LinkItem[];

const example1 = await import('./examples/TransitionExample1.vue?raw');
const rawTemplate1 = ref<string>();
const fmtVueTpl1 = ref<string | null | undefined>();
const fmtVueTsc1 = ref<string | null | undefined>();

rawTemplate1.value = parseVueTemplateTag(example1.default);
fmtVueTsc1.value = parseVueScriptTag(example1.default);

const rawCode = rawTemplate1.value.replace('{$transition}', 'name="fade"');
fmtVueTpl1.value = stripAndBeautifyTemplate(rawCode);

const active = ref(false);
const title = 'Content Title';
// prettier-ignore
const content = "Some quick example text to build on the card title and make up the bulk of the card's content.";
</script>

<template>
  <ContentLayout :links="linkItems">
    <h2 class="section-content">Fade</h2>
    <ShoutBox :tpl="fmtVueTpl1" :tsc="fmtVueTsc1" class="mt-4">
      <template #content>
        <div class="p-2 p-md-3" style="min-height: 225px">
          <BsButton class="mb-4" @click="active = !active"> Click Me</BsButton>
          <transition name="fade">
            <BsCard v-if="active" shadow>
              <BsCardBody>
                <BsCardContent type="title"> {{ title }} </BsCardContent>
                <div>{{ content }}</div>
              </BsCardBody>
            </BsCard>
          </transition>
        </div>
      </template>
    </ShoutBox>
  </ContentLayout>
</template>
