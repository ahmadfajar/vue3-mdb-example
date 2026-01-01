<script setup lang="ts">
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import { ref, watchEffect } from 'vue';
import Example from '../examples/DatePickerExample3.vue?raw';

const fmtVueTpl = ref<string>();
const fmtVueTsc = ref<string>();
const mode = ref('date');
const picker1 = ref<string>();

fmtVueTsc.value = parseVueScriptTag(Example);

watchEffect(() => {
  let rawCode = parseVueTemplateTag(Example);

  picker1.value = undefined;
  if (mode.value !== 'date') {
    rawCode = rawCode.replace('{$modes}', `mode="${mode.value}"`);
  }

  fmtVueTpl.value = stripAndBeautifyTemplate(rawCode, false);
});

const contentCls = ['h-full min-h-40 flex items-center justify-center', 'py-8 px-3 lg:px-8'];
</script>

<template>
  <div class="w-full">
    <div class="section-content mb-4">
      <h2>Selection Modes</h2>
    </div>
    <ShoutBox :tpl="fmtVueTpl" :tsc="fmtVueTsc">
      <template #side-panel>
        <div class="flex flex-col ps-2">
          <h6 class="my-2">Select DatePicker mode:</h6>
          <BsRadio v-model="mode" value="date">
            Date <span class="italic text-subtle-secondary">(default)</span>
          </BsRadio>
          <BsRadio v-model="mode" value="datetime">DateTime</BsRadio>
          <BsRadio v-model="mode" value="month">Month</BsRadio>
          <BsRadio v-model="mode" value="year">Year</BsRadio>
          <BsRadio v-model="mode" value="time">Time</BsRadio>
        </div>
      </template>

      <template #content>
        <div :class="contentCls">
          <div>
            <Transition mode="out-in" name="fade">
              <BsDatePicker v-model="picker1" :key="mode" :mode="mode" class="md-shadow" />
            </Transition>
            <div class="mt-3">
              Output value: <span class="font-weight-semibold">{{ picker1 }}</span>
            </div>
          </div>
        </div>
      </template>
    </ShoutBox>
  </div>
</template>
