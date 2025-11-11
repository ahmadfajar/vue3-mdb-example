<script setup lang="ts">
import type { LinkItem } from '@bs/ContentLayout.vue';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { ref, watchEffect } from 'vue';
import { StringHelper } from 'vue-mdbootstrap';
import { useRoute } from 'vue-router';

const linkItems = ref<LinkItem[]>([]);
linkItems.value = [
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
];

const example1 = await import('./examples/TransitionExample1.vue?raw');
const example2 = await import('./examples/TransitionExample2.vue?raw');
const rawTemplate1 = ref<string>();
const fmtVueTpl1 = ref<string | null | undefined>();
const fmtVueTpl2 = ref<string | null | undefined>();
const fmtVueTsc1 = ref<string | null | undefined>();
const fmtVueTsc2 = ref<string | null | undefined>();
const route = useRoute();

rawTemplate1.value = parseVueTemplateTag(example1.default);
fmtVueTpl2.value = parseVueTemplateTag(example2.default);
fmtVueTsc1.value = parseVueScriptTag(example1.default);
fmtVueTsc2.value = parseVueScriptTag(example2.default);

watchEffect(() => {
  if (route.params.id !== 'expand-transition') {
    const rawCode = rawTemplate1.value?.replace(
      '{$transition}',
      `name="${(route.params.id as string) || 'fade'}"`
    );

    if (rawCode) {
      fmtVueTpl1.value = stripAndBeautifyTemplate(rawCode);
    }
  }
});

const fade = ref(false);
const expandTransition = ref(false);
const title = 'Content Title';
// prettier-ignore
const content = "Some quick example text to build on the card title and make up the bulk of the card's content.";
</script>

<template>
  <ContentLayout :link-items="linkItems">
    <template v-if="$route.params.id !== 'expand-transition'">
      <h2 class="section-content">
        {{ StringHelper.titleCase($route.params.id as string) || 'Fade' }}
      </h2>
      <ShowcaseBox :tpl="fmtVueTpl1" :tsc="fmtVueTsc1" class="mt-4">
        <template #content>
          <div class="p-2 p-md-3" style="min-height: 225px">
            <BsButton class="mb-4" @click="fade = !fade"> Click Me</BsButton>
            <transition :name="($route.params.id as string) || 'fade'">
              <BsCard v-if="fade" shadow>
                <BsCardBody>
                  <BsCardContent type="title"> {{ title }} </BsCardContent>
                  <div>{{ content }}</div>
                </BsCardBody>
              </BsCard>
            </transition>
          </div>
        </template>
      </ShowcaseBox>
    </template>

    <template v-else>
      <h2 class="section-content">Expand Transition</h2>
      <ShowcaseBox :tpl="fmtVueTpl2" :tsc="fmtVueTsc2" class="mt-4">
        <template #content>
          <div class="p-2 p-md-3" style="min-height: 310px">
            <BsButton class="mb-4" @click="expandTransition = !expandTransition">
              Click Me
            </BsButton>
            <BsExpandTransition>
              <BsCard v-if="expandTransition" shadow>
                <BsCardBody>
                  <BsCardContent type="title"> {{ title }} </BsCardContent>
                  <div>{{ content }}</div>
                  <div>{{ content }}</div>
                  <div>{{ content }}</div>
                </BsCardBody>
              </BsCard>
            </BsExpandTransition>
          </div>
        </template>
      </ShowcaseBox>
    </template>
  </ContentLayout>
</template>
