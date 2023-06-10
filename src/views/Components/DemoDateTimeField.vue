<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField
            v-model="field1"
            floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field1"
            placeholder="Select a date"
            floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field2"
            floating-label
            filled>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field2"
            filled
            floating-label
            placeholder="Select a date">
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field3"
            floating-label
            outlined>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field3"
            floating-label
            outlined
            placeholder="Select a date">
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Field State
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            readonly
            floating-label>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            disabled
            floating-label
            prepend-icon="verified_filled">
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            readonly
            floating-label
            filled>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            disabled
            filled
            floating-label
            prepend-icon="verified_filled">
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            readonly
            floating-label
            outlined>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field4state"
            disabled
            floating-label
            outlined
            prepend-icon="verified_filled">
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Clearable Field
    </h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsDateTimeField
            v-model="field5"
            display-format="D"
            class="mb-4"
            clear-button
            floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="field5"
            display-format="DDD"
            class="mb-4"
            clear-button
            filled
            floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="field5"
            display-format="DDDD"
            class="mb-3"
            clear-button
            floating-label
            outlined>
            <label>Field Label</label>
          </BsDateTimeField>
          <div class="mb-2">
            Field value: <span class="md-fw-semibold">{{ field5 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Display On Hover
    </h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsDateTimeField
            v-model="field6"
            display-format="DDD"
            class="mb-4"
            clear-button
            open-on-hover
            floating-label>
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Help Text
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField
            v-model="field7"
            help-text="Choose the product expiry date"
            floating-label>
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field7"
            :persistent-help-text="false"
            help-text="Choose the product expiry date"
            clear-button
            floating-label>
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field8"
            help-text="Choose the product expiry date"
            filled
            floating-label>
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field8"
            :persistent-help-text="false"
            help-text="Choose the product expiry date"
            filled
            floating-label>
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field9"
            help-text="Choose the product expiry date"
            outlined
            floating-label>
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field9"
            :persistent-help-text="false"
            help-text="Choose the product expiry date"
            outlined
            floating-label>
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Icons
    </h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField
            v-model="field10"
            prepend-icon="person"
            clear-button
            floating-label>
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field10"
            append-icon="event"
            clear-button
            floating-label>
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field10"
            prepend-icon-outer="person"
            clear-button
            floating-label>
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field10"
            append-icon-outer="person"
            clear-button
            floating-label>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            prepend-icon="person"
            clear-button
            filled
            floating-label>
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            append-icon="event"
            clear-button
            filled
            floating-label>
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            prepend-icon-outer="person"
            clear-button
            filled
            floating-label>
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field11"
            append-icon-outer="person"
            clear-button
            filled
            floating-label>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            prepend-icon="person"
            clear-button
            floating-label
            outlined>
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            append-icon="event"
            clear-button
            floating-label
            outlined>
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            prepend-icon-outer="person"
            clear-button
            floating-label
            outlined>
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field12"
            append-icon-outer="person"
            clear-button
            floating-label
            outlined>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">
      Used With Other Input Controls
    </h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10 pt-3">
          <BsTextField
            v-model="textField"
            class="mb-4"
            clear-button>
            <label class="col-md-4 col-xl-2 col-form-label">Your Name</label>
          </BsTextField>
          <BsDateTimeField
            v-model="dateField"
            class="mb-4"
            display-format="DDD"
            header-color="amber"
            picker-color="elegant-color"
            clear-button>
            <label class="col-md-4 col-xl-2 col-form-label">Birthdate</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="dateField"
            class="mb-4"
            display-format="D"
            header-color="amber"
            picker-color="elegant-color"
            readonly>
            <label class="col-md-4 col-xl-2 col-form-label">State Readonly</label>
          </BsDateTimeField>
          <BsDateTimeField
            v-model="dateField"
            class="mb-4"
            disabled>
            <label class="col-md-4 col-xl-2 col-form-label">State Disabled</label>
          </BsDateTimeField>
          <BsRadioGroup
            v-model="occupation"
            :items="occupations"
            :column="1"
            class="mb-3"
            color="default-color">
            <label class="col-md-4 col-xl-2 col-form-label">
              Occupation
            </label>
          </BsRadioGroup>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const field1 = ref()
const field2 = ref()
const field3 = ref()
const field4state = ref('2023-04-25')
const field5 = ref()
const field6 = ref()
const field7 = ref()
const field8 = ref()
const field9 = ref()
const field10 = ref()
const field11 = ref()
const field12 = ref()
const textField = ref()
const dateField = ref()
const occupation = ref()
const occupations = [
  { value: 'Computer and IT', label: 'Computer and IT' },
  { value: 'Scientists', label: 'Scientists and Research' },
  { value: 'Consultant', label: 'Consultant' },
  { value: 'Other', label: 'Other' }
]
</script>
