<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { ref, watchEffect } from 'vue';
import { StringHelper } from 'vue-mdbootstrap';
import Example from '../examples/TransitionExample1.vue?raw';

const props = defineProps<{ transition: string }>();

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();
const active = ref(false);

rawTemplate.value = parseVueTemplateTag(Example);
fmtVueTsc.value = parseVueScriptTag(Example);

watchEffect(() => {
  if (props.transition !== 'expand-transition') {
    const rawCode = rawTemplate.value?.replace(
      '{$transition}',
      `name="${props.transition || 'fade'}"`
    );

    if (rawCode) {
      fmtVueTpl.value = stripAndBeautifyTemplate(rawCode, false);
    }
  }
});

const title = 'Content Title';
// prettier-ignore
const content = "Some quick example text to build on the card title and make up the bulk of the card's content.";
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>
        {{ StringHelper.titleCase(transition) || 'Fade' }}
      </h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="px-3 py-4 p-md-5 overflow-hidden" style="min-height: 18rem">
          <BsButton class="mb-4" @click="active = !active"> Click Me</BsButton>
          <transition :name="transition || 'fade'">
            <BsCard v-if="active" shadow style="max-width: 500px">
              <BsCardBody>
                <BsCardContent type="title"> {{ title }}</BsCardContent>
                <div>{{ content }}</div>
              </BsCardBody>
            </BsCard>
          </transition>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
