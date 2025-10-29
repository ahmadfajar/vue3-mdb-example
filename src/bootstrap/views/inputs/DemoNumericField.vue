<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-9 col-xl-6">
          <div class="mb-3">
            <BsNumericField v-model="numField1">
              <label class="col-md-4 col-form-label">Field Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField v-model="numField1" readonly>
              <label class="col-md-4 col-form-label">State Readonly</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField v-model="numField1" disabled>
              <label class="col-md-4 col-form-label">State Disabled</label>
            </BsNumericField>
          </div>
          <div class="mb-2">
            Value: <span class="font-weight-semibold">{{ numField1 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-3">Default</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsNumericField>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField floating-label>
              <label>Floating Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField floating-label placeholder="Enter number">
              <label>Field Label</label>
            </BsNumericField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsNumericField filled>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsNumericField>
          </div>
          <hr />
          <div class="mb-3">
            <BsNumericField filled floating-label>
              <label>Floating Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField filled floating-label placeholder="Enter number">
              <label>Field Label</label>
            </BsNumericField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Rounded Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsNumericField filled rounded>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsNumericField>
          </div>
          <hr />
          <div class="mb-3">
            <BsNumericField filled floating-label rounded>
              <label>Floating Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField filled floating-label placeholder="Enter number" rounded>
              <label>Field Label</label>
            </BsNumericField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsNumericField outlined>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsNumericField>
          </div>
          <hr />
          <div class="mb-4">
            <BsNumericField floating-label outlined>
              <label>Floating Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField floating-label outlined placeholder="Enter number">
              <label>Field Label</label>
            </BsNumericField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Rounded Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2 mt-3">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-4">
            <BsNumericField outlined rounded>
              <label class="col-md-4 col-xl-3 col-form-label">Classic Field</label>
            </BsNumericField>
          </div>
          <hr />
          <div class="mb-4">
            <BsNumericField floating-label outlined rounded>
              <label>Floating Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField floating-label outlined placeholder="Enter number" rounded>
              <label>Field Label</label>
            </BsNumericField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsNumericField v-model="numField5" floating-label readonly>
            <label>State Readonly</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField v-model="numField5" disabled floating-label>
            <label>State Disabled</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField5"
            filled
            floating-label
            prepend-icon="paid_filled"
            readonly
          >
            <label>State Readonly</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField5"
            disabled
            filled
            floating-label
            prepend-icon="paid_filled"
          >
            <label>State Disabled</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField v-model="numField5" floating-label outlined prepend-icon="paid" readonly>
            <label>State Readonly</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField v-model="numField5" disabled floating-label outlined prepend-icon="paid">
            <label>State Disabled</label>
          </BsNumericField>
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
            clear-button
            floating-label
            spin-button-placement="left"
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
            clear-button
            filled
            floating-label
            spin-button-placement="left"
          >
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField v-model="numField3" clear-button floating-label outlined>
            <label>Field Label</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            v-model="numField3"
            clear-button
            floating-label
            outlined
            spin-button-placement="left"
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
            floating-label
            outlined
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
            outlined
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
          <BsNumericField floating-label help-text="Type the product price per-unit">
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            :persistent-help-text="false"
            clear-button
            floating-label
            help-text="Type the product price per-unit"
          >
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField filled floating-label help-text="Type the product price per-unit">
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            :persistent-help-text="false"
            filled
            floating-label
            help-text="Type the product price per-unit"
          >
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField floating-label help-text="Type the product price per-unit" outlined>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField
            :persistent-help-text="false"
            floating-label
            help-text="Type the product price per-unit"
            outlined
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
          <BsNumericField floating-label prepend-icon="bug_report">
            <label>Prepend</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon="bug_report" floating-label>
            <label>Append</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField floating-label prepend-icon-outer="bug_report">
            <label>Prepend Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon-outer="bug_report" floating-label>
            <label>Append Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField filled floating-label prepend-icon="bug_report">
            <label>Prepend</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon="bug_report" filled floating-label>
            <label>Append</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField filled floating-label prepend-icon-outer="bug_report">
            <label>Prepend Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon-outer="bug_report" filled floating-label>
            <label>Append Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField floating-label outlined prepend-icon="bug_report">
            <label>Prepend</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon="bug_report" floating-label outlined>
            <label>Append</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField floating-label outlined prepend-icon-outer="bug_report">
            <label>Prepend Outer</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField append-icon-outer="bug_report" floating-label outlined>
            <label>Append Outer</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Other Features</h2>
    <h4 class="mt-3">Clearable</h4>
    <DemoBlock class="mt-4">
      <div class="row ps-2">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="mb-3">
            <BsNumericField v-model="numField2" clear-button floating-label>
              <label>Field Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField v-model="numField2" clear-button filled floating-label>
              <label>Field Label</label>
            </BsNumericField>
          </div>
          <div class="mb-3">
            <BsNumericField v-model="numField2" clear-button floating-label outlined>
              <label>Field Label</label>
            </BsNumericField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Prefixes and Suffixes</h4>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsNumericField prefix="Rp." floating-label>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField floating-label suffix="Kg">
            <label>Unit Weight</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prefix="Rp." filled floating-label>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField filled floating-label suffix="Kg">
            <label>Unit Weight</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField prefix="Rp." floating-label outlined>
            <label>Unit Price</label>
          </BsNumericField>
        </div>
        <div class="col">
          <BsNumericField floating-label outlined suffix="Kg">
            <label>Unit Weight</label>
          </BsNumericField>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const numField1 = ref<number>();
const numField2 = ref<number>();
const numField3 = ref<number>();
const numField4 = ref<number>();
const numField5 = ref<number>(1500);
</script>
