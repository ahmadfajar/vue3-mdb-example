<script setup lang="ts">
import { ref } from 'vue';

const fieldState = ref('2023-04-25');
const field1 = ref();
const field2 = ref();
const field3 = ref();
const field4 = ref();
const field5 = ref();
const field6 = ref();
const field7 = ref();
const field8 = ref();
const field9 = ref();
const field10 = ref();
const field11 = ref();
const field12 = ref();
</script>

<template>
  <div class="docs-body mx-auto mb-6">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="mb-4">
            <BsDateTimeField v-model="field1">
              <label class="col-md-4 col-form-label">Field Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-4">
            <BsDateTimeField v-model="fieldState" readonly>
              <label class="col-md-4 col-form-label">State Readonly</label>
            </BsDateTimeField>
          </div>
          <div class="mb-3">
            <BsDateTimeField v-model="fieldState" disabled>
              <label class="col-md-4 col-form-label">State Disabled</label>
            </BsDateTimeField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-3">Default</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-md-8 col-lg-7">
          <div class="mb-4">
            <BsDateTimeField v-model="field2">
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsDateTimeField>
          </div>
          <div class="mb-4">
            <BsDateTimeField v-model="field2" floating-label>
              <label>Floating Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-3">
            <BsDateTimeField v-model="field2" floating-label placeholder="Enter date">
              <label>Field Label</label>
            </BsDateTimeField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-md-8 col-lg-7">
          <div class="mb-4">
            <BsDateTimeField v-model="field3" filled>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsDateTimeField>
          </div>
          <div class="mb-4">
            <BsDateTimeField v-model="field3" filled floating-label>
              <label>Floating Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-3">
            <BsDateTimeField v-model="field3" filled floating-label placeholder="Enter date">
              <label>Field Label</label>
            </BsDateTimeField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-md-8 col-lg-7">
          <div class="mb-6">
            <BsDateTimeField v-model="field4" outlined>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsDateTimeField>
          </div>
          <div class="mb-6">
            <BsDateTimeField v-model="field4" floating-label outlined>
              <label>Floating Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-3">
            <BsDateTimeField v-model="field4" floating-label outlined placeholder="Enter date">
              <label>Field Label</label>
            </BsDateTimeField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField v-model="fieldState" floating-label readonly>
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="fieldState" disabled floating-label>
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="fieldState"
            filled
            floating-label
            prepend-icon="verified_filled"
            readonly
          >
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="fieldState"
            disabled
            filled
            floating-label
            prepend-icon="verified_filled"
          >
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="fieldState"
            floating-label
            outlined
            prepend-icon="verified"
            readonly
          >
            <label>State Readonly</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="fieldState"
            disabled
            floating-label
            outlined
            prepend-icon="verified"
          >
            <label>State Disabled</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsDateTimeField
            v-model="field5"
            floating-label
            help-text="Choose the product expiry date"
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field5"
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
            v-model="field6"
            filled
            floating-label
            help-text="Choose the product expiry date"
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field6"
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
            v-model="field7"
            floating-label
            help-text="Choose the product expiry date"
            outlined
          >
            <label>Product Expiry</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field7"
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
          <BsDateTimeField v-model="field8" floating-label prepend-icon="person">
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field8" append-icon="event" floating-label>
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field8" floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field8" append-icon-outer="person" floating-label>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field9"
            filled
            floating-label
            prepend-icon="person_outlined_filled"
          >
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field9"
            append-icon="event_outlined_filled"
            filled
            floating-label
          >
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field9" filled floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field9" append-icon-outer="person" filled floating-label>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField
            v-model="field10"
            floating-label
            outlined
            prepend-icon="person_outlined_filled"
          >
            <label>Prepend</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field10" append-icon="event_sharp" floating-label outlined>
            <label>Append</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field10" floating-label outlined prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsDateTimeField>
        </div>
        <div class="col">
          <BsDateTimeField v-model="field10" append-icon-outer="person" floating-label outlined>
            <label>Append Outer</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Other Features</h2>
    <h4 class="mt-3">Clearable</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-md-8 col-lg-7">
          <div class="mb-5">
            <BsDateTimeField v-model="field11" clear-button display-format="D" floating-label>
              <label>Field Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-5">
            <BsDateTimeField
              v-model="field11"
              clear-button
              display-format="DDD"
              filled
              floating-label
            >
              <label>Field Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-3">
            <BsDateTimeField
              v-model="field11"
              clear-button
              display-format="DDDD"
              floating-label
              outlined
            >
              <label>Field Label</label>
            </BsDateTimeField>
          </div>
          <div class="mb-2">
            Field value: <span class="font-weight-semibold">{{ field11 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Display On Hover</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mb-2">
        <div class="col-12 col-md-8 col-lg-6">
          <BsDateTimeField
            v-model="field12"
            clear-button
            display-format="DDD"
            filled
            floating-label
            open-on-hover
          >
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Custom Color</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mb-2">
        <div class="col-12 col-md-8 col-lg-6">
          <BsDateTimeField
            v-model="field12"
            clear-button
            display-format="DDD"
            filled
            floating-label
            header-color="bg-orange"
            picker-button="light"
            picker-selected-color="warning"
            surface-cls="bg-dark text-white"
          >
            <label>Field Label</label>
          </BsDateTimeField>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>
