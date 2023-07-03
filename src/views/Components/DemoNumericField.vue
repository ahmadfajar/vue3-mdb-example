<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 pt-3">
          <BsNumericField v-model="numField1" class="mb-4" floating-label>
            <label>Field Label</label>
          </BsNumericField>
          <BsNumericField v-model="numField1" class="mb-4" readonly floating-label>
            <label>State Readonly</label>
          </BsNumericField>
          <BsNumericField v-model="numField1" class="mb-4" disabled floating-label>
            <label>State Disabled</label>
          </BsNumericField>
          <div class="mb-2">
            Field value: <span class="md-fw-semibold">{{ numField1 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Clearable Field</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsNumericField v-model="numField2" class="mb-4" clear-button floating-label>
            <label>Field Label</label>
          </BsNumericField>
          <BsNumericField v-model="numField2" class="mb-4" clear-button filled floating-label>
            <label>Field Label</label>
          </BsNumericField>
          <BsNumericField v-model="numField2" class="mb-4" clear-button floating-label outlined>
            <label>Field Label</label>
          </BsNumericField>
          <div class="mb-2">
            Field value: <span class="md-fw-semibold">{{ numField2 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Action Button Variants</h2>
    <h4 class="mt-3">Spin Button</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsNumericField v-model="numField3" clear-button floating-label>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField3"
            spin-button-placement="left"
            clear-button
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField v-model="numField3" clear-button filled floating-label>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField3"
            spin-button-placement="left"
            clear-button
            filled
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField v-model="numField3" clear-button outlined floating-label>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField3"
            spin-button-placement="left"
            clear-button
            outlined
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Plus-Minus Button</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsNumericField
            v-model="numField4"
            :spin-button="false"
            action-button
            clear-button
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField4"
            :spin-button="false"
            action-button
            action-button-placement="both"
            clear-button
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField4"
            :spin-button="false"
            action-button
            clear-button
            filled
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField4"
            :spin-button="false"
            action-button
            action-button-placement="both"
            clear-button
            filled
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField4"
            :spin-button="false"
            action-button
            clear-button
            outlined
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField4"
            :spin-button="false"
            action-button
            action-button-placement="both"
            clear-button
            outlined
            floating-label
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsNumericField help-text="Type the product price per-unit" floating-label>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            :persistent-help-text="false"
            help-text="Type the product price per-unit"
            clear-button
            floating-label
          >
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField help-text="Type the product price per-unit" filled floating-label>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            :persistent-help-text="false"
            help-text="Type the product price per-unit"
            filled
            floating-label
          >
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField help-text="Type the product price per-unit" outlined floating-label>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            :persistent-help-text="false"
            help-text="Type the product price per-unit"
            outlined
            floating-label
          >
            <label>Unit Price</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsNumericField prepend-icon="bug_report" clear-button floating-label>
            <label>Prepend</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon="bug_report" clear-button floating-label>
            <label>Append</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prepend-icon-outer="bug_report" clear-button floating-label>
            <label>Prepend Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon-outer="bug_report" clear-button floating-label>
            <label>Append Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prepend-icon="bug_report" clear-button filled floating-label>
            <label>Prepend</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon="bug_report" clear-button filled floating-label>
            <label>Append</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prepend-icon-outer="bug_report" clear-button filled floating-label>
            <label>Prepend Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon-outer="bug_report" clear-button filled floating-label>
            <label>Append Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prepend-icon="bug_report" clear-button floating-label outlined>
            <label>Prepend</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon="bug_report" clear-button floating-label outlined>
            <label>Append</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prepend-icon-outer="bug_report" clear-button floating-label outlined>
            <label>Prepend Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon-outer="bug_report" clear-button floating-label outlined>
            <label>Append Outer</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const numField1 = ref<number>();
const numField2 = ref<number>();
const numField3 = ref<number>();
const numField4 = ref<number>();
</script>
