<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField v-model="field1" floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field1" floating-label placeholder="Select a date">
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field2" filled floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field2" filled floating-label placeholder="Select a date">
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field3" floating-label outlined>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field3" floating-label outlined placeholder="Select a date">
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField v-model="field4state" floating-label readonly>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            disabled
            floating-label
            prepend-icon="verified_filled"
          >
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field4state" filled floating-label readonly>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            disabled
            filled
            floating-label
            prepend-icon="verified_filled"
          >
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field4state" floating-label outlined readonly>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            disabled
            floating-label
            outlined
            prepend-icon="verified_filled"
          >
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Clearable Field</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsDateTimeField
            v-model="field5"
            class="mb-4"
            clear-button
            display-format="D"
            floating-label
          >
            <label>Field Label</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="field5"
            class="mb-4"
            clear-button
            display-format="DDD"
            filled
            floating-label
          >
            <label>Field Label</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="field5"
            class="mb-3"
            clear-button
            display-format="DDDD"
            floating-label
            outlined
          >
            <label>Field Label</label>
          </BsDateTimeField>
          <div class="mb-2">
            Field value: <span class="md-fw-semibold">{{ field5 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Display On Hover</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsDateTimeField
            v-model="field6"
            class="mb-4"
            clear-button
            display-format="DDD"
            floating-label
            open-on-hover
          >
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField
            v-model="field7"
            floating-label
            help-text="Choose the product expiry date"
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field7"
            :persistent-help-text="false"
            clear-button
            floating-label
            help-text="Choose the product expiry date"
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field8"
            filled
            floating-label
            help-text="Choose the product expiry date"
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field8"
            :persistent-help-text="false"
            filled
            floating-label
            help-text="Choose the product expiry date"
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field9"
            floating-label
            help-text="Choose the product expiry date"
            outlined
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field9"
            :persistent-help-text="false"
            floating-label
            help-text="Choose the product expiry date"
            outlined
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField v-model="field10" clear-button floating-label prepend-icon="person">
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field10" append-icon="event" clear-button floating-label>
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field10"
            clear-button
            floating-label
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field10" append-icon-outer="person" clear-button floating-label>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            clear-button
            filled
            floating-label
            prepend-icon="person_outlined_filled"
          >
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            append-icon="event_outlined_filled"
            clear-button
            filled
            floating-label
          >
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            clear-button
            filled
            floating-label
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            append-icon-outer="person"
            clear-button
            filled
            floating-label
          >
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            clear-button
            floating-label
            outlined
            prepend-icon="person_outlined_filled"
          >
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            append-icon="event_sharp"
            clear-button
            floating-label
            outlined
          >
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            clear-button
            floating-label
            outlined
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            append-icon-outer="person"
            clear-button
            floating-label
            outlined
          >
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Used With Other Input Controls</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10 pt-3">
          <BsTextField v-model="textField" class="mb-4" clear-button>
            <label class="col-md-4 col-xl-2 col-form-label">Your Name</label>
          </BsTextField>
          <BsDateTimeField
            v-model="dateField"
            class="mb-4"
            clear-button
            display-format="DDD"
            header-color="amber"
            picker-color="elegant-color"
          >
            <label class="col-md-4 col-xl-2 col-form-label">Birthdate</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="dateField"
            class="mb-4"
            display-format="D"
            header-color="amber"
            picker-color="elegant-color"
            readonly
          >
            <label class="col-md-4 col-xl-2 col-form-label">State Readonly</label>
          </BsDateTimeField>
          <BsDateTimeField v-model="dateField" class="mb-4" disabled>
            <label class="col-md-4 col-xl-2 col-form-label">State Disabled</label>
          </BsDateTimeField>
          <BsRadioGroup
            v-model="occupation"
            :column="1"
            :items="occupations"
            class="mb-3"
            color="default-color"
          >
            <label class="col-md-4 col-xl-2 col-form-label"> Occupation </label>
          </BsRadioGroup>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const field1 = ref();
const field2 = ref();
const field3 = ref();
const field4state = ref('2023-04-25');
const field5 = ref();
const field6 = ref();
const field7 = ref();
const field8 = ref();
const field9 = ref();
const field10 = ref();
const field11 = ref();
const field12 = ref();
const textField = ref();
const dateField = ref();
const occupation = ref();
const occupations = [
  { value: 'Computer and IT', label: 'Computer and IT' },
  { value: 'Scientists', label: 'Scientists and Research' },
  { value: 'Consultant', label: 'Consultant' },
  { value: 'Other', label: 'Other' },
];
</script>
