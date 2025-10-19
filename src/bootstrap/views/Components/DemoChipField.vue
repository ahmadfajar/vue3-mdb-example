<template>
  <div class="docs-body container-lg mx-auto">
    <h2>Overview</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField v-model="chip1" floating-label>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip1" floating-label placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip2" filled floating-label>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip2" filled floating-label placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip3" floating-label outlined>
            <label>Field Label</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip3" floating-label outlined placeholder="Add Tags...">
            <label>Field Label</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField v-model="chip4state" floating-label readonly>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip4state" disabled floating-label prepend-icon="email_outlined">
            <label>State Disabled</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip4state" filled floating-label readonly>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip4state"
            disabled
            filled
            floating-label
            prepend-icon="email_outlined"
          >
            <label>State Disabled</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip4state" floating-label outlined readonly>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip4state"
            disabled
            floating-label
            outlined
            prepend-icon="email_outlined"
          >
            <label>State Disabled</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Clearable Field</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip5"
            class="mb-4"
            clear-button
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip5"
            class="mb-4"
            clear-button
            filled
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip5"
            class="mb-4"
            clear-button
            floating-label
            outlined
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <div class="mb-2">
            Field values: <span class="md-fw-semibold">{{ chip5 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Deletable Chip</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip6"
            chip-deletable
            class="mb-4"
            clear-button
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip6"
            chip-deletable
            class="mb-4"
            clear-button
            filled
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip6"
            chip-deletable
            class="mb-4"
            clear-button
            floating-label
            outlined
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <div class="mb-2">
            Field value: <span class="md-fw-semibold">{{ chip6 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Chip Styles</h2>
    <h4 class="mt-3">Chip Color</h4>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip7"
            chip-color="secondary"
            chip-deletable
            class="mb-4"
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip7"
            chip-color="indigo"
            chip-deletable
            class="mb-4"
            filled
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip7"
            chip-color="success"
            chip-deletable
            class="mb-2"
            floating-label
            outlined
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Pill Chip Style</h4>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip8"
            chip-color="unique-color"
            chip-deletable
            chip-pill
            class="mb-4"
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip8"
            chip-color="primary"
            chip-deletable
            chip-pill
            class="mb-4"
            filled
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip8"
            chip-color="secondary-color"
            chip-deletable
            chip-pill
            class="mb-2"
            floating-label
            outlined
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h4 class="mt-5">Outlined Chip Style</h4>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-md-11 col-lg-10 col-xl-8 mt-2">
          <BsChipField
            v-model="chip9"
            chip-color="danger"
            chip-deletable
            chip-outlined
            chip-pill
            class="mb-4"
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip9"
            chip-color="purple"
            chip-deletable
            chip-outlined
            class="mb-4"
            filled
            floating-label
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
          <BsChipField
            v-model="chip9"
            chip-color="blue-green"
            chip-deletable
            chip-outlined
            class="mb-2"
            floating-label
            outlined
            placeholder="Add Tags..."
          >
            <label>Field Label</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Help Text</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField
            v-model="chip13"
            chip-deletable
            floating-label
            help-text="Enter product keywords or tags"
          >
            <label>Product Tags</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip14"
            :persistent-help-text="false"
            chip-deletable
            chip-pill
            clear-button
            floating-label
            help-text="Enter keywords for your website"
          >
            <label>Website Keywords</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip13"
            chip-deletable
            filled
            floating-label
            help-text="Enter product keywords or tags"
          >
            <label>Product Tags</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip14"
            :persistent-help-text="false"
            chip-deletable
            chip-pill
            filled
            floating-label
            help-text="Enter keywords for your website"
          >
            <label>Website Keywords</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip13"
            chip-deletable
            floating-label
            help-text="Enter product keywords or tags"
            outlined
          >
            <label>Product Tags</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip14"
            :persistent-help-text="false"
            chip-deletable
            chip-pill
            floating-label
            help-text="Enter keywords for your website"
            outlined
          >
            <label>Website Keywords</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Icons</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField v-model="chip10" clear-button floating-label prepend-icon="person">
            <label>Prepend</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip10" append-icon="person" clear-button floating-label>
            <label>Append</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip10" clear-button floating-label prepend-icon-outer="person">
            <label>Prepend Outer</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chip10" append-icon-outer="person" clear-button floating-label>
            <label>Append Outer</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip11"
            clear-button
            filled
            floating-label
            prepend-icon="person_filled"
          >
            <label>Prepend</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip11"
            append-icon="person_filled"
            clear-button
            filled
            floating-label
          >
            <label>Append</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip11"
            clear-button
            filled
            floating-label
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip11"
            append-icon-outer="person"
            clear-button
            filled
            floating-label
          >
            <label>Append Outer</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip12"
            clear-button
            floating-label
            outlined
            prepend-icon="person_filled"
          >
            <label>Prepend</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip12"
            append-icon="person_filled"
            clear-button
            floating-label
            outlined
          >
            <label>Append</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip12"
            clear-button
            floating-label
            outlined
            prepend-icon-outer="person"
          >
            <label>Prepend Outer</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chip12"
            append-icon-outer="person"
            clear-button
            floating-label
            outlined
          >
            <label>Append Outer</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>
    <h2 class="mt-5">Used With Other Input Controls</h2>
    <DemoBlock class="mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-10 pt-3">
          <BsTextField v-model="textField" class="mb-4" clear-button>
            <label class="col-md-3 col-xl-2 col-form-label">Your Name</label>
          </BsTextField>
          <BsChipField
            v-model="chipField"
            chip-color="secondary-color"
            chip-pill
            class="mb-4"
            clear-button
          >
            <label class="col-md-3 col-xl-2 col-form-label">Interests</label>
          </BsChipField>
          <BsChipField
            v-model="chipField"
            append-icon="face"
            chip-color="secondary"
            class="mb-4"
            readonly
          >
            <label class="col-md-3 col-xl-2 col-form-label">State Readonly</label>
          </BsChipField>
          <BsChipField
            v-model="chipField"
            append-icon="face"
            chip-color="secondary"
            chip-outlined
            class="mb-4"
            disabled
          >
            <label class="col-md-3 col-xl-2 col-form-label">State Disabled</label>
          </BsChipField>
          <BsRadioGroup
            v-model="occupation"
            :column="2"
            :items="occupations"
            class="mb-3"
            color="default-color"
          >
            <label class="col-md-3 col-xl-2 col-form-label"> Occupation </label>
          </BsRadioGroup>
        </div>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const chip1 = ref('');
const chip2 = ref('');
const chip3 = ref('');
const chip4state = ref(['VueJs', 'Component']);
const chip5 = ref([]);
const chip6 = ref('');
const chip7 = ref([]);
const chip8 = ref([]);
const chip9 = ref([]);
const chip10 = ref([]);
const chip11 = ref([]);
const chip12 = ref([]);
const chip13 = ref([]);
const chip14 = ref([]);
const textField = ref();
const chipField = ref([]);
const occupation = ref();
const occupations = [
  { value: 'Computer and IT', label: 'Computer and IT' },
  { value: 'Scientists', label: 'Scientists and Research' },
  { value: 'Consultant', label: 'Consultant' },
  { value: 'Other', label: 'Other' },
];
</script>
