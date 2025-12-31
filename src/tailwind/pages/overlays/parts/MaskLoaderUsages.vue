<script setup lang="ts">
import {
  changeMaskLoaderSizeAndColor,
  changeMaskLoaderType,
  dsMaskLoaderTypes,
} from '@shares/maskloaderApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { loremIpsumText } from '@shares/showcaseDataApi.ts';
import { ref, watchEffect } from 'vue';
import Example1 from '../examples/MaskLoaderExample1.vue?raw';
import Example2 from '../examples/MaskLoaderExample2.vue?raw';

const props = defineProps<{ section?: string }>();

const rawTemplate = ref<string>();
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const maskLoaderType = ref<string>('linear');
const showLoader = ref<boolean>(false);
const pageTitle = ref('Overview');

if (props.section === 'color-size') {
  pageTitle.value = 'Color and Size Example';
  rawTemplate.value = parseVueTemplateTag(Example2);
  fmtVueTsc.value = parseVueScriptTag(Example2);
} else {
  rawTemplate.value = parseVueTemplateTag(Example1);
  fmtVueTsc.value = parseVueScriptTag(Example1);
}

watchEffect(() => {
  let rawCode = changeMaskLoaderType(maskLoaderType, rawTemplate.value!);

  if (props.section === 'color-size') {
    rawCode = changeMaskLoaderSizeAndColor(maskLoaderType, rawCode);
  }

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const maskLoaderTypes = dsMaskLoaderTypes();
const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="ps-2 mt-2">
          <BsRadioGroup v-model="maskLoaderType" :items="maskLoaderTypes" column="1">
            <div class="col-form-label">Select mask loader type</div>
          </BsRadioGroup>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div v-if="section === 'color-size'">
            <BsCard class="overflow-hidden max-w-120" shadow>
              <BsCardBody>
                <BsCardContent type="title">
                  {{ maskLoaderTypes.find((it) => it.value === maskLoaderType)?.label }} Loader
                </BsCardContent>
                <p>{{ loremIpsumText }}</p>
              </BsCardBody>
              <BsMaskLoader
                v-model:show="showLoader"
                :spinner-thickness="maskLoaderType.startsWith('linear') ? 8 : undefined"
                :type="maskLoaderType"
                overlay-color="#064E40"
                spinner-color="danger"
                spinner-diameter="60"
              />
            </BsCard>
            <BsButton class="mt-4" @click="showLoader = !showLoader"> Toggle Loader</BsButton>
          </div>
          <div v-else>
            <BsCard class="overflow-hidden max-w-120" shadow>
              <BsCardBody>
                <BsCardContent type="title">
                  {{ maskLoaderTypes.find((it) => it.value === maskLoaderType)?.label }} Loader
                </BsCardContent>
                <p>{{ loremIpsumText }}</p>
              </BsCardBody>
              <BsMaskLoader v-model:show="showLoader" :type="maskLoaderType" />
            </BsCard>
            <BsButton class="mt-4" @click="showLoader = !showLoader"> Toggle Loader</BsButton>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
