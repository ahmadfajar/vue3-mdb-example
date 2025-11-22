<script setup lang="ts">
import { ref } from 'vue';

const chipState = ref(['VueJs', 'Bootstrap', 'Tailwind']);
const chip1 = ref('');
const chip2 = ref([]);
const chip3 = ref([]);
const chip4 = ref([]);
const chip5 = ref([]);
const chip6 = ref([]);
const chip7 = ref([]);
const chip8 = ref([]);
const chip9 = ref([]);
const chip10 = ref([]);
const chip11 = ref([]);
const chip12 = ref([]);
const chip13 = ref([]);
const chip14 = ref([]);
</script>

<template>
  <div class="docs-body mx-auto mb-6">
    <h2>Basic Examples</h2>
    <DemoBlock class="mt-4">
      <div class="row mb-3">
        <div class="col-12 col-lg-11 col-xl-9">
          <BsChipField v-model="chip1" placeholder="Add Tags...">
            <label class="md:w-35 col-form-label">Field Label</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Style Variants</h2>
    <h4 class="mt-3">Default</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-lg-11 col-xl-9">
          <div class="mb-3">
            <BsChipField v-model="chip2" placeholder="Add Tags...">
              <label class="md:w-35 col-form-label">Classic Field</label>
            </BsChipField>
          </div>
          <div class="mb-4">
            <BsChipField v-model="chip2" floating-label>
              <label>Floating Label</label>
            </BsChipField>
          </div>
          <div class="mb-3">
            <BsChipField v-model="chip2" floating-label placeholder="Add Tags...">
              <label>Field Label</label>
            </BsChipField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Filled</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-lg-11 col-xl-9">
          <div class="mb-5">
            <BsChipField v-model="chip3" filled placeholder="Add Tags...">
              <label class="md:w-35 col-xl-2 col-form-label" style="padding-top: 10px">
                Classic Field
              </label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField v-model="chip3" filled floating-label>
              <label>Floating Label</label>
            </BsChipField>
          </div>
          <div class="mb-3">
            <BsChipField v-model="chip3" filled floating-label placeholder="Add Tags...">
              <label>Field Label</label>
            </BsChipField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-12 col-lg-11 col-xl-9">
          <div class="mb-5">
            <BsChipField v-model="chip4" outlined placeholder="Add Tags...">
              <label class="md:w-35 col-form-label" style="padding-top: 14px">
                Classic Field
              </label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField v-model="chip4" floating-label outlined>
              <label>Floating Label</label>
            </BsChipField>
          </div>
          <div class="mb-3">
            <BsChipField v-model="chip4" floating-label outlined placeholder="Add Tags...">
              <label>Field Label</label>
            </BsChipField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Field State</h2>
    <DemoBlock class="mt-4">
      <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col">
          <BsChipField v-model="chipState" floating-label readonly>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chipState" disabled floating-label>
            <label>State Disabled</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chipState"
            filled
            floating-label
            prepend-icon="bookmark_filled"
            readonly
          >
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField
            v-model="chipState"
            disabled
            filled
            floating-label
            prepend-icon="bookmark_filled"
          >
            <label>State Disabled</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chipState" floating-label outlined prepend-icon="bookmark" readonly>
            <label>State Readonly</label>
          </BsChipField>
        </div>
        <div class="col">
          <BsChipField v-model="chipState" disabled floating-label outlined prepend-icon="bookmark">
            <label>State Disabled</label>
          </BsChipField>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Clearable Field</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md-11 col-lg-10 col-xl-8">
          <div class="mb-5">
            <BsChipField v-model="chip5" clear-button floating-label placeholder="Add Tags...">
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField
              v-model="chip5"
              clear-button
              filled
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-4">
            <BsChipField
              v-model="chip5"
              clear-button
              floating-label
              outlined
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-2">
            Field values: <span class="font-weight-semibold">{{ chip5 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Deletable Chip</h2>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md-11 col-lg-10 col-xl-8">
          <div class="mb-5">
            <BsChipField
              v-model="chip6"
              chip-deletable
              clear-button
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField
              v-model="chip6"
              chip-deletable
              clear-button
              filled
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-4">
            <BsChipField
              v-model="chip6"
              chip-deletable
              clear-button
              floating-label
              outlined
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-2">
            Field values: <span class="font-weight-semibold">{{ chip6 }}</span>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h2 class="mt-5">Chip Styles</h2>
    <h4 class="mt-3">Chip Color</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md-11 col-lg-10 col-xl-8">
          <div class="mb-5">
            <BsChipField
              v-model="chip7"
              chip-color="default"
              chip-deletable
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField
              v-model="chip7"
              chip-color="primary"
              chip-deletable
              filled
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-2">
            <BsChipField
              v-model="chip7"
              chip-color="success"
              chip-deletable
              floating-label
              outlined
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Rounded Pill Chip Style</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md-11 col-lg-10 col-xl-8">
          <div class="mb-5">
            <BsChipField
              v-model="chip8"
              chip-color="default"
              chip-deletable
              chip-pill
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField
              v-model="chip8"
              chip-color="primary"
              chip-deletable
              chip-pill
              filled
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-3">
            <BsChipField
              v-model="chip8"
              chip-color="info"
              chip-deletable
              chip-pill
              floating-label
              outlined
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
        </div>
      </div>
    </DemoBlock>

    <h4 class="mt-5">Outlined Chip Style</h4>
    <DemoBlock class="mt-4">
      <div class="row">
        <div class="col-md-11 col-lg-10 col-xl-8">
          <div class="mb-5">
            <BsChipField
              v-model="chip9"
              chip-color="default"
              chip-deletable
              chip-outlined
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-5">
            <BsChipField
              v-model="chip9"
              chip-color="primary"
              chip-deletable
              chip-outlined
              chip-pill
              filled
              floating-label
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
          <div class="mb-3">
            <BsChipField
              v-model="chip9"
              chip-color="success"
              chip-deletable
              chip-outlined
              floating-label
              outlined
              placeholder="Add Tags..."
            >
              <label>Field Label</label>
            </BsChipField>
          </div>
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
  </div>
</template>
