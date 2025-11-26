<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { ref, watchEffect } from 'vue';
import { StringHelper } from 'vue-mdbootstrap';

const props = defineProps<{ transition: string }>();

const example = await import('../examples/TransitionExample1.vue?raw');

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string | null | undefined>();
const fmtVueTsc = ref<string | null | undefined>();
const active = ref(false);

rawTemplate.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

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
    <div class="section-content mb-5">
      <h2>
        {{ StringHelper.titleCase(transition) || 'Fade' }}
      </h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #content>
        <div class="px-3 py-6 md:p-8 min-h-65 overflow-hidden">
          <BsButton class="mb-4" @click="active = !active"> Click Me</BsButton>
          <transition :name="transition || 'fade'">
            <BsCard v-if="active" class="max-w-125" shadow>
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
