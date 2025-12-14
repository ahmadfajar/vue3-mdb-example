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
import { addWatcherForDefaultValue, loremIpsumText } from '@shares/showcaseDataApi.ts';
import { onBeforeUnmount, ref, watchEffect } from 'vue';

const props = defineProps<{ section?: string }>();

let example;
const rawTemplate = ref<string>();
const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const maskLoaderType = ref<string>('linear');
const showLoader = ref<boolean>(false);
const pageTitle = ref('Overview');

if (props.section === 'color-size') {
  example = await import('../examples/MaskLoaderExample2.vue?raw');
  pageTitle.value = 'Color and Size Example';
} else {
  example = await import('../examples/MaskLoaderExample1.vue?raw');
}

rawTemplate.value = parseVueTemplateTag(example.default);
fmtVueTsc.value = parseVueScriptTag(example.default);

addWatcherForDefaultValue({ refObj: maskLoaderType, default: 'linear' });

watchEffect(() => {
  let rawCode = changeMaskLoaderType(maskLoaderType, rawTemplate.value!);

  if (props.section === 'color-size') {
    rawCode = changeMaskLoaderSizeAndColor(maskLoaderType, rawCode);
  }

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
});

const maskLoaderTypes = dsMaskLoaderTypes();
const contentCls = [
  'h-full min-h-40 flex items-center justify-center',
  'py-8 px-3 lg:px-8 md:rounded-lg',
];

onBeforeUnmount(() => {
  maskLoaderTypes.proxy.destroy();
});
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-5">
      <h2>{{ pageTitle }}</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <h5 class="mt-2">Configuration options:</h5>

        <BsCombobox v-model="maskLoaderType" :data-source="maskLoaderTypes" filled floating-label>
          <label>Type Variant:</label>
        </BsCombobox>
      </template>

      <template #content>
        <div :class="contentCls">
          <div v-if="section === 'color-size'">
            <BsCard class="overflow-hidden max-w-120" shadow>
              <BsCardBody>
                <BsCardContent type="title">
                  {{ maskLoaderTypes.proxy.find('value', maskLoaderType)?.label }} Loader
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
                  {{ maskLoaderTypes.proxy.find('value', maskLoaderType)?.label }} Loader
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
